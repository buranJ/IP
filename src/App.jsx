
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import './App.css'


import { Service } from './pages/Service/Service'
import { Case } from './pages/Case/Case'
import { Faq } from './pages/Faq/Faq'
import { Home } from './pages/Home/Home'

import ProdCase from './pages/ProdCase/ProductCase'
import Header from './components/Header'
import Error from './components/Error'
import Footer from './components/Footer'

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service" element={<Service />} />
        <Route path="/cases" element={<Case />} />
        <Route path="/register" element={<ProdCase />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="*" element={<Error />} />
      </Routes>
      
      <Footer />
    </Router>
  )
}

export default App
