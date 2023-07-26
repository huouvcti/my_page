import React from 'react';

import { Routes, Route } from "react-router-dom";


import Header_blog from '../../components/header/Header_blog';
import SideBar_blog from '../../components/sideBar/SideBar_blog';

import Blog_main from '../blog/blog_main';



const Blog = () => {
  return (
    <div>
        

        <div className='sideBarBlog_layout'>
            <SideBar_blog></SideBar_blog>

            <div className='mainContent'>
            <Header_blog></Header_blog>
                <Routes>
                    <Route path='/' element={<Blog_main />} />

                    {/* <Route path='/' element={<Blog_ />} /> */}
                </Routes>
            </div>
            
        </div>

    </div>
    
  );
};

export default Blog;