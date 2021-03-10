import { createMuiTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Home from './components/Home'
import Webhosting from './components/Webhosting'
import DedicatedWebhosting from './components/DedicatedWebhosting'
import Contact from './components/Contact'

import './App.css';

const theme = createMuiTheme({
  palette: {
    primary: {
      main:"#0A1128",
    },
    secondary: {
      main:"#1282A2",
    },
  },
  typography: {
    fontFamily: [
      'Roboto'
    ],
    h4: {
      fontWeight: 600,
      fontSize: 28,
      lineHeight: '2rem',
      },
    h5: {
      fontWeight: 100,
      lineHeight: '2rem',
    },
  },
});

const styles = makeStyles({
  wrapper: {
    width: "65%",
    margin: "auto",
    textAlign: "center"
  },
  bigSpace: {
    marginTop: "5rem"
  },
  littleSpace:{
    marginTop: "2.5rem",
  },
})

function App() {
  const classes = styles(); 

  return (
    <Router>
      <div className="App">
          <ThemeProvider theme={theme}>
            <NavBar/>

          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/webhosting" component={Webhosting}/>
            <Route exact path="/dedicatedwebhosting" component={DedicatedWebhosting}/>
            <Route exact path="/contact" component={Contact}/>
          </Switch>

            <Footer/>
        </ThemeProvider>
      </div>
    </Router>
  );
}

export default App;
