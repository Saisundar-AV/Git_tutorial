
import Home from './Component/FunctionalComponent/Home'
import About from './Component/FunctionalComponent/About'
import Login from './Component/FunctionalComponent/Login'
import Signup from './Component/FunctionalComponent/Signup'
import Navbar from './Component/FunctionalComponent/Navbar'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import UseEffect from './Component/FunctionalComponent/Hooks/UseEffect'
function App() {
  return (
    <>    
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/login" element={<Login />} />
      <Route path="use-effect" element={<UseEffect />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
    </BrowserRouter>
   
    </>

  );
}

export default App
