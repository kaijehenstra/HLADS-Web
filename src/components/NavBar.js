import React from 'react'
import logo from '../logo.png'
import {AppBar, Toolbar, Typography} from '@material-ui/core'
import {makeStyles} from "@material-ui/core/styles"

const styles = makeStyles({
    bar:{
        paddingTop: "1.15rem",
        backgroundColor: "#fff",
        ['@media (max-width:780px)']: { 
           flexDirection: "column"
          }
    },
    menuItem: {
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
                    <Typography variant="h6" className={classes.menuItem}>
                        Home
                    </Typography>
                    <Typography variant="h6" className={classes.menuItem}>
                        Webhosting
                    </Typography>
                    <Typography variant="h6" className={classes.menuItem}>
                        Dedicated webhosting
                    </Typography>
                    <Typography variant="h6" className={classes.menuItem}>
                        Services
                    </Typography>
            </Toolbar>
        </AppBar>
    )
}

export default NavBar