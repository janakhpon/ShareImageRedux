import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        padding: theme.spacing(3, 2),
        height: 200,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignContent: "center",
        color: '#fff',
        marginTop: '25%',

    },
}));


export default function PageHome() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Typography variant="h2" component="h3" gutterBottom align="center">
                WELCOME
            </Typography>
            <Typography variant="subtitle2" gutterBottom align="center">
            Share Previews, Image and Scanned Signatures, documents with privacy
            </Typography>
        </div>
    );
}
