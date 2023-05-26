import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter,Routes,Route} from'react-router-dom';
import Skills from './pages/skills';
import Aboutme from './pages/Aboutme';
import Experience from './pages/Experience';
function App() {
  return (
    <div className="App">
    
    
      <BrowserRouter>
      <Navbar/>
      <Routes>
   
      <Route path='Aboutme' element={<Aboutme/>}/>
      <Route path='Skills' element={<Skills/>}/>
      <Route path='Experience' element={<Experience/>}/>
      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
