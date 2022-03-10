import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faCodepen} from '@fortawesome/free-brands-svg-icons'
import appStyle from './App.module.css';

const Snsdiv = () => {
    return(
        <div className={appStyle.snsdiv + ' text-center'}>
            <a href='/' className='d-block'><FontAwesomeIcon icon={faGithub} /></a>
            <a href='/' className='d-block'><FontAwesomeIcon icon={faCodepen} /></a>
        </div>
    )
};

export default Snsdiv;