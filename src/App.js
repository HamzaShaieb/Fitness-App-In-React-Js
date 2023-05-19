import React from 'react';
import { Route,Routes } from 'react-router-dom';
import { Box } from '@mui/system';

import './App.css'
import Home from './pages/Home';
import ExerciceDetail from './pages/ExerciceDetail';
import Navbar from './componentes/Navbar';
import Footer from './componentes/Footer';

const App = () => {
    return (
        
            <Navbar/>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/exercices/:id' element={<ExerciceDetail/>} />
            </Routes>
            <Footer/>
       </Box>
    );
}

export default App;
