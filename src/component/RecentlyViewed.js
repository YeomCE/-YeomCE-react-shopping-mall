import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';


const RecentlyViewed = ({shoes, setShoes, watchedList}) => {

    const navigate = useNavigate();

    console.log("watchedList",watchedList)
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

    return (
        <div className='recently-viewed'>
            <p>최근 본 상품</p>
            {watchedList?.map((item) => {
                return <div className='recently-viewed-img' onClick={() => { recentlyViewedClick(item) }}><img src={process.env.PUBLIC_URL + `/image/shoes${Number(item) + 1}.jpg`} /></div>
            })}
        </div>
    )
}

export default RecentlyViewed