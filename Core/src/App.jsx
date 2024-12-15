import { Routes,Route } from 'react-router-dom';
import Home from './frontend/components/Home';
import Collections from './frontend/components/Collections';
import About from './frontend/components/AboutPage';
import Contact from './frontend/components/Contact';
import Product from './frontend/pages/Product';
import Cart from './frontend/pages/Cart';
import OrderPage from './frontend/pages/OrderPage';
import Orders from './frontend/pages/Orders';
import Navbar from './frontend/components/Navbar';

function App() {


  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <Navbar />
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/collection' element={<Collections />}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact />}/>
          <Route path='/product/:productId' element={<Product />}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/order-page' element={<OrderPage/>} />
          <Route path='/orders' element={<Orders/>} />
      </Routes>

    </div>
  )  
}

export default App
