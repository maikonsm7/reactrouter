import {BrowserRouter, Routes, Route} from 'react-router-dom'

// pages
import Home from './pages/Home'
import About from './pages/About'
import Navbar from './components/Navbar';
import Product from './pages/Product';
import NotFound from './pages/NotFound';
import SearchForm from './components/SearchForm';
import Search from './pages/Search';

function App() {
  return (
    <div>
      <h1>React Router</h1>
      <BrowserRouter>
      <Navbar />
      <SearchForm />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        {/* Rota dinâmica */}
        <Route path='/product/:id' element={<Product />} />
        <Route path='/search' element={<Search />}/>
        {/* Página não encontrada */}
        <Route path='*' element={<NotFound />}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
