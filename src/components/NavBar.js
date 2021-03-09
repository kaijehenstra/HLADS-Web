import React from 'react'
import CustomBtn from './CustomBtn'
import logo from '../logo.png'
import {Toolbar, Typography} from '@material-ui/core'
import {makeStyles} from "@material-ui/core/styles"; 

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
            <Toolbar position="sticky" color="rgba(0, 0, 0, 0.87)" className={classes.bar}> 
                <img src={logo} className={classes.logo} alt=""/>   
                <Typography variant="h6" className={classes.menuItem}>
                   Home
                </Typography>
                <Typography variant="h6" className={classes.menuItem}>
                   Webhosting
                </Typography>
                <Typography variant="h6" className={classes.menuItem}>
                    Dedicated Webhosting
                </Typography>
                <Typography variant="h6" className={classes.menuItem}>
                   Services
                </Typography>
                <CustomBtn txt="Contact"/>
            </Toolbar>
    )
}

export default NavBar