import Home from './Component/FunctionalComponent/Home'
import Login from './Component/FunctionalComponent/Login'
import About from './Component/FunctionalComponent/About'
import Navbar from './Component/FunctionalComponent/Navbar'
import Contact from './Component/FunctionalComponent/Contact'
import Signup from './Component/FunctionalComponent/Signup'
import UseState from './Component/FunctionalComponent/UseState'
import UseEffectApi from './Component/FunctionalComponent/UseEffectApi'
import UseEffect from './Component/FunctionalComponent/UseEffect' 
import UseRef from './Component/FunctionalComponent/UseRef'
import UseMemo from './Component/FunctionalComponent/UseMemo'
import UseMemoize from './Component/FunctionalComponent/UseMemoize'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import HoC from './Component/FunctionalComponent/HoC/HoC'
//import './App.css'

function App() {
  

  return (
    <main>
    <BrowserRouter>
    <Navbar></Navbar>
    <Routes>
      
    <Route path='/' element={<Home properties="Hello" sjit="SJIT" />}></Route>
    <Route path='/about' element={<About />}></Route>
    <Route path='/login' element={<Login />}></Route>
    <Route path="/use-effect" element={<UseEffect />} />
    <Route path="/use-state" element={<UseState />} />
    <Route path='/contact' element={<Contact />}></Route>
    <Route path='/signup' element={<Signup />} />
    <Route path='/use-api' element={<UseEffectApi />}></Route>
    <Route path='/use-ref' element={<UseRef />} />
    <Route path='/hoc' element={<HoC />} />
    <Route path='/use-memo' element={<UseMemo />}></Route>
    <Route path='/use-memoize' element={<UseMemoize />}></Route>
    </Routes>
    </BrowserRouter>
    </main>
  );
}

export default App;