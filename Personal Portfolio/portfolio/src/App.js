import React from 'react';
// import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Intro from './components/Intro/Intro';
import Content from './components/Content/Content';
import Edu from './components/Edu/Edu'
import Project from './components/Projects/Project';
import Contact from './components/Contact/Contact';
import Navbar from './components/navbar/Navbar';
function App() {
  return (
    <div className="App">
      {/* <Navbar/> */}
      <Intro/>
      <Content/>
      <Edu/>
      <Project/>
      <Contact/>
      {/* <Router>
        <Routes>
          <Route path='/' element= {<contact/>} />
        </Routes>
      </Router> */}
    </div>
  );
}

export default App;
