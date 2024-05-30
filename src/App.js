import './App.css';
import Home from './routes/Home/home-component';
import { Routes, Route } from "react-router-dom"
import Navigation from './routes/navigation/navigation';
import Authentication from './routes/Authentication/Authentication';
import Shop from './routes/shop/shop.component';
import Checkout from './routes/checkout/checkout.component';

function App() {  
  
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='auth' element={<Authentication />} />
        <Route path='shop' element={<Shop />} />
        <Route path='checkout' element={<Checkout />} />
      </Route>
    </Routes>

  );
}

export default App;