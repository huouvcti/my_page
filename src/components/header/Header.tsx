import React, { useState, useEffect } from 'react';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

import '../../style/components/header.scss';


const Header = () => {

    const [scroll, setScroll] = useState(0);

    useEffect(()=> {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll); //clean up
        };
    }, []);

    useEffect(()=> {
        const navBar_wrap = document.getElementById("navBar_wrap");

        console.log(scroll)

        if(scroll < 400){
            navBar_wrap.className = "navBar_wrap1"
        } else {
            navBar_wrap.className = "navBar_wrap2"
        }
    }, [scroll]);


    const handleScroll = () => {
        setScroll(window.scrollY);
    };

    return (
        <header className='header_main'>
            <div id="navBar_wrap" className='navBar_wrap1'>
                <div className='navBar'>

                    <div className='mainTitle_wrap'>
                        <h1><a href="">MauveCoders</a></h1>
                    </div>

                    <div className='subFunction_wrap'>
                        <ul className='menuList'>
                            {/* <li><a href="">Home</a></li> */}
                            <li><a href="">Resume</a></li>
                            <li><a href="/blog">Blog</a></li>
                            <li><a href="">QnA</a></li>
                        </ul>

                        <a href="" className='searchBtn'>
                            <FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon>
                        </a>
                    </div>
                    
                </div>
            </div>
        </header>
    )
}


export default Header;
