
import './App.css';

import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


export default class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Navbar />


          <Routes>
            <Route exact path="/Business" element={<News key="business" pageSize={5} country='in' category='business' />} />
            <Route exact path="/General" element={<News key="general" pageSize={5} country='in' category='general' />} />
            <Route exact path="/Entertainment" element={<News key="entertainment" pageSize={5} country='in' category='entertainment' />} />
            <Route exact path="/Health" element={<News key="health" pageSize={5} country='in' category='health' />} />
            <Route exact path="/Science" element={<News key="science" pageSize={5} country='in' category='science' />} />
            <Route exact path="/Sports" element={<News key="sports" pageSize={5} country='in' category='sports' />} />
            <Route exact path="/Technology" element={<News key="technology" pageSize={5} country='in' category='technology' />} />
            <Route exact path="/Home" element={<News key="Home" pageSize={5} country='in' category='general' />} />


          </Routes>
        </Router>
      </>
    )
  }
}
