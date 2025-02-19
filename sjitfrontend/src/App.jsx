
import Home from './Component/FunctionalComponent/Home'
import About from './Component/FunctionalComponent/About'
import Login from './Component/FunctionalComponent/Login'
import Signup from './Component/FunctionalComponent/Signup'
import Navbar from './Component/FunctionalComponent/Navbar'

function App() {
  return (
    <>
    <Navbar />
    <div>
      <hr />
      <Home Properties="Hello" sjit="SJIT"/>
      <hr />
      <About />
      <hr />
      <Login />
      <hr />
      <Signup />
      <hr />
    </div>
    </>

  );
}

export default App
