// Imports
import React from 'react';
import Fade from 'react-reveal';
import styled from 'styled-components';
import TheImg from '../Images/About.png';





// Styles
const AboutSection = styled.section`
    width:100%;
    display:flex;
    height:100vh;
    min-height:100vh;
    align-items:center;
    justify-content:center;
`

const AboutContainer = styled.div`
    width:80%;
    height:80%;
    display:flex;
    margin-top:50px;
    align-items:center;
    flex-direction:column;
    justify-content:center;

    @media screen and (max-width:1270px){
        width:90%;
    }
`

const AboutHeading = styled.h1`
    font-size:30px;
    font-weight:300;
    position:relative;

    &::before{
        top:40px;
        left:25%;
        font-size:13px;
        font-weight:100;
        position:absolute;
        content:"Who I Am";
        border-bottom:1px solid #08ceb1;

        @media screen and (max-width:550px){
            top:40px;
            font-size:12px;
        }
    }

    @media screen and (max-width:550px){
        font-size:30px;
    }
`

const AboutContent = styled.div`
    width:100%;
    height:70%;
    display:flex;
    margin-top:50px;
`

const WestSide = styled.div`
    flex:1;
    display:flex;
    align-items:center;
    justify-content:center;

    @media screen and (max-width:1200px){
        justify-content:flex-start;
    }

    @media screen and (max-width:600px){
        display:none;
    }
`

const Img = styled.img`
    width:400px;
    object-fit:cover;
    border-radius:10px;

    @media screen and (max-width:1068px){
        width:350px;
    }

    @media screen and (max-width:850px){
        width:300px;
    }

    @media screen and (max-width:768px){
        width:250px;
    }

    @media screen and (max-width:600px){
        width:200px;
    }
`

const EastSide = styled.div`
    flex:1;
    display:flex;
    flex-direction:column;
    justify-content:center;
`

const H2 = styled.h2`
    font-size:30px;
    font-weight:300;

    @media screen and (max-width:1068px){
        font-size:25px;
    }

    @media screen and (max-width:850px){
        margin-top:60px;
    }

    @media screen and (max-width:600px){
        margin-top:50px;
        font-size:20px;
    }
`

const P = styled.p`
    font-size:13px;
    font-weight:300;
    margin-top:30px;
    line-height:35px;

    @media screen and (max-width:1230px){
        line-height:30px;   
    }

    @media screen and (max-width:1068px){
        font-size:11px;
    }

    @media screen and (max-width:850px){
        line-height:20px;
    }

    @media screen and (max-width:768px){
        margin-top:20px;
    }
`

const Highlight = styled.span`
    color:#08ceb1;
`

const ExperienceArea = styled.div`
    width:50%;
    display:flex;
    margin-top:30px;
    align-items:center;
    justify-content:space-between;

    @media screen and (max-width:960px){
        margin-top:50px;
    }

    @media screen and (max-width:850px){
        margin-top:30px;
    }

    @media screen and (max-width:768px){
        width:80%;
    }

    @media screen and (max-width:550px){
        width:80%;
    }
`

const Exp = styled.div`
    display:flex;
    align-items:center;
    flex-direction:column;
    justify-content:center;
`

const Number = styled.p`
    font-size:30px;
    font-weight:300;

    @media screen and (max-width:850px){
        font-size:20px;
    }
`

const Spec = styled.span`
    font-size:12px;
    color:#08ceb1;
    font-weight:300;

    @media screen and (max-width:850px){
        font-size:10px;
    }
`
const Link = styled.a`
    width:200px;
    display:flex;
    color:#fff;
    padding:5px 0;
    font-size:17px;
    font-weight:500;
    margin-top:30px;
    font-weight:400;
    border-radius:5px;
    align-items:center;
    text-decoration:none;
    justify-content:center;
    transition:0.2s linear;
    background-color:#08ceb1;

    &:hover{
        color:#08ceb1;
        background-color:${({styleDarkMode}) => styleDarkMode === 'true' ? '#fff' : '#000'};
    }

    @media screen and (max-width:500px){
        padding:5px;
        font-size:15px;
    }
    
    @media screen and (max-width:350px){
        width:150px;
        font-size:12px;
    }
`





// Main Function
export default function About({styleDarkMode}) {
    return (
        <AboutSection id="about">
            <AboutContainer>
                <Fade top><AboutHeading>About Me</AboutHeading></Fade>
                <AboutContent>
                    <WestSide>
                        <Fade left><Img src={TheImg}/></Fade>
                    </WestSide>
                    <EastSide>
                        <Fade right distance={window.innerWidth > 1285 ? '100px' : '10px'}><H2>Get To Know Me</H2></Fade>
                        <Fade right distance={window.innerWidth > 1285 ? '100px' : '10px'}>
                            <P>Hi there I am <Highlight>Jonathan Adel</Highlight>,
                                I am specialized in web development industry using MERN stack which is a full-stack technology used for building web apps that require a user interface,
                                a server-side, and a database, using <Highlight>ReactJs</Highlight> or <Highlight style={{marginRight:'2px'}}>NextJs</Highlight>
                                as a front-end technology for creating creative designs, <Highlight>NodeJs</Highlight> and <Highlight style={{marginRight:'2px'}}>ExpressJs</Highlight>
                                as a back-end technology, and <Highlight>MongoDB</Highlight> as a database.<br />
                                I enjoyed making several projects with these technologies which gave me great experience in making effective and real-world apps.
                            </P>
                        </Fade>
                        <Fade right distance={window.innerWidth > 1285 ? '100px' : '10px'}><Link target='_blank' href="https://drive.google.com/file/d/15-eXJySQJCe0PbG-50ZVgs58qN63D8CG/view" styleDarkMode={styleDarkMode}>Download resume</Link></Fade>
                        <ExperienceArea>
                            <Fade bottom>
                                <Exp>
                                    <Number>03+</Number>
                                    <Spec>Years Experience</Spec>
                                </Exp>
                            </Fade>
                            <Fade right distance={window.innerWidth > 768 ? '100px' : '0'}>
                                <Exp>
                                    <Number>08+</Number>
                                    <Spec>Projects Done</Spec>
                                </Exp>
                            </Fade>
                        </ExperienceArea>
                    </EastSide>
                </AboutContent>
            </AboutContainer>
        </AboutSection>
    )
}
