import React from 'react'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import CloseIcon from '@material-ui/icons/Close'
import SnackbarContent from '@material-ui/core/SnackbarContent'
import Snackbar from '@material-ui/core/Snackbar'
import IconButton from '@material-ui/core/IconButton'
import axios from 'axios'
import { URL_USER_RESET, URL_LIST_RESET } from '../../Requests'

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
        marginTop: '15%',

    },
    btn: {
        backgroundColor: '#bf1a2f',
        color: '#ffffff',
        margin: theme.spacing(2),
    },
    notibox: {
        color: "#ffffff",
        backgroundColor: "#20bf55",
    },
    icon: {
        fontSize: 20,
    },
    iconVariant: {
        opacity: 0.9,
        marginRight: theme.spacing(1),
    },
    message: {
        display: 'flex',
        alignItems: 'center',
    },
}));

const NOTI_VALUES = {
    msg: '',
    err: ''
}

export default function PageDev() {
    const [noti, setNoti] = React.useState(NOTI_VALUES)
    const [open, setOpen] = React.useState(false)
    const classes = useStyles()

    const onClose = () => {
        setOpen(false)
    }

    const handleUserReset = async (e) => {
        try {
            const cb = await axios({
                method: 'post',
                url: URL_USER_RESET,
                config: { headers: { 'Content-Type': 'multipart/form-data' } }
            })
            if (cb.data.err !== '') {
                setOpen(true)
                setNoti({ err: cb.data.err })
            } else {
                setOpen(true)
                setNoti({ msg: cb.data.msg })
            }

        } catch (err) {
            setOpen(true)
            setNoti({ err: err })
        }
    }

    const handleFileReset = async (e) => {
        try {
            const cb = await axios({
                method: 'post',
                url: URL_LIST_RESET,
                config: { headers: { 'Content-Type': 'multipart/form-data' } }
            })
            if (cb.data.err !== '') {
                setOpen(true)
                setNoti({ err: cb.data.err })
            } else {
                setOpen(true)
                setNoti({ msg: cb.data.msg })
            }

        } catch (err) {
            setOpen(true)
            setNoti({ err: err })
        }
    }

    return (
        <div className={classes.root}>
            {
                noti.err ? (
                    <Snackbar
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'right',
                        }}
                        open={open}
                        onClose={onClose}
                        autoHideDuration={2000}
                    >
                        <SnackbarContent
                            className={classes.notibox}
                            aria-describedby="client-snackbar"
                            message={
                                <span id="client-snackbar" className={classes.message}>
                                    {noti.err}
                                </span>
                            }
                            action={[
                                <IconButton key="close" aria-label="close" color="inherit" onClick={onClose}>
                                    <CloseIcon className={classes.icon} />
                                </IconButton>,
                            ]}
                        />
                    </Snackbar>
                ) : (
                        <Snackbar
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'right',
                            }}
                            open={open}
                            onClose={onClose}
                            autoHideDuration={2000}
                        >
                            <SnackbarContent
                                className={classes.notibox}
                                aria-describedby="client-snackbar"
                                message={
                                    <span id="client-snackbar" className={classes.message}>
                                        {noti.msg}
                                    </span>
                                }
                                action={[
                                    <IconButton key="close" aria-label="close" color="inherit" onClick={onClose}>
                                        <CloseIcon className={classes.icon} />
                                    </IconButton>,
                                ]}
                            />
                        </Snackbar>
                    )
            }
            <Typography variant="h4" component="h5" gutterBottom align="center">
                <Button variant="contained" className={classes.btn} onClick={handleUserReset}>
                    RESET USERS
                </Button>
                <Button variant="contained" className={classes.btn} onClick={handleFileReset}>
                    RESET FILES
                </Button>
            </Typography>
            <Typography variant="subtitle2" gutterBottom align="center">
                You can not recover any of these users data or files  after reset!. Think twice befor click the buttons above .
            </Typography>

        </div>
    );
}
