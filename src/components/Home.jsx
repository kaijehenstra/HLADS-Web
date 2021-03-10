import React from 'react';
import {makeStyles} from '@material-ui/core/styles';

const styles = makeStyles({
    body: {

    },
});

function Home() {
    const classes = styles()

    return (
        <div>
            <h1>Home</h1>
        </div>
    )
}

export default Home
