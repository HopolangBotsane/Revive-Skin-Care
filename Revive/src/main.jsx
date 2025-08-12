import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
<<<<<<< Updated upstream
<<<<<<< Updated upstream
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// import App from './App.jsx'

import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Nopage from "./pages/Nopage"
import { BrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    errorElement: <Nopage/>,
  },
  {
    path: "/About",
    element: <About/>
  },
  {
    path: "/Contact",
    element: <Contact/>
  }
])
=======
=======
>>>>>>> Stashed changes
// import './index.css'
import App from './App.jsx'
>>>>>>> Stashed changes

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
