import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import FrontPage from './Components1/FrontPage';
import Footer from './Footer/Footer';
import Home from './Components/Home'; // Adjust the import path as needed
import Discover from './Components/Discover';
import About from './Components/About';
import Watch from './Components/Watch';
import About_1 from './Components/About_1';
import Home2 from './Components/Home2';
import Home3 from './Components/Home3';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<FrontPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/discover-1" element={<Discover name={"Discovery with"}/>} />
        <Route path="/discover-2" element={<Discover name={"AI and its Future with"}/>} />
        <Route path="/discover-3" element={<Discover name={"Cosmoso and Humans"}/>} />
        <Route path="/watch" element={<Watch />} />
        <Route path="/watch-1" element={<Watch name={"Live Shows"} />} />
        <Route path="/watch-2" element={<Watch name={"Podcasts Shows"} />} />
        <Route path="/watch-3" element={<Watch name={"Serials Shows"} />} />
        <Route path="/about-1" element={<About_1 id={1}/>}/>
        <Route path="/about-2" element={<About_1 id={2}/>}/>
        <Route path="/about-3" element={<About_1 id={3}/>}/> 
        <Route path='/home-2' element={<Home2/>}/>
        <Route path='/home-3' element={<Home3/>}/>
        
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
