import Footer from "./components/Footer";
import Header from "./components/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Book from "./pages/Book";
import Contact from "./pages/Contact";
import {BrowserRouter as Router , Routes ,Route} from "react-router-dom"

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
     <Route path='/book' element={<Book/>}/>
     <Route path='/blog'element={<Blog/>}/>
     <Route path='/contact' element={<Contact/>}/>
      </Routes>
      <Footer/>
    </Router>
     
    
     
    
  );
}

export default App;
