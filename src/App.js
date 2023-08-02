import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from './Components/pages/HomePage/Homepage';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer'
import GranitePage from './Components/pages/GranitePage/GranitePage';
import GalleryPage from './Components/pages/GalleryPage/GalleryPage'
import ContactPage from './Components/pages/ContactPage/ContactPage';
function App() {
  return(
    <Router>
      <Routes>
        <Route path='/' element={<><Navbar/><Homepage/><Footer/></>}/>
        <Route path='/granite' element={<><Navbar/><GranitePage/><Footer/></>}/>
        <Route path='/gallery' element={<><Navbar/><GalleryPage/><Footer/></>}/>
        <Route path='/granite/product/:id' element={<><Navbar/><GranitePage/><Footer/></>}/>
        <Route path='/contact' element={<><Navbar/><ContactPage/><Footer/></>}/>
      </Routes>
    </Router>
  )
}

export default App;
