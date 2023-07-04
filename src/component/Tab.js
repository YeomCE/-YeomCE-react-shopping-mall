import React, { useEffect, useState } from 'react'

const Tab = () => {

  const [tabDetail, setTabDetail] = useState(0)
  const [fade, setFade] = useState('')

  useEffect(()=>{
    let timer = setTimeout(()=>{setFade('end')},300)

    return()=>{
      clearTimeout(timer)
      setFade('')
    }
  },[tabDetail])

  const tabButtonClick = (e, index) => {
    for (let i = 0; i < 3; i++) {
      e.currentTarget.parentNode.childNodes[i].classList.remove('on');
    }
    e.currentTarget.classList.add('on');
    setTabDetail(index)
  }
  return (
    <div className='tab'>
      <ul className='tab-box'>
        <li className='on' onClick={(e) => { tabButtonClick(e, 0) }}>버튼1</li>
        <li onClick={(e) => { tabButtonClick(e, 1) }}>버튼2</li>
        <li onClick={(e) => { tabButtonClick(e, 2) }}>버튼3</li>
      </ul>
      <div>
        {
          tabDetail === 0 ? <div className={`tab-detail ${fade}`}>내용 1</div>
            : tabDetail === 1 ? <div className={`tab-detail ${fade}`}>내용 2</div>
              : tabDetail === 2 ? <div className={`tab-detail ${fade}`}>내용 3</div> : <></>
        }
      </div>


    </div>

  )
}

export default Tab