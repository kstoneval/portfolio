import logo from './logo.svg';
import './App.css';
import Contact from './pages/Contact';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
import { FontawesomeObject } from '@fortawesome/fontawesome-svg-core';
import ResponsiveAppBar from './components/header';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
// import {BrowserRouter as Router, Link, Route, Routes} from 'react-router-dom';


function App() {
  return (
    <div className="App">
    <ResponsiveAppBar/> 
    <About></About>
    <Portfolio></Portfolio>
    <Contact></Contact> 
    </div>
  );
}

export default App;
