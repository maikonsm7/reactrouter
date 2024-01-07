import {BrowserRouter, Routes, Route} from 'react-router-dom'

// pages
import Home from './pages/Home'
import About from './pages/About'
import Navbar from './components/Navbar';
import Product from './pages/Product';

function App() {
  return (
    <div>
      <h1>React Router</h1>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        {/* Rota dinâmica */}
        <Route path='/product/:id' element={<Product />} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
