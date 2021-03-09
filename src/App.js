import { createMuiTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles';
import {Typography} from '@material-ui/core'; 
import NavBar from './components/NavBar'
import Footer from './components/Footer'
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
    <div className="App">
      <ThemeProvider theme={theme}>
        <NavBar/>
        <div className={classes.wrapper}>
          <switch>
            <route exact path="/">
              <container>
                <Typography variant="h4" className={classes.bigSpace} color="primary">
                  test
                </Typography>
              </container>
            </route>

            <route exact path="/webhosting">
              <container>
                <Typography variant="h4" className={classes.bigSpace} color="primary">
                  test wh
                </Typography>
              </container>
            </route>

            <route exact path="/dedicated_webhosting">
              <container>
                <Typography variant="h4" className={classes.bigSpace} color="primary">
                  test wd
                </Typography>
              </container>
            </route>

            <route exact path="/services">
              <container>
                <Typography variant="h4" className={classes.bigSpace} color="primary">
                  test serv
                </Typography>
              </container>
            </route>
            
          </switch>
        </div>
        <Footer/>
      </ThemeProvider>
    </div>
  );
}

export default App;
