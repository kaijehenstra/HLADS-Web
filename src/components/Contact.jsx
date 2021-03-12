import React from 'react'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles'

const styles = makeStyles({
    wrapper: {
       display: "flex",
       flexDirection: "column", 
       alignItems: "center", 
       padding: "0 5rem 0 5rem"
    },
    root: {
        minWidth: 275,
      },
})

function Contact() {
    const classes = styles();
    const bull = <span className={classes.bullet}>•</span>;

    return (
        <div className={classes.wrapper}>
            
            <Card className={classes.root}>
                <CardContent>
                    <Typography variant="h4" component="h2">
                    Contact
                    </Typography>
                    <Typography variant="p" component="h2">
                    Blankenstrjitte 29
                    </Typography>
                    <Typography variant="p" component="h2">
                    9298PP Kollumerzwaag
                    </Typography>
                    <Typography variant="p" component="h2">
                    Friesland, The Netherlands
                    </Typography>
                </CardContent>
            </Card>

            <Card className={classes.root}>
                <CardContent>
                    <Typography variant="h4" component="h2">
                    Contact info
                    </Typography>
                    <Typography variant="p" component="h2">
                    Tel.: +31 6 10698958
                    </Typography>
                    <Typography variant="p" component="h2">
                    e-Mail: contact@hlads.net
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}

export default Contact
