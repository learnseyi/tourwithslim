import React,{useState} from 'react';
import Hero from './hero/Hero';
import NavLinks from './hero/nav/NavLinks';
import About from './about/About';


const HomePage = ()=>{
    const [isVisible, setIsvisible] = useState(false);
    const handelNavClick = ()=>{
        setIsvisible(!isVisible)
    }
    return(<React.Fragment>
        <header>
            <Hero handleClick={handelNavClick} isVisible={isVisible}/>
            <NavLinks isVisible={isVisible}/>
        </header>
        <main>
            <About/>
        </main>
    </React.Fragment>)
}
export default HomePage;