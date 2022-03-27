// Imports
import Fade from 'react-reveal/Fade';
import React, {useState} from 'react';
import styled from 'styled-components';
import ImgOne from '../Images/Portfolio Gallery/01.png';
import ImgTwo from '../Images/Portfolio Gallery/02.png';
import ImgThree from '../Images/Portfolio Gallery/03.png';
import ImgFour from '../Images/Portfolio Gallery/04.png';





// Styles
const PortfolioSection = styled.section`
    width:100%;
    display:flex;
    height:100vh;
    align-items:center;
    justify-content:center;

    @media screen and (max-width:992px){
        min-height:120vh;
    }

    @media screen and (max-width:650px){
        min-height:100vh;
    }

    @media screen and (max-width:500px){
        min-height:220vh;
    }

    @media screen and (max-width:350px){
        min-height:170vh;
    }
`

const PortfolioContainer = styled.div`
    width:80%;
    height:80%;
    display:flex;
    align-items:center;
    flex-direction:column;
    justify-content:space-between;

    @media screen and (max-width:1200px){
        width:90%;
    }

    @media screen and (max-width:1100px){
        height:70%;
    }

    @media screen and (max-width:992px){
        height:80%;
    }
`

const Heading = styled.h1`
    font-size:30px;
    margin-top:50px;
    font-weight:300;
    position:relative;

    &::before{
        left:2%;
        top:35px;
        width:98%;
        margin:auto;
        font-size:12px;
        position:absolute;
        content:'My Previous Projects';
        border-bottom:1px solid #08ceb1;
    }

    @media screen and (max-width:500px){
        margin-top:0;
    }
`

const PortfolioWrapper = styled.div`
    gap:20px;
    width:100%;
    height:90%;
    display:grid;
    margin-top:80px;
    grid-template-rows:repeat(2, auto);
    grid-template-columns:repeat(3, auto);

    @media screen and (max-width:992px){
        grid-template-rows:repeat(3, auto);
        grid-template-columns:repeat(2, auto);
    }

    @media screen and (max-width:768px){
        gap:10px;
        margin-top:50px;
    }

    @media screen and (max-width:650px){
        height:70%;
    }

    @media screen and (max-width:500px){
        height:100%;
        grid-template-rows:repeat(6, auto);
        grid-template-columns:repeat(1, auto);
    }

    @media screen and (max-width:350px){
        height:100%;
    }
`

const ItemOne = styled.div`
    border-radius:5px;
    position:relative;
`

const ItemTwo = styled.div`
    border-radius:5px;
    position:relative;
`

const ItemThree = styled.div`
    border-radius:5px;
    position:relative;
`

const ItemFour = styled.div`
    border-radius:5px;
    position:relative;
`

const ItemFive = styled.div`
    border-radius:5px;
    position:relative;
`

const ItemSix = styled.div`
    border-radius:5px;
    position:relative;
`

const Img = styled.img`
    width:100%;
    height:100%;
    border-radius:5px;
`

const LayerOne = styled.a`
    top:0;
    left:0;
    z-index:2;
    width:100%;
    height:100%;
    display:flex;
    color:#fff;
    cursor:pointer;
    border-radius:5px;
    position:absolute;
    align-items:center;
    text-decoration:none;
    transition:0.2s linear;
    justify-content:center;
    background-color:#000000bd;
    opacity:${({isHoveredOne}) => isHoveredOne ? '1' : '0'};
`

const LayerTwo = styled.a`
    top:0;
    left:0;
    z-index:2;
    width:100%;
    height:100%;
    display:flex;
    color:#fff;
    cursor:pointer;
    border-radius:5px;
    position:absolute;
    align-items:center;
    text-decoration:none;
    transition:0.2s linear;
    justify-content:center;
    background-color:#000000bd;
    opacity:${({isHoveredTwo}) => isHoveredTwo ? '1' : '0'};
`

const LayerThree = styled.a`
    top:0;
    left:0;
    z-index:2;
    width:100%;
    height:100%;
    display:flex;
    color:#fff;
    cursor:pointer;
    border-radius:5px;
    position:absolute;
    align-items:center;
    text-decoration:none;
    transition:0.2s linear;
    justify-content:center;
    background-color:#000000bd;
    opacity:${({isHoveredThree}) => isHoveredThree ? '1' : '0'};
`

const LayerFour = styled.a`
    top:0;
    left:0;
    z-index:2;
    width:100%;
    height:100%;
    display:flex;
    color:#fff;
    cursor:pointer;
    border-radius:5px;
    position:absolute;
    align-items:center;
    text-decoration:none;
    transition:0.2s linear;
    justify-content:center;
    background-color:#000000bd;
    opacity:${({isHoveredFour}) => isHoveredFour ? '1' : '0'};
`

const LayerFive = styled.a`
    top:0;
    left:0;
    z-index:2;
    width:100%;
    height:100%;
    display:flex;
    color:#fff;
    cursor:pointer;
    border-radius:5px;
    position:absolute;
    align-items:center;
    text-decoration:none;
    transition:0.2s linear;
    justify-content:center;
    background-color:#000000bd;
    opacity:${({isHoveredFive}) => isHoveredFive ? '1' : '0'};
`

const LayerSix = styled.a`
    top:0;
    left:0;
    z-index:2;
    width:100%;
    height:100%;
    display:flex;
    color:#fff;
    cursor:pointer;
    border-radius:5px;
    position:absolute;
    align-items:center;
    text-decoration:none;
    transition:0.2s linear;
    justify-content:center;
    background-color:#000000bd;
    opacity:${({isHoveredSix}) => isHoveredSix ? '1' : '0'};
`





// Main Function
export default function Portfolio() {

    const [isHoveredOne, setIsHoveredOne] = useState(false);
    const [isHoveredTwo, setIsHoveredTwo] = useState(false);
    const [isHoveredThree, setIsHoveredThree] = useState(false);
    const [isHoveredFour, setIsHoveredFour] = useState(false);
    const [isHoveredFive, setIsHoveredFive] = useState(false);
    const [isHoveredSix, setIsHoveredSix] = useState(false);
    const HoverHandlerOne = () => {
        setIsHoveredOne(!isHoveredOne);
    }
    const HoverHandlerTwo = () => {
        setIsHoveredTwo(!isHoveredTwo);
    }
    const HoverHandlerThree = () => {
        setIsHoveredThree(!isHoveredThree);
    }
    const HoverHandlerFour = () => {
        setIsHoveredFour(!isHoveredFour);
    }
    const HoverHandlerFive = () => {
        setIsHoveredFive(!isHoveredFive);
    }
    const HoverHandlerSix = () => {
        setIsHoveredSix(!isHoveredSix);
    }

  return(
        <PortfolioSection id="portfolio">
            <PortfolioContainer>
                <Fade top><Heading>Portfolio</Heading></Fade>
                <PortfolioWrapper>
                    <Fade left>
                        <ItemOne>
                            <Img src={ImgOne}/>
                            <LayerOne isHoveredOne={isHoveredOne} target="_blank" onMouseOver={HoverHandlerOne} onMouseLeave={HoverHandlerOne} href="https://jonathan929-del.github.io/jobook-client-side/#/">
                                Social Media
                            </LayerOne>
                        </ItemOne>
                    </Fade>
                    <Fade top>
                        <ItemTwo>
                            <Img src={ImgThree} />
                            <LayerTwo isHoveredTwo={isHoveredTwo} target="_blank" onMouseOver={HoverHandlerTwo} onMouseLeave={HoverHandlerTwo} href="https://jonathan929-del.github.io/banking-app/">
                                Banking App
                            </LayerTwo>
                        </ItemTwo>
                    </Fade>
                    <Fade right distance="50px">
                        <ItemThree>
                            <Img src={ImgFour}/>
                            <LayerThree isHoveredThree={isHoveredThree} target="_blank" onMouseOver={HoverHandlerThree} onMouseLeave={HoverHandlerThree} href="https://jonathan929-del.github.io/gym-app/">
                                Gym App
                            </LayerThree>
                        </ItemThree>
                    </Fade>
                    <Fade left>
                        <ItemFour>
                            <Img src={ImgTwo}/>
                            <LayerFour isHoveredFour={isHoveredFour} target="_blank" onMouseOver={HoverHandlerFour} onMouseLeave={HoverHandlerFour} href="https://jonathan929-del.github.io/pizza-app/">
                                Pizza App
                            </LayerFour>
                        </ItemFour>
                    </Fade>
                    <Fade bottom>
                        <ItemFive>
                            <Img src={ImgTwo}/>
                            <LayerFive isHoveredFive={isHoveredFive} target="_blank" onMouseOver={HoverHandlerFive} onMouseLeave={HoverHandlerFive} href="">
                                Some Useless Sh!t
                            </LayerFive>
                        </ItemFive>
                    </Fade>
                    <Fade right distance="50px">
                        <ItemSix>
                            <Img src={ImgThree}/>
                            <LayerSix isHoveredSix={isHoveredSix} target="_blank" onMouseOver={HoverHandlerSix} onMouseLeave={HoverHandlerSix} href="">
                                Some Useless Sh!t
                            </LayerSix>
                        </ItemSix>
                    </Fade>
                </PortfolioWrapper>
            </PortfolioContainer>
        </PortfolioSection>
  );
}