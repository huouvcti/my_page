import React from 'react';

import { Routes, Route } from "react-router-dom";


import Footer from './components/footer/Footer';


import Main from './pages/Main';
import Blog from './pages/main_menu/Blog';

import Error404 from './pages/Error404';

import './style/index.scss'

function App() {
  return (
    <div>
        

        <Routes>
            <Route path='/' element={<Main />} />
            
            <Route path='/blog' element={<Blog />} />


            <Route path="/*" element={<Error404 />} />
        </Routes>

        <Footer></Footer>
    </div>
    
  );
}

export default App;
