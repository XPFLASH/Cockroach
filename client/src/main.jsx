import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Registro from './pages/registro';
import Consulta from './pages/consulta';
import Login from './pages/login';
import Logout from './pages/logout.jsx';
import About from './pages/about.jsx';
import Contact from './pages/contact.jsx';
import PrivateRoute from './utils/privateRoute.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
        <Router>
      <NavBar />
      <Routes>
        <Route path='/' element={(
          <div id='home'>
            <header>
              <h1 id='h1Home'>Dashboard con integración de Cockroach</h1>
            </header>
            <section id='sectionHome'>
              <h3>¿Qué es CockroachDB?</h3>
              <p>A
              </p>
              
              <p>A
              </p>
            </section>
          </div>
        )} />
        <Route path="/login" element={<Login />}/>
        <Route path="/registro" element={<Registro />}/>
        <Route path="/consulta" element={<PrivateRoute><Consulta /></PrivateRoute>}/>
        <Route path="/contact" element={ <PrivateRoute><Contact /></PrivateRoute>}/>
        <Route path="/about" element={ <PrivateRoute><About /></PrivateRoute>}/>
        <Route path="/logout" element={<Logout />} /> 
      </Routes>
    </Router>
  </StrictMode>,
)
