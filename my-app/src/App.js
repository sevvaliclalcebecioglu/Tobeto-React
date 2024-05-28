import logo from './logo.svg';
import './App.css';
import Header from './components/header';

function App() {
  return (
   /* <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.?? (İclal Cebecioğlu)
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
    </div> */

   
    <div>
      <Header />
      <p>Hello World!</p>  
      <Header />
      <p>Hello World!</p>  
      <Header />
      <p>Hello World!</p>  
    </div>

  );
}

export default App;
