import logo from './logo.svg';
import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Cart from './pages/cart';
import Home from './pages/home';
import Shop from './pages/Shop';
import canazonlogo from "./pages/canazon-logo.png";

function App() {
  return (
    <>
    <img id="mylogo" src={canazonlogo}></img>
    <nav>
        <ul id='hotbar'>
            <li><Link id='homelink' to='/'>Home</Link></li>
            <li><Link id='cartlink' to='/cart'>Cart</Link></li>
            <li><Link id='shoplink' to='/shop'>Shop</Link></li>
        </ul>
    </nav>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/cart' element={<Cart />}/>
        <Route path='/shop' element={<Shop />}/>
      </Routes>
    </>
  );
}

export default App;
