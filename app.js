import React from "react"
import Header from "./Header"
import Login from "./Login"
import  Signup from "./Signup"
import  Profile from "./Profile.js"
import  Userdashboard from "./Userdashboard"
import  Tsmdashboard from "./Tsmdashboard"
import  Partnerdashboard from "./Partnerdashboard"
import  Bankform from "./Bankform"
import  Mytaskform from "./Mytaskform"
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
export default function App(){
  return(
    
    <Router>
    <Routes>
    <Route path="/" element={[<Header/>,<Login/>]}/>
    <Route path="/login" element={[<Header/>,<Login/>]}/>
    <Route path="/signup" element={[<Header/>,<Signup/>]}/>
    <Route path="/userdashboard" element={<Userdashboard/>}/>
    <Route path="/tsmdashboard" element={<Tsmdashboard/>}/>
    <Route path="/partnerdashboard" element={[<Header/>,<Partnerdashboard/>]}/>
    <Route path="/profile" element={<Profile/>}/>
    <Route path="/bankform" element={<Bankform/>}/>
    <Route path="/mytaskform" element={<Mytaskform/>}/>
    </Routes>
    </Router>
    
    
    
    )
}
