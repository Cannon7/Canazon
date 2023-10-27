import logo from './logo.svg';
import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Cart from './pages/Cart';
import Home from './pages/Home';

function App() {
  return (
    <>
    <nav>
        <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/cart'>Cart</Link></li>
        </ul>
    </nav>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/cart' element={<Cart />}/>
      </Routes>
    </>
  );
}

export default App;
