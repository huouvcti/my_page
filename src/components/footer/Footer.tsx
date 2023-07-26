import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faYoutube } from '@fortawesome/free-brands-svg-icons'

import '../../style/components/footer.scss';

const Footer = () => {

    return (
        <footer>
            <div className='footerContent'>
                <div className='section_left'>
                    <h1>MauveCoders</h1>

                    <ul>
                        <li><FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>010-2534-6610</li>
                        <li><FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>huouvcti@gmail.com</li>
                    </ul>

                    <p>2023 © HUOUVCTI</p>
                </div>


                <div className='section_right'>
                    <button><FontAwesomeIcon icon={faGithub}></FontAwesomeIcon></button>
                    <button><FontAwesomeIcon icon={faYoutube}></FontAwesomeIcon></button>
                </div>
            </div>
        </footer>
    )
}


export default Footer;
