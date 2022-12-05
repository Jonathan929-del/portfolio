// Imports
import React from 'react';
import {useState} from 'react';
import Nav from '../Components/Nav';
import About from '../Components/About';
import Footer from '../Components/Footer';
import Skills from '../Components/Skills';
import PopUpNav from '../Components/PopUpNav';
import Services from '../Components/Services';
import Portfolio from '../Components/Portfolio';
import ContactMe from '../Components/ContactMe';
import LandingPage from '../Components/LandingPage';





// Main Function
export default function MainPage({styleDarkMode, ThemeHandler}) {

    const [isOpened, setIsOpened] = useState(false);
    const OpenHandler = () => {
        setIsOpened(!isOpened);
    }

    return (
        <div>
            <Nav styleDarkMode={styleDarkMode} ThemeHandler={ThemeHandler} OpenHandler={OpenHandler}/>
            <PopUpNav styleDarkMode={styleDarkMode} isOpened={isOpened} OpenHandler={OpenHandler} ThemeHandler={ThemeHandler}/>
            <LandingPage styleDarkMode={styleDarkMode}/>
            <About styleDarkMode={styleDarkMode}/>
            <Skills styleDarkMode={styleDarkMode}/>
            <Services styleDarkMode={styleDarkMode}/>
            {/* <Portfolio styleDarkMode={styleDarkMode}/> */}
            <ContactMe styleDarkMode={styleDarkMode}/>
            <Footer styleDarkMode={styleDarkMode}/>
        </div>
    )
}
