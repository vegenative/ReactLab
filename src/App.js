import './App.css';
import HelloWorld from './Components/HelloWorld';
import Name from './Components/Name';
import Group from './Components/Group';
import Album from './Components/Album';
import Counter from './Components/Counter';
import Header from './Components/Header/header';
import SideMenu from './Components/SideMenu/sideMenu';
import Footer from './Components/Footer';
import Home from './Components/Pages/Home/home';
import FeaturedInfo from './Components/FeaturedInfo/featuredInfo';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import { RouterTwoTone } from '@material-ui/icons';
import { useState } from "react";

function App() {

  const [statechat, setStateChat] = useState(false);
  const chatState = () => {
      setStateChat(!statechat);
      console.log(statechat)
  }

  return (
    <BrowserRouter>
      <div className="App">
            <Header></Header>
            <div className='sideMenu'>
              <SideMenu></SideMenu>
              <div className='other'>
                <Routes>
                  <Route path="/" element={<Home/>}></Route>
                  <Route path="/info" element={<FeaturedInfo/>}></Route>
                </Routes>
                <button className="chat-button" onClick={chatState}>
                </button>
                {statechat && 
                <div className='chat'>
                  siemanko
                </div>
                } 
              </div> 
            </div>
            <HelloWorld ></HelloWorld>
            <div className='h1'>
            <Name name = "Paweł Woźniak"></Name>
            </div>
            <Group group ="INMN4_PA2"></Group>
            <Album album = "40623"></Album>
            <Counter></Counter>
        </div>
      </BrowserRouter>

  );
}

export default App;
