import React, { useState, useEffect } from 'react';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

import '../../style/components/header.scss';


const Section0 = (props: any) => {

    /*
        [props]

        bgColor: String
    */
    

    return (
        <div className='section0' style={{backgroundColor: props.bgColor}}>
            
        </div>
    )
}


export default Section0;
