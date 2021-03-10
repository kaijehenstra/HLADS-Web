import React from 'react'
import {Typography} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'

const styles = makeStyles({
    wrapper: {
       display: "flex",
       flexDirection: "column", 
       alignItems: "center", 
       padding: "0 5rem 0 5rem"
    }, 
})

function Home() {
    const classes = styles(); 

    return (
        <div className={classes.wrapper}>
            <Typography className={classes.item} variant="h1">Home</Typography>
        </div>
    )
}

export default Home
