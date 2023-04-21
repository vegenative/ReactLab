import logo from './logo.svg';
import './App.css';
import HelloWorld from './Components/HelloWorld';
import Name from './Components/Name';
import Group from './Components/Group';
import Album from './Components/Album';
import Counter from './Components/Counter';

function App() {
  return (
    <div className="App">
      <HelloWorld ></HelloWorld>
      <div className='h1'>
      <Name name = "Paweł Woźniak"></Name>
      </div>
      <Group group ="INMN4_PA2"></Group>
      <Album album = "40623"></Album>
      <Counter></Counter>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edytuj <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
