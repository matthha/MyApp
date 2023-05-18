import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Nav from './components/Nav'
import Splash from './components/Splash';
import Page from './components/Page';
// Use app to load the components that we want. 
// Utilize screen state to select the right components with the right information.
import {useState} from "react";


function App() {
  const [screen, setScreen] = useState("Learn");
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <Nav />
        <Splash />
        <Page screen={screen} />
        <p>Still adding things here.</p>
        <p>
          Now we are going to do things!
          2023-May-03
        </p>
       
      </header>
    </div>
  );
}

export default App;
