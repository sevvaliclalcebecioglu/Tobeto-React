import logo from './logo.svg';
import './App.css';
import React from "react";
import Header from './components/header';
import Variables from './components/variables';
import Props from './components/props';
import Loops from './components/loop';
import UserDetail from './components/UserDetail';
import UsingState from './components/UsingState';

const _info = {
    title:  "Lorem, ipsum dolor.",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo, omnis."
};

const users = [
  {
    name: "Vefa Numan",
    username: "Tozan",
    company: "xxxx"
  },
  {
    name: "Ömer Selim",
    username: "Ceylan",
    company: "xxxx"
  },
  {
    name: "Ahmet Baha",
    username: "Tozan",
    company: "xxxx"
  }
]

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

   
    /* <React.Fragment>
      <Header />
      <p className="App">Hello Tobeto</p>
      <label htmlFor="myİnput">
          Name 
          <input id='myİnput' />
      </label>
    </React.Fragment> */

    <div>
      {/*<Variables />*/}
      {/* <Props name="İclal" surname={"Cebecioğlu"} Age={21} developer={true} info={_info} /> */}
      {/*<Loops users={users} /> */}
      {/*<UserDetail name={"İclal Cebecioğlu"} age={21} hobies={["book", "guitar", "coding"]} address={{detail:"adresim", zipcode:80090}} />*/}
      <UsingState />


    </div>

  );
}

export default App;
