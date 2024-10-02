import React from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom';
import { Home } from './Home';
import { Contact } from './Contact';
import { About } from './About';
import { Login } from './Login';
import { Team } from './Team';
import { Project } from './Project';
import { Career } from './Career';
import { Navbar } from './Navbar'
import { Footer } from './Footer'
import { Register } from './Register';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />}></Route>
        <Route path='login' element={<Login/>}></Route>
        <Route path='register' element={<Register/>}></Route>
        <Route path='contact' element={<Contact/>}></Route>
        <Route path='about' element={<About/>}></Route>
        <Route path='team' element={<Team/>}></Route>
        <Route path='career' element={<Career/>}></Route>
        <Route path='project' element={<Project/>}></Route>
        {/* <Route path='contact' element={<Contact/>}></Route>
        <Route path='contact' element={<Contact/>}></Route>
        <Route path='contact' element={<Contact/>}></Route> */}
      </Routes>
      <Footer/>
    </>
  )
}

export default App
