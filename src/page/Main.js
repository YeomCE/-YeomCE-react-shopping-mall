import React, { useEffect, useState } from 'react'
import MainCard from '../component/MainCard'
import axios from 'axios'
import data from '../data'
import { ClipLoader } from 'react-spinners'
import { useNavigate } from 'react-router-dom'

const Main = ({ shoes, setShoes }) => {
    const [seeMoreNumber, setSeeMoreNumber] = useState(1)
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate();

    let watchedList = JSON.parse(localStorage.getItem('watched')).splice(0, 3)

    useEffect(() => {
        setLoading(true)
        setSeeMoreNumber(1)
        setShoes(data)
        setLoading(false)
    }, [])

    useEffect(() => {
        if (seeMoreNumber == 2) {
            setLoading(true)
            axios.get('https://codingapple1.github.io/shop/data2.json')
                .then((result) => {
                    let newData = [...shoes, ...result.data]; //# 원본은 그대로 보존한다.
                    setShoes(newData)
                    setLoading(false)
                })
                .catch(() => {
                    console.log('실패했습니다.')
                    setLoading(false)
                })
        }
        else if (seeMoreNumber == 3) {
            setLoading(true)
            axios.get('https://codingapple1.github.io/shop/data3.json')
                .then((result) => {
                    let newData = [...shoes, ...result.data]; //# 원본은 그대로 보존한다.
                    setShoes(newData)
                    setLoading(false)
                })
                .catch(() => {
                    console.log('실패했습니다.')
                    setLoading(false)
                })
        }
    }, [seeMoreNumber])

    const recentlyViewedClick = (item) => {
        Promise.all([
            axios.get('https://codingapple1.github.io/shop/data2.json'),
            axios.get('https://codingapple1.github.io/shop/data3.json')
        ])
            .then((result) => {
                console.log(result)
                let newData = [...shoes, ...result[0].data, ...result[1].data]; //# 원본은 그대로 보존한다.
                setShoes(newData)
                navigate(`/detail/${item}`)
            })
            .catch(() => {
                console.log('실패했습니다.')
            })
    }

    const seeMoreClick = () => {
        setSeeMoreNumber(seeMoreNumber + 1)
    }


    if (loading) {
        return <div className='loading'><ClipLoader color='#999' size={150} /></div>
    }

    return (
        <div className='main'>
            <div className='banner-box'>
                <div className='main-bg' style={{ backgroundImage: "url(/image/bg.png)" }} />
                <div className='recently-viewed'>
                    <p>최근 본 상품</p>
                    {watchedList.map((item) => {
                        return <div className='recently-viewed-img' onClick={() => { recentlyViewedClick(item) }}><img src={process.env.PUBLIC_URL + `/image/shoes${Number(item) + 1}.jpg`} /></div>
                    })}
                </div>
            </div>
            <div className='container'>
                {shoes.map((item) => {
                    return <MainCard item={item} />
                })}
            </div>
            {seeMoreNumber < 3 ? <p className='seeMore' onClick={seeMoreClick}>더보기</p> : <></>}

        </div>
    )
}

export default Main