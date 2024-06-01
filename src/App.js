import './App.css';
import InformationNav from './Components/Header/InformationNav';
import Menu from './Components/Menu/Menu';
import ScrollImage from './Components/ScrollImage/ScrollImage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <InformationNav />
        <Menu />
      </header>
      <div>
        <ScrollImage />
      </div>
    </div>
  );
}

export default App;
