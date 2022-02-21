import styled, {ThemeProvider, createGlobalStyle} from 'styled-components';
import {useParallax} from 'react-scroll-parallax';
import Navigation from './Navigation';
import Footer from './Footer';

const theme = {};

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 10px;
    font-family: 'Raleway', sans-serif;
  }

  *, *:before, *:after {
    box-sizing:inherit;
  }
  body {
    font-family: 'Architects Daughter', cursive;
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    line-height: 2;
    background: url('/bg.jpg');
    background-size: 300px 300px;
  }
  #__next{
    height: 100%;
  }
`;

const Content = styled.div`
  width: 100%;
  padding: 20px;

  padding-top: 200px;

  @media only screen and (max-width: 800px) {
    padding-top: 80px;
  }
    
  @media only screen and (max-width: 600px) {
    padding-top: 50px;    
  }

  h1 {
    font-size: 20px;
  }
`;

const AppContainerStyles = styled.div`
  margin: 0 auto;
  max-width: 1100px;
  background: rgba(255, 255, 255, 0.9);
`;

function Page(props) {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <AppContainerStyles>
          <Navigation />
          <Content>
            {props.children}
          </Content>
          <Footer />
        </AppContainerStyles>
      </>
    </ThemeProvider>
  );
}

export default Page;
