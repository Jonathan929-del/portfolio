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
    margin-top:70px;
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





// Main Function
export default function About() {
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
                            <P>Hi There I Am <Highlight>Jonathan Adel</Highlight>,
                                I Am A Professional Web Developer From Cairo, Egypt, With 3+ Years Of Experience In Web Development, Designing.
                                Specifically Front-End, Back-End Development, And UI/UX Design.
                                My Only Passion In The Last 3 Years Was To Learn How To Make Featured Web Pages With Clean And Effective Code In A Relatively Short Time, Which I Succeeded At.
                                I Can Finish Your Project In A Short Time With A Relatively Low Budget.
                                I Have Made A Ton Of Projects With High-Quality Code That You Can Check Down Below
                                I Hope We Get To Work Together, Thanks For Checking Out!❤️
                            </P>
                        </Fade>
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
