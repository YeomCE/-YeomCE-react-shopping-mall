import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Tab from '../component/Tab'
import { useDispatch } from 'react-redux'
import {addToCart} from './../redux/store/cartSlice'

const DetailPage = ({ shoes }) => {

    const [fade, setFade] = useState('')
    const [cartAlert, setCartAlert] = useState(false)
    let dispatch = useDispatch();
    let { id } = useParams();


    let clickProduct = shoes.filter((item) => {
        return item.id === Number(id)
    })

    useEffect(() => {
        setFade('end')
        let watchedList = JSON.parse(localStorage.getItem('watched'))
        watchedList.unshift(id)
        localStorage.setItem('watched',JSON.stringify([...new Set(watchedList)]))
    },[])

    const goCart=()=>{
        setCartAlert(true)
        setTimeout(()=>{setCartAlert(false)},2000)
        dispatch(addToCart(clickProduct))
    }

    return (
        <div className={`detail-page ${fade}`}>
            <div className="product">
                <div className="image">
                    <img src={process.env.PUBLIC_URL + `/image/shoes${clickProduct[0].id + 1}.jpg`} />
                </div>
                <div className="product-info">
                    <h4>{clickProduct[0].title}</h4>
                    <p>{clickProduct[0].content}</p>
                    <p>{clickProduct[0].price.toLocaleString()}</p>
                    <button onClick={goCart}>주문하기</button>
                    <div className={`cartAlert ${cartAlert?'on':''}`}>카트에 추가되었습니다.</div>
                </div>
            </div>
            <Tab />
        </div>
    )
}

export default DetailPage