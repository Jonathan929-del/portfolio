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
            Copyright © 2022 All Right Reserved | Made With ❤️ By <Name>Jonathan</Name>
        </Fade>
      </FooterContainer>
  )
}