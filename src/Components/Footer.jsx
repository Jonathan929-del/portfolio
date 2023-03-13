// Imports
import React from 'react';
import Fade from 'react-reveal/Fade';
import styled from 'styled-components';





// Styles
const FooterContainer = styled.footer`
    width:100%;
    height:100px;
    display:flex;
    align-items:center;
    justify-content:center;
    color:${({styleDarkMode}) => styleDarkMode === 'true' ? '#fff' : '#000'};
    background-color:${({styleDarkMode}) => styleDarkMode === 'true' ? '#1d1a22' : '#ebebeb'};

    @media screen and (max-width:600px){
      height:70px;
      font-size:12px;
    }

    @media screen and (max-width:400px){
      font-size:10px;
    }

    @media screen and (max-width:330px){
      height:50px;
      font-size:8px;
    }
`

const Name = styled.p`
    color:#08ceb1;
    margin-left:5px;
`





// Main Function
export default function Footer({styleDarkMode}) {
  return (
    <FooterContainer styleDarkMode={styleDarkMode}>
        <Fade bottom>
            Copyright © <p style={{marginRight:5}}>{new Date().getFullYear()}</p> All Right Reserved | Made With ❤️ By <Name>Jonathan</Name>
        </Fade>
      </FooterContainer>
  )
}