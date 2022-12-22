import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Home from './Home'
import Show from './Show'
import Add from './Add'
import ProDetail from './ProDetail'


import {
   BrowserRouter,
    Route,
    Routes,
 } from "react-router-dom";
import Delete from './Delete';
import Update from './Update'

  
export default function App() {
    return(
<>
<BrowserRouter>
       <Header />
       <Routes>
       <Route path="/" element={<Home />}/>
       <Route path="/add" element={<Add />}/>
       <Route path="/show" element={<Show />}/>
       <Route path="/single-product/:productId" element={<ProDetail />}/>
       <Route path="/delete-data/:productId" element={<Delete />}/>
       <Route path="/update-data/:productId" element={<Update />}/>
       </Routes>
       <Footer />
       </BrowserRouter>
       </>
    )
}