
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './Components/Footer'
import Header from './Components/Header'
import Home from './Components/Home'
import Apps from './pages/Apps'
import Docs from './pages/Docs'
import Error404 from './pages/Error404'

function App() {

  return (
    <div>

      <BrowserRouter>
        {/* Header Component */}
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/apps' element={<Apps />} />
          <Route path='/docs' element={<Docs />} />
          <Route path='*' element={<Error404 />} />
        </Routes>
      </BrowserRouter>  
      {/* Footer Component */}
      <Footer />
    </div>
  )
}

export default App
