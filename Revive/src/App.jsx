import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Nopage from "./pages/Nopage"

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={ <Home/> }/>
          <Route path="/Home" element={ <Home/> }/>
          <Route path="/About" element={ <About/> }/>
          <Route path="/Contact" element={ <Contact/> }/>
          <Route path="/*" element={ <Nopage/> }/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
