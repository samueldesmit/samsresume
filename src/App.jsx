import './App.css'
import { Routes, Route } from 'react-router-dom'
import Nav from "./components/Nav/Nav"
import Contact from "./pages/Contact/Contact"
import Home from "./pages/Home/Home"
import Cases from "./pages/Cases/Cases"
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
function App() {

  return (
    <>
      <Nav />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cases" element={<Cases />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      {/* <Footer /> */}
    </>
  )
}

export default App
