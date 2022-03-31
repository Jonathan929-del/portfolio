// Imports
import React from 'react';
import Fade from 'react-reveal';
import styled from 'styled-components';
import {IoIosMenu} from 'react-icons/io';
import {BsFillSunFill, BsFillMoonFill} from 'react-icons/bs';





// Styles
const NavContainer = styled.nav`
    top:0;
    left:0;
    z-index:9;
    width:100%;
    height:70px;
    position:fixed;
    /* border-bottom:1px solid #747474; */
    background-color:${({styleDarkMode}) => styleDarkMode === 'true' ? '#222429' : '#f8faff'};

    @media screen and (max-width:610px){
        height:50px;   
    }
`

const NavWrapper = styled.div`
    width:80%;
    height:100%;
    margin:auto;
    display:flex;
    justify-content:space-between;

    @media screen and (max-width:1100px){
        width:90%;
    }
`

const NavLogo = styled.h2`
    display:flex;
    align-items:center;
    justify-content:center;

    @media screen and (max-width:610px){
        font-size:18px;
    }
`

const NavUl = styled.ul`
    display:flex;
    align-items:center;

    @media screen and (max-width:992px){
        display:none;
    }
`

const NavLi = styled.li`
    font-size:18px;
    list-style:none;
    margin-right:20px;
`

const NavLink = styled.a`
    text-decoration:none;
    transition:all 0.2s linear;
    color:${({styleDarkMode}) => styleDarkMode === 'true' ? '#fff' : '#000'};

    &:hover{
        color:#08ceb1;
    }
`

const MainLink = styled.a`
    color:#08ceb1;
    text-decoration:none;
    transition:0.2 linear;
`

const ModeContainer = styled.div`
    display:flex;
    cursor:pointer;
    font-size:25px;
    margin-left:20px;
    align-items:center;
    justify-content:center;
    transition:0.2s linear;

    &:hover{
        color:#08ceb1;
    }
`

const IconContainer = styled.div`
    display:none;

    @media screen and (max-width:992px){
        display:flex;
        align-items:center;
        justify-content:center;
    }
`

const Icon = styled(IoIosMenu)`
    font-size:40px;
    cursor:pointer;
    transition:0.2s linear;
    color:${({styleDarkMode}) => styleDarkMode === 'true' ? '#fff' : '#000'};
    
    &:hover{
        color:#08ceb1;
    }

    @media screen and (max-width:610px){
        font-size:30px;
    }
`





// Main Function
export default function Nav({styleDarkMode, ThemeHandler, OpenHandler}) {
    return (
        <NavContainer styleDarkMode={styleDarkMode}>
            <NavWrapper>
                <NavLogo><Fade top><MainLink styleDarkMode={styleDarkMode} href="#home">Jonathan</MainLink></Fade></NavLogo>
                <NavUl>
                    <NavLi><Fade top><NavLink href="#home" styleDarkMode={styleDarkMode}>Home</NavLink></Fade></NavLi>
                    <NavLi><Fade top><NavLink href="#about" styleDarkMode={styleDarkMode}>About</NavLink></Fade></NavLi>
                    <NavLi><Fade top><NavLink href="#skills" styleDarkMode={styleDarkMode}>Skills</NavLink></Fade></NavLi>
                    <NavLi><Fade top><NavLink href="#services" styleDarkMode={styleDarkMode}>Services</NavLink></Fade></NavLi>
                    <NavLi><Fade top><NavLink href="#portfolio" styleDarkMode={styleDarkMode}>Portfolio</NavLink></Fade></NavLi>
                    <NavLi><Fade top><NavLink href="#contact-me" styleDarkMode={styleDarkMode}>Contact</NavLink></Fade></NavLi>
                    <Fade top><ModeContainer>{styleDarkMode === 'true' ? <BsFillSunFill onClick={ThemeHandler}/> : <BsFillMoonFill onClick={ThemeHandler}/>}</ModeContainer></Fade>
                </NavUl>
                <IconContainer><Fade top><Icon styleDarkMode={styleDarkMode} onClick={OpenHandler}/></Fade></IconContainer>
            </NavWrapper>
        </NavContainer>
    )
}
