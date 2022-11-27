import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from './App';
import Recipe from './Recipe';

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<App/>} />
                <Route path='/recipe' element={<Recipe/>} />
            </Routes>
        </Router>
    );
};

export default AppRoutes;