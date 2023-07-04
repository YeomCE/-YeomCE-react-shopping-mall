import React from 'react'
import { useNavigate } from 'react-router-dom'

const MainCard = ({item}) => {
  const navigate = useNavigate();

  const detailView =()=>{
    navigate(`/detail/${item.id}`)

  }
  return (
      <div className='product-box' onClick={detailView}>
        <img src={process.env.PUBLIC_URL + `/image/shoes${item.id+1}.jpg`} />  {/* public 폴더 이미지 사용 권장 방식 */}
        <h4>{item.title}</h4>
        <p>{item.price.toLocaleString()}</p>
      </div>
  )
}

export default MainCard