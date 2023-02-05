import { Route, Routes } from 'react-router-dom';
import Home from './components/home';
import About from './components/about';
import Navbar from './components/navbar';
import Main from './components/main';


const App = () => {
  return ( 
    <div className="App">
      <Navbar />
          <Routes>
           <Route path = "/home" element = {<Home /> } />
           <Route path = "/About" element = {<About /> } />
           <Route path = "/" element = {<Main /> } />
          </Routes> 
    </div> 
  );
}


export default App;