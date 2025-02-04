import logo from './logo.svg';
import './App.css';
import MinusB from './comps/minusB';
import PlusB from './comps/plusB';
import Count from './comps/counter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <MinusB />
      <Count />
      <PlusB />
    </div>
  );
}

export default App;
