import './App.css';
import { Route, Routes } from 'react-router-dom';
import Main from './page/Main';
import DetailPage from './page/DetailPage';
import Event from './page/Event';
import { useEffect, useState } from 'react';
import data from './data';
import CartPage from './page/CartPage';
import NavBar from './component/NavBar';

function App() {

  useEffect(()=>{
    
    let watchedList = JSON.parse(localStorage.getItem('watched'))
    if(watchedList == null ){
      localStorage.setItem('watched', JSON.stringify([]))
    }
    
  },[])

  
  let [shoes, setShoes] = useState(data);


  return (
    <div>

      <NavBar />
      <Routes>
        <Route path='/' element={<Main shoes={shoes} setShoes={setShoes}/>} />
        <Route path ='/detail/:id' element={<DetailPage shoes={shoes}/>}/>
        <Route path='/event' element={<Event />}>
          <Route path='one' element={<h4>첫 주문 시 양배추 즙 서비스</h4>} />
          <Route path='two' element={<h4>생일 기념 쿠폰 받기</h4>} />
        </Route>
        <Route path='/cart' element={<CartPage />} />
        <Route path ='*' element={<div>없는 페이지 입니다.</div>}/> {/* * : 외의 모든 페이지  */}
      </Routes>
    </div>
  );
}

export default App;
