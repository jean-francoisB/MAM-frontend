import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';



import './App.css';
import Home from './pages/Home';
import Qui from './pages/Qui';
import Modalites from './pages/Modalites';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Pedagogie from './pages/Pedagogie';
import Error from './_utils/Error';






function App() {


  return (


    <div className='text-dark'>
      {/* <Container className='mw-100 p-0' > */}
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/pedagogie" element={<Pedagogie/>}  />
          <Route path="/qui" element={<Qui/>}  />
          <Route path="/modalites" element={<Modalites/>}  />
          <Route path="/contact" element={<Contact/>}  />
          <Route path="/login" element={<Login/>}  />
          <Route path="*" element={<Error/>}/>
        </Routes>
      </Router> 
    
















    </div>
  );
}

export default App;
