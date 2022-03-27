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
    height:100vh;
    display:flex;
    align-items:center;
    justify-content:center;

    @media screen and (max-width:992px){
        height:120vh;
    }

    @media screen and (max-width:400px){
        height:100vh;
    }
`

const ContactContainer = styled.div`
    width:90%;
    height:85%;
    display:flex;
    align-items:center;
    flex-direction:column;
`

const Heading = styled.h1`
    margin:auto;
    font-size:30px;
    margin-top:50px;
    font-weight:300;
    position:relative;

    @media screen and (max-width:992px){
        margin-bottom:-20px;
    }

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

    @media screen and (max-width:500px){
        margin-top:0;
    }
`

const ContactWrapper = styled.div`
    width:100%;
    height:85%;
    display:flex;
    justify-content:space-between;

    @media screen and (max-width:992px){
        flex-direction:column;
    }
`

const LeftSide = styled.div`
    width:47%;
    height:90%;
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
`

const Box = styled.div`
    width:31%;
    height:60%;
    display:flex;
    border-radius:5px;
    align-items:center;
    flex-direction:column;
    justify-content:center;
    transition:0.2s linear;
    background-color:${({styleDarkMode}) => styleDarkMode == 'true' ? '#1d1a22' : '#ebebeb'};

    &:hover{
        cursor:pointer;
        transform:scale(1.1);
    }

    @media screen and (max-width:450px){
        font-size:12px;
    }

    @media screen and (max-width:400px){
        background-color:transparent;

        &:hover{
            cursor:pointer;
            transform:scale(1);
        }
    }
`

const MiddleBox = styled.div`
    width:34%;
    height:60%;
    display:flex;
    border-radius:5px;
    align-items:center;
    flex-direction:column;
    justify-content:center;
    transition:0.2s linear;
    background-color:${({styleDarkMode}) => styleDarkMode == 'true' ? '#1d1a22' : '#ebebeb'};

    &:hover{
        cursor:pointer;
        transform:scale(1.1);
    }

    @media screen and (max-width:400px){
        background-color:transparent;

        &:hover{
            cursor:pointer;
            transform:scale(1);
        }
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
    height:30%;
    display:flex;
    align-items:center;
    justify-content:space-between;

    @media screen and (max-width:400px){
        width:85%;
    }
`

const FacebookLink = styled.a`
    font-size:30px;
    position:relative;
    transition:0.2s linear;
    color:${({styleDarkMode}) => styleDarkMode == 'true' ? '#fff' : '#000'};

    &::before{
        height:0;
        top:-40%;
        left:-55%;
        opacity:0;
        width:260%;
        margin:auto;
        font-size:12px;
        color:#08ceb1;
        position:absolute;
        transition:0.2s linear;
        content:'Jonathan Adel';
    }

    &:hover{
        cursor:pointer;
        color:#08ceb1;
    }

    &:hover::before{
        opacity:1;
    }

    @media screen and (max-width:400px){
        font-size:20px;

        &::before{
            top:-50%;
            left:-100%;
            width:400%;
            font-size:10px;
        }
    }
`

const InstaLink = styled.a`
    font-size:30px;
    position:relative;
    transition:0.2s linear;
    color:${({styleDarkMode}) => styleDarkMode == 'true' ? '#fff' : '#000'};

    &::before{
        height:0;
        top:-35%;
        left:-100%;
        opacity:0;
        width:260%;
        margin:auto;
        font-size:12px;
        color:#08ceb1;
        position:absolute;
        transition:0.2s linear;
        content:'@jonathanadelll';
    }

    &:hover{
        cursor:pointer;
        color:#08ceb1;
    }

    &:hover::before{
        opacity:1;
    }

    @media screen and (max-width:400px){
        font-size:20px;

        &::before{
            top:-50%;
            left:-150%;
            width:400%;
            font-size:10px;
        }
    }
`

const LinkedLink = styled.a`
    font-size:30px;
    position:relative;
    transition:0.2s linear;
    color:${({styleDarkMode}) => styleDarkMode == 'true' ? '#fff' : '#000'};

    &::before{
        height:0;
        top:-35%;
        left:-70%;
        opacity:0;
        width:260%;
        margin:auto;
        font-size:12px;
        color:#08ceb1;
        position:absolute;
        transition:0.2s linear;
        content:'Jonathan Adel';
    }

    &:hover{
        cursor:pointer;
        color:#08ceb1;
    }

    &:hover::before{
        opacity:1;
    }

    @media screen and (max-width:400px){
        font-size:20px;

        &::before{
            top:-50%;
            left:-100%;
            width:400%;
            font-size:10px;
        }
    }
`

const TwitterLink = styled.a`
    font-size:30px;
    position:relative;
    transition:0.2s linear;
    color:${({styleDarkMode}) => styleDarkMode == 'true' ? '#fff' : '#000'};

    &::before{
        height:0;
        top:-40%;
        left:-70%;
        opacity:0;
        width:260%;
        margin:auto;
        font-size:12px;
        color:#08ceb1;
        position:absolute;
        transition:0.2s linear;
        content:'@JonathanAdel3';
    }

    &:hover{
        cursor:pointer;
        color:#08ceb1;
    }

    &:hover::before{
        opacity:1;
    }

    @media screen and (max-width:400px){
        font-size:20px;

        &::before{
            top:-50%;
            left:-100%;
            width:400%;
            font-size:10px;
        }
    }
`

const GithubLink = styled.a`
    font-size:30px;
    position:relative;
    transition:0.2s linear;
    color:${({styleDarkMode}) => styleDarkMode == 'true' ? '#fff' : '#000'};

    &::before{
        height:0;
        top:-40%;
        left:-100%;
        opacity:0;
        width:350%;
        margin:auto;
        font-size:12px;
        color:#08ceb1;
        position:absolute;
        transition:0.2s linear;
        content:'Jonathan929-del';
    }

    &:hover{
        cursor:pointer;
        color:#08ceb1;
    }

    &:hover::before{
        opacity:1;
    }

    @media screen and (max-width:400px){
        font-size:20px;

        &::before{
            top:-50%;
            left:-150%;
            width:400%;
            font-size:10px;
        }
    }
`

const RightSide = styled.div`
    width:50%;
    height:100%;
    display:flex;
    margin-top:15px;
    align-items:center;
    justify-content:center;

    @media screen and (max-width:992px){
        width:100%;
        height:50%;
    }

`

const Form = styled.form`
    gap:20px;
    width:100%;
    height:55%;
    display:grid;
    grid-template-rows:repeat(8, 1fr);
    grid-template-columns:repeat(4, 1fr);
    grid-template-areas:"name name email email" "name name email email" "message message message message" "message message message message" "message message message message" "message message message message" "button late-message late-message late-message" "button late-message late-message late-message";
    
    @media screen and (max-width:992px){
        height:100%;
        margin-top:50px;
    }

    @media screen and (max-width:600px){
        gap:10px;
        height:80%;
    }

    @media screen and (max-width:450px){
        height:80%;
    }

    @media screen and (max-width:400px){
        grid-template-rows:repeat(8, 1fr);
        grid-template-columns:repeat(4, 1fr);
        grid-template-areas:"name name email email" "name name email email" "message message message message" "message message message message" "message message message message" "message message message message" "button button button button" "late-message late-message late-message late-message";
    }
`

const NameInput = styled.input`
    border:none;
    outline:none;
    font-size:13px;
    grid-area:name;
    padding-left:10px;
    border-radius:5px;
    transition:0.3s linear;
    color:${({styleDarkMode}) => styleDarkMode === 'true' ? '#fff' : '#000'};
    background-color:${({styleDarkMode}) => styleDarkMode === 'true' ? '#1d1a22' : '#ebebeb'};
    border:${({styleDarkMode}) => styleDarkMode === 'true' ? '1px solid #1d1a22' : '1px solid #ebebeb'};

    &:focus{
        border:1px solid #08ceb1;
    }

    @media screen and (max-width:1100px){
        font-size:12px;
    }

    @media screen and (max-width:450px){
        font-size:10px;
    }
`

const EmailInput = styled.input`
    border:none;
    outline:none;
    font-size:13px;
    grid-area:email;
    padding-left:10px;
    border-radius:5px;
    transition:0.3s linear;
    color:${({styleDarkMode}) => styleDarkMode === 'true' ? '#fff' : '#000'};
    background-color:${({styleDarkMode}) => styleDarkMode === 'true' ? '#1d1a22' : '#ebebeb'};
    border:${({styleDarkMode}) => styleDarkMode === 'true' ? '1px solid #1d1a22' : '1px solid #ebebeb'};

    &:focus{
        border:1px solid #08ceb1;
    }

    @media screen and (max-width:1100px){
        font-size:12px;
    }

    @media screen and (max-width:450px){
        font-size:10px;
    }
`

const MessageInput = styled.input`
    border:none;
    outline:none;
    font-size:13px;
    grid-area:message;
    padding-left:20px;
    border-radius:5px;
    transition:0.3s linear;
    color:${({styleDarkMode}) => styleDarkMode === 'true' ? '#fff' : '#000'};
    background-color:${({styleDarkMode}) => styleDarkMode === 'true' ? '#1d1a22' : '#ebebeb'};
    border:${({styleDarkMode}) => styleDarkMode === 'true' ? '1px solid #1d1a22' : '1px solid #ebebeb'};

    &:focus{
        border:1px solid #08ceb1;
    }

    @media screen and (max-width:450px){
        font-size:10px;
    }
`

const Button = styled.div`
    border:none;
    height:30px;
    display:flex;
    color:#fff;
    padding:5px 0;
    cursor:pointer;
    font-size:16px;
    font-weight:500;
    font-weight:400;
    grid-area:button;
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

    @media screen and (max-width:992px){
        width:150px;
    }

    @media screen and (max-width:600px){
        width:100px;
    }

    @media screen and (max-width:450px){
        width:75px;
        height:30px;
        font-size:13px;
    }
`

const Message = styled.p`
    opacity:0;
    display:flex;
    font-size:13px;
    margin-top:10px;
    transition:0.2s linear;
    grid-area:late-message;
    align-items:flex-start;
    justify-content:flex-start;
    animation:${({clicked}) => clicked ? 'send 2s linear backwards 1' : ''};

    @keyframes send{
        0%{
            opacity:0;
        }
        100%{
            opacity:1;
        }
    }

    @media screen and (max-width:450px){
        font-size:11px;
    }
`

const Name = styled.span`
    color:#08ceb1;
    padding-left:5px;
` 





// Main Function
export default function ContactMe({styleDarkMode}) {

    const [input, setInput] = useState('');
    const [clicked, setClicked] = useState(false);
    const ClickHandler = () => {
        setClicked(!clicked);
    }
    console.log(clicked);

  return (
    <ContactSection id="contact-me">
        <ContactContainer>
            <Fade top>
                <Heading>Contact Me</Heading>
            </Fade>
            <ContactWrapper>
                <LeftSide>
                        <Top>
                            <Box styleDarkMode={styleDarkMode}>
                                <Fade left><IconContainer><PhoneIcon /></IconContainer></Fade>
                                <Fade left><Text>01207777636</Text></Fade>
                            </Box>
                            <MiddleBox styleDarkMode={styleDarkMode}>
                                <Fade left><IconContainer><EmailIcon /></IconContainer></Fade>
                                <Fade left><EmailText>jonathanadel98@gmail.com</EmailText></Fade>
                            </MiddleBox>
                            <Box styleDarkMode={styleDarkMode}>
                                <Fade left><IconContainer><LocationIcon /></IconContainer></Fade>
                                <Fade left><Text>Cairo, Egypt</Text></Fade>
                            </Box>
                        </Top>
                        <Bottom>
                            <Fade left>
                                <FacebookLink href="https://www.facebook.com/profile.php?id=100058864790778" target="_blank" styleDarkMode={styleDarkMode}><BsFacebook /></FacebookLink>
                                <InstaLink href="https://www.instagram.com/jonathanadelll/" target="_blank" styleDarkMode={styleDarkMode}><AiFillInstagram /></InstaLink>
                                <LinkedLink href="https://www.linkedin.com/in/jonathan-adel-5b684620b/" target="_blank" styleDarkMode={styleDarkMode}><AiFillLinkedin /></LinkedLink>
                                <TwitterLink href="https://twitter.com/JonathanAdel3" target="_blank" styleDarkMode={styleDarkMode}><AiFillTwitterCircle /></TwitterLink>
                                <GithubLink href="https://github.com/Jonathan929-del" target="_blank"styleDarkMode={styleDarkMode}><AiFillGithub /></GithubLink>
                            </Fade>
                        </Bottom>
                </LeftSide>
                <RightSide>
                    <Form>
                        <NameInput placeholder="Enter Your Name" styleDarkMode={styleDarkMode} onChange={e => setInput(e.target.value)} maxLength="30"/>
                        <EmailInput placeholder="Enter Your Email Address" styleDarkMode={styleDarkMode}/>
                        <MessageInput placeholder="Enter Your Message" styleDarkMode={styleDarkMode}/>
                        <Button styleDarkMode={styleDarkMode} onClick={ClickHandler}>Send</Button>
                        <Message clicked={clicked}>Thanks <Name>{input}</Name>, We Will Respond ASAP❤️</Message>
                    </Form>
                </RightSide>
            </ContactWrapper>
        </ContactContainer>
    </ContactSection>
  )
}
