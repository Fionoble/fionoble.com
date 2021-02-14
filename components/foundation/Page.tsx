import {ThemeProvider, createGlobalStyle} from 'styled-components';
import AppContainerStyles from '../styles/AppContainerStyles';
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
  }
`

function Page(props) {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <AppContainerStyles>
          <Navigation />
          {props.children}
          <Footer />
        </AppContainerStyles>
      </>
    </ThemeProvider>
  );
}

export default Page;
