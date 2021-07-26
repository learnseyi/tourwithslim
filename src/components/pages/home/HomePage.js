import React,{useState} from 'react';
import Hero from './hero/Hero';
import NavLinks from './hero/nav/NavLinks';
import About from './about/About';
import Feature from './features/Feature';
import PopularTours from './popularTours/PopularTours';
import Reviews from './reviews/Reviews';


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
            <Feature/>
            <PopularTours/>
            <Reviews/>
        </main>
    </React.Fragment>)
}
export default HomePage;