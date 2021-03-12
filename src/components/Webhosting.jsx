import React from 'react'
import {Typography, Container} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
import bannerWH from '../bannerWH.jpg';


const styles = makeStyles({
    wrapper: {
       display: "flex",
       alignItems: "center", 
       flexDirection: "column"
    },
    
    img: {
        allign: "center",
        maxWidth: "100%",
        height: "auto",
    },
})

function Webhosting() {
    const classes = styles(); 

    return (
        <div className={classes.wrapper}>
            <img className={classes.img} src={bannerWH} alt="" />  
        </div>
    )
}

export default Webhosting
