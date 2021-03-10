import React from 'react';
import { BottomNavigation } from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';

const styles = makeStyles({
    footer: {
        backgroundColor: "#0A1128",
        color: 'white',
    }
})

function Footer() {
    const classes = styles()

    return (
        <BottomNavigation className={classes.footer}>
            <h1>test</h1>
        </BottomNavigation>
    )
}

export default Footer