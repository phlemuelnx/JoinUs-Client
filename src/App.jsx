import { Routes, Route } from 'react-router-dom';
import axios from 'axios';
import './App.css';

import Register from './pages/01_register/Register';
import Login from './pages/02_login/Login';
import Navbar from './pages/03_navbar/Navbar';
import ProtectedRoutes from './utility/ProtectedRoutes';
import Dashboard from './pages/04_dashboard/Dashboard';
import Footer from './pages/05_footer/Footer';
import NotFound from './pages/99_notfound/NotFound';

// axios.defaults.baseURL = 'http://localhost:4000';
axios.defaults.baseURL = 'https://join-us-form-api.onrender.com';
axios.defaults.withCredentials = true;

function App() {
  return (
    <div className='container'>
      <Routes>
        {/* PUBLIC ROUTES */}
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />

        {/* PRIVATE ROUTES */}
        <Route
          path='/'
          element={
            <div>
              {/* <Navbar /> */}
              <ProtectedRoutes />
              {/* <Footer /> */}
            </div>
          }
        >
          <Route path='/' element={<Dashboard />} />
        </Route>

        {/* UNKNOWN PATH */}
        <Route path='/*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
