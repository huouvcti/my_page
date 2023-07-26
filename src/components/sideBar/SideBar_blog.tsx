import React, { useState, useEffect } from 'react';


import '../../style/components/sideBar.scss';


const SideBar_blog = () => {

    return (
        <div className='sideBar_blog'>
            <div className="profile">
                <img className='profile_img' alt="" />
                <p>MauveCoders's Blog</p>
            </div>

            <hr />

            <div className='searchWrap'>
                <input id="searchInput" type="text" placeholder='Find a post ...'/>
            </div>


            

            <div className='postListWrap'>
                <ul>
                    <li>1</li>
                    <li>1</li>
                    <li>1</li>
                    <li>1</li>
                    <li>1</li>
                    <li>1</li>
                    <li>1</li>
                </ul>
            </div>
            
        </div>
    )
}


export default SideBar_blog;
