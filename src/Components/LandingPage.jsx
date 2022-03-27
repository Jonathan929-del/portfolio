// Imports
import React from 'react';
import Fade from 'react-reveal/Fade';
import {BiSend} from 'react-icons/bi';
import styled from 'styled-components';
import ProfilePic from '../Images/Jo.png';
import {Typewriter} from 'react-simple-typewriter';





// Styles
const LandingPageContainer = styled.section`
    width:100%;
    display:flex;
    height:100vh;
    min-height:100vh;
    align-items:center;
    justify-content:center;
`

const LandingPageWrapper = styled.div`
    width:100%;
    height:100%;
    display:flex;

    @media screen and (max-width:768px){
        height:70%;
        flex-direction:column;
    }
`

const WestSide = styled.div`
    flex:1;
    display:flex;
    flex-direction:column;
    justify-content:center;
`

const P = styled.p`
    font-size:25px;
    margin-left:100px;
    color:${({styleDarkMode}) => styleDarkMode === 'true' ? '#fff' : '#000'};

    @media screen and (max-width:1300px){
        font-size:20px;
    }

    @media screen and (max-width:1100px){
        font-size:18px;
    }

    @media screen and (max-width:992px){
        margin-left:50px;
    }

    @media screen and (max-width:500px){
        font-size:15px;
    }

    @media screen and (max-width:400px){
        margin-left:20px;
    }

    @media screen and (max-width:300px){
        margin-left:10px;
    }
`

const H1 = styled.h1`
    font-size:80px;
    font-weight:100;
    margin-left:100px;

    @media screen and (max-width:1300px){
        font-size:70px;
    }

    @media screen and (max-width:1100px){
        font-size:60px;
    }

    @media screen and (max-width:992px){
        font-size:50px;
        margin-left:50px;
    }

    @media screen and (max-width:500px){
        font-size:40px;
    }

    @media screen and (max-width:400px){
        margin-left:20px;
    }

    @media screen and (max-width:300px){
        margin-left:10px;
    }
`

const Profession = styled.h2`
    height:50px;
    display:flex;
    color:#08ceb1;
    font-weight:100;
    margin-top:50px;
    margin-left:100px;
    align-items: center;

    @media screen and (max-width:1300px){
        font-size:20px;
    }

    @media screen and (max-width:1100px){
        font-size:18px;
    }

    @media screen and (max-width:992px){
        margin-left:50px;
    }

    @media screen and (max-width:500px){
        font-size:15px;
        margin-top:30px;
    }

    @media screen and (max-width:400px){
        margin-left:20px;
    }

    @media screen and (max-width:300px){
        margin-left:10px;
    }
`

const Desc = styled.p`
    font-size:17px;
    font-weight:100;
    margin-left:100px;

    @media screen and (max-width:1300px){
        font-size:15px;
    }

    @media screen and (max-width:1100px){
        font-size:14px;
    }

    @media screen and (max-width:992px){
        margin-left:50px;
    }

    @media screen and (max-width:500px){
        font-size:12px;
    }

    @media screen and (max-width:400px){
        margin-left:20px;
    }

    @media screen and (max-width:300px){
        margin-left:10px;
    }
`

const Link = styled.a`
    width:170px;
    display:flex;
    color:#fff;
    padding:5px 0;
    font-size:20px;
    font-weight:500;
    margin-top:50px;
    font-weight:400;
    margin-left:100px;
    border-radius:10px;
    align-items:center;
    text-decoration:none;
    justify-content:center;
    transition:0.2s linear;
    background-color:#08ceb1;

    &:hover{
        color:#08ceb1;
        background-color:${({styleDarkMode}) => styleDarkMode === 'true' ? '#fff' : '#000'};
    }

    @media screen and (max-width:992px){
        margin-left:50px;
    }

    @media screen and (max-width:500px){
        width:150px;
        padding:5px;
        font-size:15px;
    }

    @media screen and (max-width:400px){
        margin-left:20px;
    }

    @media screen and (max-width:300px){
        margin-left:10px;
    }
`

const Send = styled(BiSend)`
    font-size:30px;
    margin:5px 0 0 5px;
    animation:send 1s linear backwards infinite;

    @keyframes send{
        0%{
            opacity:0;
        }
        100%{
            opacity:1;
        }
    }

    @media screen and (max-width:500px){
        margin-top:0;
        font-size:20px;
    }
`

const EastSide = styled.div`
    flex:1;
    display:flex;
    position:relative;
    align-items:center;
    justify-content:center;

    @media screen and (max-width:992px){
        flex:0.7;
    }

    @media screen and (max-width:768px){
        justify-content:right;
    }
`

const Img = styled.img`
    width:400px;
    border-radius:50px;

    @media screen and (max-width:1200px){
        width:375px;
        padding:30px;
    }

    @media screen and (max-width:992px){
        width:300px;
    }

    @media screen and (max-width:820px){
        width:250px;
        padding:20px;
    }

    @media screen and (max-width:768px){
        width:250px;
        margin-right:50px;
        background-color:transparent;
    }

    @media screen and (max-width:500px){
        width:230px;
        margin:20px 50px 0 0;
        background-color:transparent;
    }

    @media screen and (max-width:400px){
        width:230px;
        margin:20px 0 0 0;
        background-color:transparent;
    }
`

const Layer = styled.div`
    top:0;
    left:0;
    width:100%;
    height:100%;
    display:flex;
    position:absolute;
    align-items:center;
    justify-content:center;
    border-radius:50% 0 0 50%;
    background-color:${({styleDarkMode}) => styleDarkMode === 'true' ? '#00000054' : '#08ceb1a8'};

    @media screen and (max-width:1200px){
        display:none;
    }
`





// Main Function
export default function LandingPage({styleDarkMode}) {

    const profs = ['Front-End Developer', 'Back-End Developer', 'UI/UX Designer', 'Freelancer'];

    return (
        <LandingPageContainer id="home">
            <LandingPageWrapper>
                <WestSide>
                    <Fade left delay={0}><P styleDarkMode={styleDarkMode}>Hi There, I Am</P></Fade>
                    <Fade left delay={200}><H1>Jonathan Adel</H1></Fade>
                    <Fade left delay={400}><Profession><Typewriter words={profs} loop="0" typeSpeed="50" /></Profession></Fade>
                    <Fade left delay={600}><Desc>High-Level Experience In Web Development,<br /> Using Clean Effective Code Producing High-Quality Web Pages</Desc></Fade>
                    <Fade left delay={800}><Link href="/#contact-me" styleDarkMode={styleDarkMode}>Contact Me <Send /></Link></Fade>
                </WestSide>
                <EastSide>
                    <Layer styleDarkMode={styleDarkMode}>

                    </Layer>
                    <Fade right distance={window.innerWidth > 768 ? '100px' : '0'}><Img src={ProfilePic}/></Fade>
                </EastSide>
            </LandingPageWrapper>
        </LandingPageContainer>
    )
}
