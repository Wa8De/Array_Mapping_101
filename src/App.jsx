import { BrowserRouter, Outlet, Route ,  Routes } from "react-router-dom"

import  Home  from "./Pages/Home"
import Layout from "./Pages/Layout"
import Product from "./Pages/Product"
import About from "./Pages/About"
function App() {

  return (
    <div className="App">

     <BrowserRouter >
     <Layout/>
      <Routes>
      <Route path="/"  element={<Layout/>}/>
        <Route index element={<Home/>}/>
        <Route  index element={<Home/>}/>
        <Route path="/Product/:id"   element={<Product/>}/>
        <Route path="/About"   element={<About/>}/>
      </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App
