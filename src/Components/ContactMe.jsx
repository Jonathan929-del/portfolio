// Imports
import {useState} from 'react';
import Fade from 'react-reveal/Fade';
import {MdEmail} from 'react-icons/md';
import styled from 'styled-components';
import {HiLocationMarker} from 'react-icons/hi';
import {BsFillTelephoneFill, BsFacebook} from 'react-icons/bs';
import {AiFillInstagram, AiFillLinkedin, AiFillTwitterCircle, AiFillGithub} from 'react-icons/ai';





// Styles
const ContactSection = styled.section`
    width:100%;
    display:flex;
    min-height:50vh;
    align-items:center;
    justify-content:center;
`

const ContactContainer = styled.div`
    width:90%;
    height:85%;
    display:flex;
    max-width:1000px;
    align-items:center;
    flex-direction:column;
    justify-content:space-between;
`

const Heading = styled.h1`
    margin:auto;
    font-size:30px;
    margin:100px 0 50px 0;
    font-weight:300;
    position:relative;

    &::before{
        left:28%;
        top:35px;
        width:45%;
        margin:auto;
        font-size:12px;
        position:absolute;
        content:'Get In Touch';
        border-bottom:1px solid #08ceb1;
    }
`

const ContactWrapper = styled.div`
    width:100%;
    height:85%;
    display:flex;
    align-items:center;
    justify-content:center;

    @media screen and (max-width:992px){
        flex-direction:column;
    }
`

const Container = styled.div`
    height:90%;
    width:100%;
    display:flex;
    align-items:center;
    flex-direction:column;

    @media screen and (max-width:992px){
        width:100%;
        height:50%;
    }
`

const Top = styled.div`
    height:70%;
    width:100%;
    display:flex;
    align-items:flex-end;
    justify-content:space-between;

    @media screen and (max-width:400px){
        gap:10px;
        display:grid;
        justify-content:unset;
        grid-template-row:repeat(2, 1fr);
        grid-template-column:repeat(2, 1fr);
        grid-template-areas:'first last' 'middle middle';
    }
`

const FirstBox = styled.div`
    width:31%;
    height:200px;
    display:flex;
    grid-area:first;
    border-radius:5px;
    align-items:center;
    flex-direction:column;
    justify-content:center;
    transition:0.2s linear;
    background-color:${({styleDarkMode}) => styleDarkMode === 'true' ? '#1d1a22' : '#ebebeb'};

    &:hover{
        cursor:pointer;
        transform:scale(1.1);
    }

    @media screen and (max-width:450px){
        font-size:12px;
    }

    @media screen and (max-width:400px){
        width:unset;
        height:150px;
    }
`

const LastBox = styled.div`
    width:31%;
    height:200px;
    display:flex;
    grid-area:last;
    border-radius:5px;
    align-items:center;
    flex-direction:column;
    justify-content:center;
    transition:0.2s linear;
    background-color:${({styleDarkMode}) => styleDarkMode === 'true' ? '#1d1a22' : '#ebebeb'};

    &:hover{
        cursor:pointer;
        transform:scale(1.1);
    }

    @media screen and (max-width:450px){
        font-size:12px;
    }

    @media screen and (max-width:400px){
        width:unset;
        height:150px;
    }
`

const MiddleBox = styled.div`
    width:34%;
    height:200px;
    display:flex;
    grid-area:middle;
    border-radius:5px;
    align-items:center;
    flex-direction:column;
    justify-content:center;
    transition:0.2s linear;
    background-color:${({styleDarkMode}) => styleDarkMode === 'true' ? '#1d1a22' : '#ebebeb'};

    &:hover{
        cursor:pointer;
        transform:scale(1.1);
    }

    @media screen and (max-width:400px){
        width:unset;
        height:150px;
    }
`

const IconContainer = styled.div`

`

const PhoneIcon = styled(BsFillTelephoneFill)`
    font-size:30px;
    color:#08ceb1;
`

const LocationIcon = styled(HiLocationMarker)`
    font-size:30px;
    color:#08ceb1;
`

const EmailIcon = styled(MdEmail)`
    font-size:30px;
    color:#08ceb1;
`

const Text = styled.p`
    @media screen and (max-width:400px){
        font-size:8px;
    }
`

const EmailText = styled.p`
    font-size:12px;

    @media screen and (max-width:1100px){
        font-size:10px;
    }

    @media screen and (max-width:450px){
        font-size:9px;
    }
`

const Bottom = styled.div`
    width:70%;
    height:100px;
    display:flex;
    margin:50px 0;
    align-items:center;
    justify-content:space-between;

    @media screen and (max-width:400px){
        width:100%;
        justify-content:space-evenly;
    }
`


const StyledLink = styled.a`
    position:relative;
    color:${({styleDarkMode}) => styleDarkMode === 'true' ? '#fff' : '#000'};
`
const FacebookContainer = styled.div`
    left:-20px;
    bottom:40px;
    width:100px;
    font-size:12px;
    color:#08ceb1;
    position:absolute;

    @media screen and (max-width:400px){
        font-size:11px;
    }
`
const InstagramContainer = styled.div`
    left:-35px;
    bottom:40px;
    width:100px;
    font-size:12px;
    color:#08ceb1;
    position:absolute;

    @media screen and (max-width:400px){
        left:-30px;
        font-size:11px;
    }
`
const LinkedinContainer = styled.div`
    left:-25px;
    bottom:40px;
    width:100px;
    font-size:12px;
    color:#08ceb1;
    position:absolute;

    @media screen and (max-width:400px){
        font-size:11px;
    }
`
const TwitterContainer = styled.div`
    left:-30px;
    bottom:40px;
    width:100px;
    font-size:12px;
    color:#08ceb1;
    position:absolute;

    @media screen and (max-width:400px){
        font-size:11px;
    }
`
const GithubContainer = styled.div`
    left:-35px;
    bottom:40px;
    width:100px;
    font-size:12px;
    color:#08ceb1;
    position:absolute;

    @media screen and (max-width:400px){
        width:70px;
        left:-25px;
        font-size:9px;
    }
`
const FacebookIconContainer = styled.div`
    font-size:25px;
    transition:0.2s linear;
    color:${({isHovered}) => isHovered === 'facebook' ? '#08ceb1' : ''};
`
const InstagramIconContainer = styled.div`
    font-size:25px;
    transition:0.2s linear;
    color:${({isHovered}) => isHovered === 'instagram' ? '#08ceb1' : ''};
`
const LinkedinIconContainer = styled.div`
    font-size:25px;
    transition:0.2s linear;
    color:${({isHovered}) => isHovered === 'linkedin' ? '#08ceb1' : ''};
`
const TwitterIconContainer = styled.div`
    font-size:25px;
    transition:0.2s linear;
    color:${({isHovered}) => isHovered === 'twitter' ? '#08ceb1' : ''};
`
const GithubIconContainer = styled.div`
    font-size:25px;
    transition:0.2s linear;
    color:${({isHovered}) => isHovered === 'github' ? '#08ceb1' : ''};
`





// Main Function
export default function ContactMe({styleDarkMode}) {

    const [isHovered, setIsHovered] = useState();
    const hoverHandler = (link) => {
        setIsHovered(link);
    };
    const leaveHandler = () => {
        setIsHovered('');
    }

    return (
        <ContactSection id="contact-me">
            <ContactContainer>
                <Fade top>
                    <Heading>Contact Me</Heading>
                </Fade>
                <ContactWrapper>
                    <Container>
                            <Top>
                                <FirstBox styleDarkMode={styleDarkMode}>
                                    <Fade left><IconContainer><PhoneIcon /></IconContainer></Fade>
                                    <Fade left><Text>01207777636</Text></Fade>
                                </FirstBox>
                                <MiddleBox styleDarkMode={styleDarkMode}>
                                    <Fade left><IconContainer><EmailIcon /></IconContainer></Fade>
                                    <Fade left><EmailText>jonathanadel98@gmail.com</EmailText></Fade>
                                </MiddleBox>
                                <LastBox styleDarkMode={styleDarkMode}>
                                    <Fade left><IconContainer><LocationIcon /></IconContainer></Fade>
                                    <Fade left><Text>Cairo, Egypt</Text></Fade>
                                </LastBox>
                            </Top>
                            <Bottom>
                                <Fade left>
                                    <StyledLink href="https://www.facebook.com/profile.php?id=100058864790778" target="_blank" styleDarkMode={styleDarkMode} onMouseEnter={() => hoverHandler('facebook')} onMouseLeave={leaveHandler}>
                                        <FacebookIconContainer isHovered={isHovered}>
                                            <BsFacebook />
                                        </FacebookIconContainer>
                                        {isHovered === 'facebook' &&
                                            <FacebookContainer>
                                                <Fade top duration={500}>Jonathan Adel</Fade>
                                            </FacebookContainer>
                                        }
                                    </StyledLink>
                                    <StyledLink href="https://www.instagram.com/jonathanadelll/" target="_blank" styleDarkMode={styleDarkMode} onMouseEnter={() => hoverHandler('instagram')} onMouseLeave={leaveHandler}>
                                        <InstagramIconContainer isHovered={isHovered}>
                                            <AiFillInstagram />
                                        </InstagramIconContainer>
                                        {isHovered === 'instagram' &&
                                            <InstagramContainer>
                                                <Fade top duration={500}>@jonathanadelll</Fade>
                                            </InstagramContainer>
                                        }
                                    </StyledLink>
                                    <StyledLink href="https://www.linkedin.com/in/jonathan-adel-5b684620b/" target="_blank" styleDarkMode={styleDarkMode} onMouseEnter={() => hoverHandler('linkedin')} onMouseLeave={leaveHandler}>
                                        <LinkedinIconContainer isHovered={isHovered}>
                                            <AiFillLinkedin />
                                        </LinkedinIconContainer>
                                        {isHovered === 'linkedin' &&
                                            <LinkedinContainer>
                                                <Fade top duration={500}>Jonathan Adel</Fade>
                                            </LinkedinContainer>
                                        }
                                    </StyledLink>
                                    <StyledLink href="https://twitter.com/JonathanAdel3" target="_blank" styleDarkMode={styleDarkMode} onMouseEnter={() => hoverHandler('twitter')} onMouseLeave={leaveHandler}>
                                        <TwitterIconContainer isHovered={isHovered}>
                                            <AiFillTwitterCircle />
                                        </TwitterIconContainer>
                                        {isHovered === 'twitter' &&
                                            <TwitterContainer>
                                                <Fade top duration={500}>@JonathanAdel3</Fade>
                                            </TwitterContainer>
                                        }
                                    </StyledLink>
                                    <StyledLink href="https://github.com/Jonathan929-del" target="_blank" styleDarkMode={styleDarkMode} onMouseEnter={() => hoverHandler('github')} onMouseLeave={leaveHandler}>
                                        <GithubIconContainer isHovered={isHovered}>
                                            <AiFillGithub />
                                        </GithubIconContainer>
                                        {isHovered === 'github' &&
                                            <GithubContainer>
                                                <Fade top duration={500}>Jonathan929-del</Fade>
                                            </GithubContainer>
                                        }
                                    </StyledLink>
                                </Fade>
                            </Bottom>
                    </Container>
                </ContactWrapper>
            </ContactContainer>
        </ContactSection>
    )
}
