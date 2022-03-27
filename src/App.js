// Imports
import './App.css';
import {useState} from 'react';
import styled from 'styled-components';
import MainPage from './Pages/MainPage';
import {DarkMode, LightMode} from './Themes';





const MainWrapper = styled.section`
  min-width:100%;
  transition:0.2s linear;
  color:${({styleDarkMode}) => styleDarkMode === 'true' ? DarkMode.text : LightMode.text};
  background-color:${({styleDarkMode}) => styleDarkMode === 'true' ? DarkMode.backgroundColor : LightMode.backgroundColor};
`





// Main Function
function App() {

  const styleDarkMode = localStorage.getItem('darkMode');
  const [darkMode, setDarkMode] = useState(false);
  const ThemeHandler = () => {
    setDarkMode(!darkMode)
    localStorage.setItem('darkMode', darkMode);
  }

  return (
    <div className="App">
      <MainWrapper styleDarkMode={styleDarkMode}>
        <MainPage styleDarkMode={styleDarkMode} ThemeHandler={ThemeHandler}/>
      </MainWrapper>
    </div>
  );
}





// Export
export default App;