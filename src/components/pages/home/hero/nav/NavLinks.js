import React,{useState,useCallback,useEffect} from 'react';
import { BrowserRouter as Router,Link } from 'react-router-dom';
import { lightSpeedIn,pulse } from 'react-animations';
import Radium, {StyleRoot} from 'radium';
import './navLinks.css';

const linkAnimation = {
    lightSpeedIn:{
        animation: 'x 1s',
    animationName: Radium.keyframes(lightSpeedIn, 'lightSpeedIn')
    }
}
const btnAnimation = {
    pulse:{
        animation: 'x 1s',
    animationName: Radium.keyframes(pulse, 'pulse')
    }
}
const NavLinks = ({isVisible})=>{
const [navClass,setNavClass] = useState('nav-container')
const getNavClass = useCallback(()=>{
    isVisible ? setNavClass('nav-container'): setNavClass( 'nav-container-close');
},[isVisible])


useEffect(()=>{
    getNavClass();
},[getNavClass])
    return(
        <Router>
        <StyleRoot>
        <div style={btnAnimation.pulse}className={navClass}>
            <ul className='nav-list'>
                <li style={linkAnimation.lightSpeedIn}>
                    <Link className='nav-item' to='/about-us'>About Slim Tours</Link>
                </li>
                <li style={linkAnimation.lightSpeedIn}>
                <Link  className='nav-item' to='/benefits'>your benefits</Link>
                </li>
                <li style={linkAnimation.lightSpeedIn}>
                <Link className='nav-item' to='/popular-tours'>popular tours</Link>
                </li>
                <li style={linkAnimation.lightSpeedIn}>
                <Link className='nav-item' to='/stories'>stories</Link>
                </li>
                <li style={linkAnimation.lightSpeedIn}>
                <Link className='nav-item' to='/booking'>book now</Link>
                </li>
            </ul>
        </div>
        </StyleRoot>
        </Router>
    )
}

export default NavLinks;