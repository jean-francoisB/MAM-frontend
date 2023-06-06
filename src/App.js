import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TokenContext from './_utils/TokenContext';
import UserContext from './_utils/UserContext';

import './App.css';
import Home from './pages/Home';
import Qui from './pages/Qui';
import Modalites from './pages/Modalites';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Pedagogie from './pages/Pedagogie';
import Error from './_utils/Error';
import Medias from './pages/Medias';

import LoginForm from './pages/LoginForm';

function App() {
  const [token, setToken] = useState('');
  const [prenom, setPrenom] = useState('');

  return (
    <TokenContext.Provider value={{ token, prenom }}>
      <UserContext.Provider value={prenom}>
        <div className='text-dark'>
          <Router>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/pedagogie" element={<Pedagogie />} />
              <Route path="/qui" element={<Qui />} />
              <Route path="/modalites" element={<Modalites />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/login" element={<Login />} />
              <Route path="/loginform" element={<LoginForm />} />
              <Route path="/medias" element={<Medias />} />
              <Route path="*" element={<Error />} />
            </Routes>
          </Router>
        </div>
      </UserContext.Provider>
    </TokenContext.Provider>
  );
}

export default App;
