
import './App.css'
import Footer from './Components/Footer'
import Header from './Components/Header'
import Home from './Components/Home'

function App() {

  return (
    <div className='md:px-0'>
      {/* Header Component */}
      <Header />
      {/* Home Component */}
      <Home />
      {/* Footer Component */}
      <Footer />
    </div>
  )
}

export default App
