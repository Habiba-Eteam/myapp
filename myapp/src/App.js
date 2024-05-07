import logo from './logo.svg';
import './App.css';
import Navbar from './compoenente/Navbar';
import Silder from './compoenente/Slider';
import ProductsList from './compoenente/ProductsList';
import { Route,Routes,Link } from 'react-router-dom';
import About from './compoenente/About';
import ProductDetails from'./compoenente/ProductDetails';
import Product from './compoenente/Product';
function App() {
  return (
    <><div className="App">
        <Navbar />
          <Routes> 
          <Route path="/" element={<>
            <Silder />
           <ProductsList />
         </>}/>   
         <Route path="about"element={<About/> }/>
         <Route path="product/:productId/:term"element={<ProductDetails/> }/>
          </Routes>
        
        
      </div></>
  );
}

export default App;
