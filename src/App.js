import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Nav from './components/Nav'
import Splash from './components/Splash';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
        <Nav />
        <Splash />
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
