// Imports
import Fade from 'react-reveal/Fade';
import styled from "styled-components";
import {FaBrain} from 'react-icons/fa';
import {BiCodeAlt} from 'react-icons/bi';
import {RiPencilFill} from 'react-icons/ri';





// Styles
const ServicesSection = styled.section`
    width:100%;
    display:flex;
    min-height:75vh;
    align-items:center;
    justify-content:center;
`

const ServicesContainer = styled.div`
    width:80%;
    display:flex;
    height:80%;
    align-items:center;
    flex-direction:column;

    @media screen and (max-width:992px){
        height:80%;
    }
`

const MainHeading = styled.h1`
    font-size:30px;
    font-weight:300;
    position:relative;

    &::before{
        left:13%;
        top:40px;
        margin:auto;
        font-size:13px;
        position:absolute;
        content:'What I Provide';
        border-bottom:1px solid #08ceb1;
    }

    @media screen and (max-width:992px){
        margin-top:100px;
    }
`

const ServicesWrapper = styled.div`
    gap:30px;
    width:100%;
    height:100%;
    color:#fff;
    display:grid;
    margin-top:70px;
    grid-template-columns:repeat(3, 1fr);

    @media screen and (max-width:992px){
        gap:20px;
        grid-template-rows:repeat(2, 1fr);
        grid-template-columns:repeat(2, 1fr);
    }

    @media screen and (max-width:500px){
        margin-top:50px;
        grid-template-rows:repeat(3, 1fr);
        grid-template-columns:repeat(1, 1fr);
    }
`

const Box = styled.div`
    display:flex;
    border-radius:10px;
    align-items:center;
    flex-direction:column;
    justify-content:center;
    transition:0.2s linear;
    background-color:#08ceb1;

    &:hover{
        cursor:pointer;
        transform:scale(1.05);
        background-color:#03e7c5;
    }
`

const IconOne = styled(BiCodeAlt)`
    font-size:40px;
    margin-top:20px;

    @media screen and (max-width:1100px){
        font-size:35px;
    }
`

const IconTwo = styled(RiPencilFill)`
    font-size:40px;
    margin-top:20px;

    @media screen and (max-width:1100px){
        font-size:35px;
    }
`

const IconThree = styled(FaBrain)`
    font-size:40px;
    margin-top:20px;

    @media screen and (max-width:1100px){
        font-size:35px;
    }
`

const Title = styled.h2`
    margin-top:5px;
    font-weight:300;

    @media screen and (max-width:1100px){
        font-size:20px;
    }
`

const DescOne = styled.p`
    width:80%;
    margin-top:50px;
    font-weight:200;
    margin-bottom:20px;

    @media screen and (max-width:1100px){
        font-size:14px;
    }

    @media screen and (max-width:992px){
        margin-top:20px;
    }

    @media screen and (max-width:500px){
        width:90%;
        margin-top:15px;
    }

    @media screen and (max-width:400px){
        font-size:12px;
    }
`

const DescTwo = styled.p`
    width:80%;
    margin-top:50px;
    font-weight:200;
    margin-bottom:40px;

    @media screen and (max-width:1100px){
        font-size:14px;
    }

    @media screen and (max-width:992px){
        margin-top:20px;
        margin-bottom:20px;
    }

    @media screen and (max-width:935px){
        margin-top:20px;
        margin-bottom:40px;
    }

    @media screen and (max-width:500px){
        width:90%;
        margin-top:15px;
    }

    @media screen and (max-width:400px){
        font-size:12px;
    }
`
const DescThree = styled.p`
    width:80%;
    margin-top:50px;
    font-weight:200;
    margin-bottom:40px;

    @media screen and (max-width:1154px){
        margin-bottom:21px;
    }

    @media screen and (max-width:1101px){
        margin-bottom:40px;
    }

    @media screen and (max-width:1100px){
        font-size:14px;
    }

    @media screen and (max-width:1021px){
        margin-bottom:21px;
    }

    @media screen and (max-width:992px){
        margin-top:20px;
    }

    @media screen and (max-width:500px){
        width:90%;
        margin-top:15px;
    }

    @media screen and (max-width:400px){
        font-size:12px;
    }
`





// Main Function
export default function Services() {
  return(
      <ServicesSection id="services">
          <ServicesContainer>
                <Fade top><MainHeading>Services</MainHeading></Fade>
                <ServicesWrapper>
                    <Fade left>
                        <Box>
                            <IconOne />
                            <Title>Web Development</Title>
                            <DescOne>I am a professional full-stack web developer, I work with ReactJs, NodeJs, ExpressJs, MongoDB and more skills. In addition of programming languages like Python</DescOne>
                        </Box>
                    </Fade>
                    <Fade bottom>
                        <Box>
                            <IconTwo />
                            <Title>Web Design</Title>
                            <DescTwo>I am a web deisgner, I have great experience in Css, Sass and Bootstrap. I can make a full responsive web page with high-quality styling code</DescTwo>
                        </Box>
                    </Fade>
                    <Fade right distance="90px">
                        <Box>
                            <IconThree />
                            <Title>UI/UX Design</Title>
                            <DescThree>I know the basic coloring rules, font sizes and positioning systems. I can create a creative web design that suits your project's subject</DescThree>
                        </Box>
                    </Fade>
                </ServicesWrapper>
          </ServicesContainer>
      </ServicesSection>
  )
}