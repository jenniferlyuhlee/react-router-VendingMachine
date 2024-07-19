import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import VendingMachine from './VendingMachine'
import Snack from './Snack'
import NavBar from './NavBar';
import './App.css'

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<VendingMachine />}/>
          <Route path="/sourpatch" element={<Snack
                                            name="Sourpatch Kids"
                                            description="First they're sour... then they're sweet."
                                            image="https://popicon.life/wp-content/uploads/2022/05/SPK_Red_Green-300x269.png"/>}/>
          <Route path="/drpepper" element={<Snack
                                            name="Dr. Pepper"
                                            description="The most misunderstood soft drink."
                                            image="https://bevmo.com/cdn/shop/files/f962618b-12b7-4790-bd51-90103812f0cb.png?v=1720066618&width=1445"/>}/>
          <Route path="/cheetos" element={<Snack
                                            name="Jalapeno Cheetos"
                                            description="Dangerously cheesy."
                                            image="https://assets.caseys.com/m/a08360994b39d492/400x400-2840058988_base.PNG"/>}/>
        </Routes>
      </BrowserRouter>
    </div>

  )
}

export default App
