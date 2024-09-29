import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './Home';
import { Search } from './Search';
import { Watch } from './Watch';
export const Routss = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/watch/:id' element={<Watch/>}/>
        <Route path='/search' element={<Search/>}/>
      </Routes>
    </Router>
  );
}
