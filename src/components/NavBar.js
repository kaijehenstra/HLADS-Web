import React from 'react'
import logo from '../logo.png'
import {AppBar, Toolbar, Typography} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'

import { Link } from 'react-router-dom';

const styles = makeStyles({
    bar:{
        paddingTop: "1.15rem",
        backgroundColor: "#fff",
        ['@media (max-width:780px)']: { 
           flexDirection: "column"
          }
    },
    menuItem: {
        textDecoration: "none",
        cursor: "pointer", 
        flexGrow: 1,
        color: "rgba(0,0,0,0.87)",
        "&:hover": {
            color:  "#1FBBE6"
        },
        ['@media (max-width:780px)']: { 
            paddingBottom: "1rem"    }
    }
})

function NavBar() {
    const classes = styles()
    
    return (
        <AppBar>
            <Toolbar position="sticky" className={classes.bar}> 
                    <img src={logo} className={classes.logo} alt=""/>
                    <Link className={classes.menuItem} to="/">
                    <Typography variant="h6">
                        Home
                    </Typography>
                    </Link>

                    <Link className={classes.menuItem} to="/webhosting">
                    <Typography variant="h6">
                        Webhosting
                    </Typography>
                    </Link>

                    <Link className={classes.menuItem} to="/dedicatedwebhosting">
                    <Typography variant="h6">
                        Dedicated webhosting
                    </Typography>
                    </Link>

                    <Link className={classes.menuItem} to="/Contact">
                    <Typography variant="h6">
                        Contact
                    </Typography>
                    </Link>
            </Toolbar>
        </AppBar>
    )
}

export default NavBar