// Imports
import React from 'react';
import styled from 'styled-components';
import {AiOutlineClose} from 'react-icons/ai';
import {BsFillSunFill, BsFillMoonFill} from 'react-icons/bs';





// Styles
const PopUpNavContainer = styled.aside`
    display:none;

    @media screen and (max-width:992px){
        top:0;
        z-index:9;
        width:500px;
        height:100%;
        display:flex;
        position:fixed;
        align-items:center;
        justify-content:center;
        transition:0.4s linear;
        right:${({isOpened}) => isOpened ? '0' : '-100vh'};
        background-color:${({styleDarkMode}) => styleDarkMode === 'true' ? '#16171a' : '#cfcfcf'};
    }

    @media screen and (max-width:768px){
        width:300px;
    }

    @media screen and (max-width:500px){
        width:100%;
    }
`

const PopUpWrapper = styled.div`
    width:90%;
    height:50%;
    display:flex;
    align-items:center;
    flex-direction:column;
    justify-content:center;
`

const Ul = styled.ul`
    width:50%;
    height:80%;
    display:flex;
    align-items:center;
    flex-direction:column;
    justify-content:space-between;
`

const Li = styled.li`
    list-style:none;
`

const Link = styled.a`
    font-size:18px;
    text-decoration:none;
    transition:0.2s linear;
    color:${({styleDarkMode}) => styleDarkMode === 'true' ? '#fff' : '#000'};

    &:hover{
        color:#08ceb1;
    }
`

const CloseSpan = styled(AiOutlineClose)`
    top:20px;
    right:20px;
    font-size:20px;
    cursor:pointer;
    position:absolute;
    transition:0.2s linear;

    &:hover{
        color:#08ceb1;
    }

    @media screen and (max-width:500px){
        font-size:25px;
    }
`

const ModeHandler = styled.div`
    display:flex;
    cursor:pointer;
    margin-top:50px;
    align-items:center;
    justify-content:center;
    transition:0.2s linear;

    &:hover{
        color:#08ceb1;
    }
`

const Sun = styled(BsFillSunFill)`
    font-size:30px;
`

const Moon = styled(BsFillMoonFill)`
    font-size:30px;
`





// Main Function
export default function PopUpNav({styleDarkMode, isOpened, OpenHandler, ThemeHandler}) {
    return (
        <PopUpNavContainer styleDarkMode={styleDarkMode} isOpened={isOpened}>
            <CloseSpan onClick={OpenHandler}/>
            <PopUpWrapper>
                <Ul>
                    <Li><Link href="#home" styleDarkMode={styleDarkMode} onClick={OpenHandler}>Home</Link></Li>
                    <Li><Link href="#about" styleDarkMode={styleDarkMode} onClick={OpenHandler}>About</Link></Li>
                    <Li><Link href="#skills" styleDarkMode={styleDarkMode} onClick={OpenHandler}>Skills</Link></Li>
                    <Li><Link href="#services" styleDarkMode={styleDarkMode} onClick={OpenHandler}>Services</Link></Li>
                    <Li><Link href="#portfolio" styleDarkMode={styleDarkMode} onClick={OpenHandler}>Portfolio</Link></Li>
                    <Li><Link href="#contact-me" styleDarkMode={styleDarkMode} onClick={OpenHandler}>Contact Me</Link></Li>
                </Ul>
                <ModeHandler onClick={OpenHandler}>{styleDarkMode === 'true' ? <Sun onClick={ThemeHandler}/> : <Moon onClick={ThemeHandler}/>}</ModeHandler>
            </PopUpWrapper>
        </PopUpNavContainer>
    )
}
