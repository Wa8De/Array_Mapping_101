import { BrowserRouter, Outlet, Route ,  Routes } from "react-router-dom"

import  Home  from "./Pages/Home"
import Layout from "./Pages/Layout"
import Product from "./Pages/Product"

function App() {

  return (
    <div className="App">
     <BrowserRouter >
      <Routes>
        <Route path="/" index element={<Home/>}></Route>
        <Route path="/Product/:id"   element={<Product/>}></Route>
      </Routes>
      </BrowserRouter>
  
    </div>
  )
}

export default App
