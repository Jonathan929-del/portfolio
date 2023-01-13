// Imports
import {useState} from 'react';
import Fade from 'react-reveal/Fade';
import styled from 'styled-components';
import {DiDatabase} from 'react-icons/di';
import {FaAngleDown} from 'react-icons/fa';
import {MdPhoneIphone} from 'react-icons/md';
import {VscBracketDot} from 'react-icons/vsc';





// Styles
const SkillsSection = styled.section`
    width:100%;
    display:flex;
    min-height:100vh;
    align-items:center;
    justify-content:center;
`

const SkillsWrapper = styled.div`
    width:80%;
    height:80%;
    display:flex;
    margin-top:50px;
    align-items:center;
    flex-direction:column;
    justify-content:center;
    justify-content:space-between;
`

const SkillsHeading = styled.h1`
    font-size:30px;
    font-weight:300;
    position:relative;

    &::before{
        top:40px;
        left:-25%;
        width:152%;
        font-size:12px;
        font-weight:100;
        position:absolute;
        content:"My Technical Skills";
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

const Dropdowns = styled.div`
    width:80%;
    display:grid;
    gap:30px 100px;
    margin-top:50px;
    transition:0.5s linear;
    grid-template-rows:repeat(4, 1fr);
    grid-template-columns:repeat(2, 1fr);
    grid-template-areas:${({isOpenOne, isOpenTwo, isOpenThree}) => isOpenOne ? "'one two' 'one .' 'one .' 'three .'" : isOpenTwo ? "'one two' 'three two' '. two' '. .'" : isOpenThree ? "'one two' 'three .' 'three .' '. .'" : "'one two' 'three .'"};

    @media screen and (max-width:992px){
        width:90%;
        gap:20px 50px;
    }

    @media screen and (max-width:768px){
        grid-template-rows: repeat(6, 1fr);
        grid-template-columns:repeat(1, 1fr);
        grid-template-areas:${({isOpenOne, isOpenTwo, isOpenThree}) => isOpenOne ? "'one' 'one' 'one' 'one' 'two' 'three'" : isOpenTwo ? "'one' 'two' 'two' 'two' 'two' 'three'" : isOpenThree ? "'one' 'two' 'three' 'three' 'three' 'three'" : "'one' 'two' 'three'"};   
    }
`

const DropdownOne = styled.div`
    grid-area:one;
    cursor:pointer;
    border-radius:10px;
    transition:0.2s linear;
`

const DropdownTwo = styled.div`
    grid-area:two;
    cursor:pointer;
    border-radius:10px;
    transition:0.2s linear;
`

const DropdownThree = styled.div`
    grid-area:three;
    border-radius:10px;
    transition:0.2s linear;
    cursor:pointer;
`

const UpperPartOne = styled.div`
    width:100%;
    display:flex;
    height:100px;
    align-items:center;
    justify-content:space-between;

    @media screen and (max-width:768px){
        height:70px;
    }
`
const UpperPartTwo = styled.div`
    width:100%;
    display:flex;
    height:100px;
    align-items:center;
    justify-content:space-between;

    @media screen and (max-width:768px){
        height:70px;
    }
`
const UpperPartThree = styled.div`
    width:100%;
    height:100px;
    display:flex;
    align-items:center;
    justify-content:space-between;

    @media screen and (max-width:768px){
        height:70px;
    }
`

const FrontendIcon = styled(VscBracketDot)`
    font-size:30px;
    color:#08ceb1;

    @media screen and (max-width:380px){
        font-size:20px;
    }
`

const BackEndIcon = styled(DiDatabase)`
    font-size:30px;
    color:#08ceb1;

    @media screen and (max-width:380px){
        font-size:20px;
    }
`

const DesignIcon = styled(MdPhoneIphone)`
    font-size:30px;
    color:#08ceb1;

    @media screen and (max-width:380px){
        font-size:20px;
    }
`

const Title = styled.h3`
    font-size:18px;
    font-weight:300;
    margin-left:5px;

    @media screen and (max-width:992px){
        font-size:15px;
    }

    @media screen and (max-width:380px){
        font-size:13px;
    }
`

const AngleOne = styled(FaAngleDown)`
    font-size:25px;
    font-weight:100;
    transition:0.2s linear;
    transform:${({isOpenOne}) => isOpenOne ? 'rotate(-180deg)' : 'rotate(0deg)'};

    @media screen and (max-width:992px){
        font-size:20px;
    }

    @media screen and (max-width:380px){
        font-size:15px;
    }
`

const AngleTwo = styled(FaAngleDown)`
    font-size:25px;
    font-weight:100;
    transition:0.2s linear;
    transform:${({isOpenTwo}) => isOpenTwo ? 'rotate(-180deg)' : 'rotate(0deg)'};

    @media screen and (max-width:992px){
        font-size:20px;
    }

    @media screen and (max-width:380px){
        font-size:15px;
    }
`

const AngleThree = styled(FaAngleDown)`
    font-size:25px;
    font-weight:100;
    transition:0.2s linear;
    transform:${({isOpenThree}) => isOpenThree ? 'rotate(-180deg)' : 'rotate(0deg)'};

    @media screen and (max-width:992px){
        font-size:20px;
    }

    @media screen and (max-width:380px){
        font-size:15px;
    }
`

const LowerPartOne = styled.div`
    width:90%;
    margin:auto;
    row-gap:20px;
    column-gap:40px;
    justify-content:space-between;
    grid-template-rows:repeat(4, 1fr);
    grid-template-columns:repeat(2, 1fr);
    display:${({isOpenOne}) => isOpenOne ? 'grid' : 'none'};
    background-color:'red';

    @media screen and (max-width:500px){
        row-gap:10px;
        grid-template-rows:repeat(8, 1fr);
        grid-template-columns:repeat(1, 1fr);
    }
`

const LowerPartTwo = styled.div`
    width:90%;
    margin:auto;
    row-gap:20px;
    flex-direction:column;
    justify-content:space-between;
    grid-template-rows:repeat(4, 1fr);
    grid-template-columns:repeat(1, 1fr);
    display:${({isOpenTwo}) => isOpenTwo ? 'grid' : 'none'};

    @media screen and (max-width:768px){
        height:75%;
    }

    @media screen and (max-width:500px){
        height:60%;
    }
`

const LowerPartThree = styled.div`
    width:80%;
    height:50%;
    margin:auto;
    display:flex;
    flex-direction:column;
    justify-content: space-between;
    display:${({isOpenThree}) => isOpenThree ? 'flex' : 'none'};

    @media screen and (max-width:768px){
        height:40%;
    }

    @media screen and (max-width:500px){
        height:30%;
    }
`

const Skill = styled.div`
    
`

const SkillText = styled.div`
    display:flex;
    margin-bottom:5px;
    align-items:center;
    justify-content:space-between;
`

const SkillName = styled.p`
    @media screen and (max-width:992px){
        font-size:15px;
    }

    @media screen and (max-width:380px){
        font-size:13px;
    }
`

const SkillPer = styled.p`
    @media screen and (max-width:992px){
        font-size:13px;
    }

    @media screen and (max-width:380px){
        font-size:11px;
    }
`

const SkillProg = styled.div`
    width:100%;
    height:10px;
    border-radius:20px;
    background-color:${({styleDarkMode}) => styleDarkMode === 'true' ? '#fff' : '#dbdbdb'};

    @media screen and (max-width:600px){
        height:7px;
    }
`

const ActualProg = styled.div`
    height:100%;
    border-radius:20px;
    background-color:#08ceb1;
    width:${({per}) => per ? per + '%' : per + '%'};
`

const Div = styled.div`
    display:flex;
    align-items:center;
`





// Main Function
export default function Skills({styleDarkMode}) {

    const [isOpenOne, setIsOpenOne] = useState(false);
    const [isOpenTwo, setIsOpenTwo] = useState(false);
    const [isOpenThree, setIsOpenThree] = useState(false);
    const OpenHandlerOne = () => {
        setIsOpenTwo(false);
        setIsOpenThree(false);
        setIsOpenOne(!isOpenOne);
    }
    const OpenHandlerTwo = () => {
        setIsOpenOne(false);
        setIsOpenThree(false);
        setIsOpenTwo(!isOpenTwo);
    }
    const OpenHandlerThree = () => {
        setIsOpenOne(false);
        setIsOpenTwo(false);
        setIsOpenThree(!isOpenThree);
    }

    return (
        <SkillsSection id="skills">
            <SkillsWrapper>
                <Fade top><SkillsHeading>Skills</SkillsHeading></Fade>
                <Dropdowns isOpenOne={isOpenOne} isOpenTwo={isOpenTwo} isOpenThree={isOpenThree}>
                    <DropdownOne onClick={OpenHandlerOne} isOpenOne={isOpenOne}>
                        <UpperPartOne isOpenOne={isOpenOne}>
                            <Fade left>
                                <Div>
                                    <FrontendIcon />
                                    <Title>Front-End Development</Title>
                                </Div>
                                <AngleOne isOpenOne={isOpenOne}/>
                            </Fade>
                        </UpperPartOne>
                        <LowerPartOne isOpenOne={isOpenOne}>
                            <Skill>
                                <SkillText>
                                    <SkillName>Html</SkillName>
                                    <SkillPer>80%</SkillPer>
                                </SkillText>
                                <SkillProg styleDarkMode={styleDarkMode}><ActualProg per="80"/></SkillProg>
                            </Skill>
                            <Skill>
                                <SkillText>
                                    <SkillName>Css</SkillName>
                                    <SkillPer>85%</SkillPer>
                                </SkillText>
                                <SkillProg styleDarkMode={styleDarkMode}><ActualProg per="85"/></SkillProg>
                            </Skill>
                            <Skill>
                                <SkillText>
                                    <SkillName>JavaScript</SkillName>
                                    <SkillPer>70%</SkillPer>
                                </SkillText>
                                <SkillProg styleDarkMode={styleDarkMode}><ActualProg per="70"/></SkillProg>
                            </Skill>
                            <Skill>
                                <SkillText>
                                    <SkillName>ReactJs</SkillName>
                                    <SkillPer>95%</SkillPer>
                                </SkillText>
                                <SkillProg styleDarkMode={styleDarkMode}><ActualProg per="90"/></SkillProg>
                            </Skill>
                            <Skill>
                                <SkillText>
                                    <SkillName>NextJs</SkillName>
                                    <SkillPer>90%</SkillPer>
                                </SkillText>
                                <SkillProg styleDarkMode={styleDarkMode}><ActualProg per="90"/></SkillProg>
                            </Skill>
                            <Skill>
                                <SkillText>
                                    <SkillName>Tailwind</SkillName>
                                    <SkillPer>65%</SkillPer>
                                </SkillText>
                                <SkillProg styleDarkMode={styleDarkMode}><ActualProg per="65"/></SkillProg>
                            </Skill>
                            <Skill>
                                <SkillText>
                                    <SkillName>Material UI</SkillName>
                                    <SkillPer>50%</SkillPer>
                                </SkillText>
                                <SkillProg styleDarkMode={styleDarkMode}><ActualProg per="50"/></SkillProg>
                            </Skill>
                            <Skill>
                                <SkillText>
                                    <SkillName>Bootstap</SkillName>
                                    <SkillPer>60%</SkillPer>
                                </SkillText>
                                <SkillProg styleDarkMode={styleDarkMode}><ActualProg per="60"/></SkillProg>
                            </Skill>
                        </LowerPartOne>
                    </DropdownOne>
                    <DropdownTwo onClick={OpenHandlerTwo} isOpenTwo={isOpenTwo}>
                        <UpperPartTwo isOpenTwo={isOpenTwo}>
                            <Fade right>
                                <Div>
                                    <BackEndIcon />
                                    <Title>Back-End Development</Title>
                                </Div>
                                <AngleTwo isOpenTwo={isOpenTwo}/>
                            </Fade>
                        </UpperPartTwo>
                        <LowerPartTwo isOpenTwo={isOpenTwo}>
                            <Skill>
                                <SkillText>
                                    <SkillName>NodeJs</SkillName>
                                    <SkillPer>80%</SkillPer>
                                </SkillText>
                                <SkillProg styleDarkMode={styleDarkMode}><ActualProg per="80"/></SkillProg>
                            </Skill>
                            <Skill>
                                <SkillText>
                                    <SkillName>ExpressJs</SkillName>
                                    <SkillPer>90%</SkillPer>
                                </SkillText>
                                <SkillProg styleDarkMode={styleDarkMode}><ActualProg per="90"/></SkillProg>
                            </Skill>
                            <Skill>
                                <SkillText>
                                    <SkillName>MongoDB</SkillName>
                                    <SkillPer>70%</SkillPer>
                                </SkillText>
                                <SkillProg styleDarkMode={styleDarkMode}><ActualProg per="70"/></SkillProg>
                            </Skill>
                            <Skill>
                                <SkillText>
                                    <SkillName>Rest APIs</SkillName>
                                    <SkillPer>95%</SkillPer>
                                </SkillText>
                                <SkillProg styleDarkMode={styleDarkMode}><ActualProg per="95"/></SkillProg>
                            </Skill>
                        </LowerPartTwo>
                    </DropdownTwo>
                    <DropdownThree onClick={OpenHandlerThree} isOpenThree={isOpenThree}>
                        <UpperPartThree isOpenThree={isOpenThree}>
                            <Fade left>
                                <Div>
                                    <DesignIcon />
                                    <Title>Mobile App Development</Title>
                                </Div>
                                <AngleThree isOpenThree={isOpenThree}/>
                            </Fade>
                        </UpperPartThree>
                        <LowerPartThree isOpenThree={isOpenThree}>
                            <Skill>
                                <SkillText>
                                    <SkillName>React Native</SkillName>
                                    <SkillPer>90%</SkillPer>
                                </SkillText>
                                <SkillProg styleDarkMode={styleDarkMode}><ActualProg per="90"/></SkillProg>
                            </Skill>
                        </LowerPartThree>
                    </DropdownThree>
                </Dropdowns>
            </SkillsWrapper>
        </SkillsSection>
    )
}
