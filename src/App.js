import './App.css';
import React from 'react';
import {Navbar} from './Navbar'
import { Home, About } from './pages';

const App = () => (
  <div className="app">
    <Navbar />
    <Home />
    <About />
    
  </div>
)
export default App