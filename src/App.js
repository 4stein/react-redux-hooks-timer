import logo from './logo.svg';
import './App.css';
import {TimerContainer} from "./components/Timer/TimerContainer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          My React-Redux Timer
        </p>
        <TimerContainer />
      </header>
    </div>
  );
}

export default App;
