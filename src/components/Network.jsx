import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import bannerNW from '../bannerNW2.jpg';


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

function Network() {
    const classes = styles(); 

    return (
        <div className={classes.wrapper}>
            <img className={classes.img} src={bannerNW} alt="" />
        </div>
    )
}

export default Network
