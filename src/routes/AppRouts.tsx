import * as React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';

const AppRouts: React.FC = () => {
    return (
       <BrowserRouter>
            <Routes>
                <Route path='' element={<Home />}></Route>
            </Routes>
       </BrowserRouter>
    );
};

export default AppRouts;