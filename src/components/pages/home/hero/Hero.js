import React from 'react';
import { Button } from 'antd';
import {MenuOutlined,CloseOutlined} from '@ant-design/icons';
import "./hero.css";


const Hero = ({handleClick,isVisible}) => {
    let navIcon;
    isVisible ?  navIcon = <CloseOutlined style={{fontSize: 2 + 'em', color: '#000'}}/>
    : navIcon = <MenuOutlined style={{fontSize: 2 + 'em', color: '#000'}}/>
    return (<React.Fragment>
        
        <Button type="default nav-btn" onClick={handleClick}>{navIcon}</Button>
        <div className='hero-header'>
            <h1 className='hero-title'>tour with slim</h1>
            <h2 className='hero-subtitle'>&nbsp;outdoors<span className='span-title'>is where life happens</span></h2>
            <Button type="default" shape="round"  size= 'large'>
          DISCOVER OUR TOURS
        </Button>

        </div>
        
        </React.Fragment>
    )
}

export default Hero;

