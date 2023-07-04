import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {addCount, minusCount, deleteItem} from './../redux/store/cartSlice'

const CartPage = () => {
  const state = useSelector(state => state)
  let dispatch = useDispatch();

  const addButtonClick = (i) => {
    dispatch(addCount(state.cart[i].id))
  }
  const minusButtonClick = (i) => {
    dispatch(minusCount(state.cart[i].id))
  }
  const deleteButtonClick = (i) =>{
    dispatch(deleteItem(state.cart[i].id))
  }

  return (
    <div className='cart-page'>
      <h2>{state.user.name}의 장바구니  </h2>
      <div className='table-title'>
        <div>#</div>
        <div>상품명</div>
        <div>수량</div>
        <div>변경하기</div>
        <div></div>
      </div>
      {state.cart.map((item, i) =>
        <div className='table-con' key={i}>
          <div>{item.id}</div>
          <div>{item.title}</div>
          <div>{item.count}</div>
          <div>
            <button onClick={()=>{addButtonClick(i)}}>+</button>
            <button onClick={()=>{minusButtonClick(i)}}>-</button>
          </div>
          <button className='delete' onClick={()=>{deleteButtonClick(i)}}>삭제</button>
        </div>
      )}

    </div>
  )
}

export default CartPage