import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import About from './pages/about/About'
import Home from './pages/home/Home'
import Navbar from './components/navbar/Navbar'
import Error from './pages/error/Error'
import Product from './pages/product/Product'
import ProductDetails from './pages/productDetails/ProductDetails'

function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/products' element={<Product />} />
          <Route path='/product/:id' element={<ProductDetails />}/>
          <Route path='*' element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
