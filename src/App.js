import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import 'react-bootstrap'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-flip';
import 'swiper/css';
import 'aos/dist/aos.css'
import { Route, Routes } from 'react-router-dom';
import Header from './Components/Header/Header';
import Home from './Components/Pages/Home/Home'
import Menu from './Components/Pages/Menu/Menu';
import Gallery from './Components/Pages/Gallery/Gallery';
import About from './Components/Pages/About/About';
import Contact from './Components/Pages/Contact/Contact';
import Footer from './Components/Footer/Footer';
import './App.css';

function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Menu' element={<Menu/>}/>
      <Route path='/Gallery' element={<Gallery/>}/>
      <Route path='/About' element={<About />}/>
      <Route path='/Contact' element={<Contact />}/>
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
