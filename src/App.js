import './App.css';
import InformationNav from './Components/Header/InformationNav';
import Menu from './Components/Menu/Menu';
import ImageProduct from './Components/ImageProduct/ImageProduct';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <InformationNav />
        <Menu />
      </header>
      <div className='body'>
        <ImageProduct />
      </div>
    </div>
  );
}

export default App;
