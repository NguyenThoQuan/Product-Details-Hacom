import './App.css';
import InformationNav from './Components/Header/InformationNav';
import Menu from './Components/Menu/Menu';
import ImageProduct from './Components/ProductDetails/ImageProduct';
import Parameters from './Components/Parameters/Parameters';
import SimilarProduct from './Components/SimilarProduct/SimilarProduct';
import SubmitEmail from './Components/SubmitEmail/SubmitEmail';
import Footer from './Components/Footer/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <InformationNav />
        <Menu />
      </header>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className='body'>
        <ImageProduct />
        <Parameters />
        <SimilarProduct />
        <SubmitEmail />
        <Footer />
      </div>
    </div>
  );
}

export default App;
