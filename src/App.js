import './App.css';
import HelloWorld from './Components/HelloWorld';
import Name from './Components/Name';
import Group from './Components/Group';
import Album from './Components/Album';
import Counter from './Components/Counter';
import Header from './Components/Header/header';
import SideMenu from './Components/SideMenu';
import Content from './Components/Content';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <div className='sideMenu'>
        <SideMenu></SideMenu>
        <Content></Content>
      </div>
      <Footer></Footer>

      <HelloWorld ></HelloWorld>
      <div className='h1'>
      <Name name = "Paweł Woźniak"></Name>
      </div>
      <Group group ="INMN4_PA2"></Group>
      <Album album = "40623"></Album>
      <Counter></Counter>
    </div>
  );
}

export default App;
