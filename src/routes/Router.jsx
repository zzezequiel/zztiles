import React from 'react'
import { Routes, Route, Navigate} from "react-router-dom"
import About from '../ui/views/pages/About'
import Catalogue from '../ui/views/pages/Catalogue'
import Home from '../ui/views/pages/Home'
import Product from '../ui/views/pages/Product'


const Router = () => {
    return (
      <>
          <Routes>
            
                  <Route path="/" element={<Home />}></Route>
                  <Route path="/catalogue" element={<Catalogue />}></Route>
                  <Route path="/about" element={<About />}></Route>
                  <Route path="/product" element={<Product />}></Route>
                  
                  <Route path="/*" element={<Navigate replace to="/" />}></Route>
          </Routes>
          </>
    )
  }
  
  export default Router