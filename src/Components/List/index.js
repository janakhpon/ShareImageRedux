import React, { useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Fab from '@material-ui/core/Fab'
import AddIcon from '@material-ui/icons/Add'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import PageListItem from '../ListItem'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { useTheme } from '@material-ui/core/styles'
import CloseIcon from '@material-ui/icons/Close'
import SnackbarContent from '@material-ui/core/SnackbarContent'
import Snackbar from '@material-ui/core/Snackbar'
import IconButton from '@material-ui/core/IconButton'
import setAuthToken from '../utils'
import PageListUpload from '../ListForm'
import { connect } from 'react-redux'
import { addList, getList } from '../../actions/dataActions'
import { getMe } from '../../actions/userActions'

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    multilineColor: {
        color: 'red'
    },
    fabbtn: {
        margin: theme.spacing(4),
        textAlign: 'center',
    },
    Dialog: {
        background: '#002c4c',
        color: '#ffffff',
    },
    Dialogcontent: {
        maxWidth: '100%',
        background: '#002c4c',
        color: '#ffffff',
    },
    formLabel: {
        background: '#002c4c',
        color: '#02c39a',
        '&.Mui-focused': {
            color: '#02c39a'
        }
    },
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
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
    margin: {
        margin: theme.spacing(1),
        color: theme.palette.secondary.main,
    },
}));

const PageList = (props) => {
    let username = props.users.user && props.users.user.username ? props.users.user.username : "unknown"
    let err = props.posts.posts && props.posts.posts.error
    let msg = props.posts.posts && props.posts.posts.msg
    const classes = useStyles()
    const [open, setOpen] = React.useState(false)
    const [snackopen, setSnackopen] = React.useState(true)
    const theme = useTheme()
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'))


    useEffect(() => {
        let isSubscribed = true
        const getUser = async () => {
            try {
                await props.getMe()
            } catch (err) {
            }
        }
        try {
            getUser()
        } catch (err) {
        }
        return () => isSubscribed = false
    }, [])


    useEffect(() => {
        let isSubscribed = true
        const getData = async () => {
            try {
                let token = localStorage.getItem('token')
                setAuthToken(token)
                await props.getList()
            } catch (err) {

            }
        }
        try {
            getData()
        } catch (err) {

        }
        return () => isSubscribed = false
    }, [])

    const onClose = () => {
        setSnackopen(false)
    }

    const handleClickOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    return (
        <>
            {
                err ? (
                    <Snackbar
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'right',
                        }}
                        open={snackopen}
                        onClose={onClose}
                        autoHideDuration={2000}
                    >
                        <SnackbarContent
                            className={classes.notibox}
                            aria-describedby="client-snackbar"
                            message={
                                <span id="client-snackbar" className={classes.message}>
                                    {err}
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
                            open={snackopen}
                            onClose={onClose}
                            autoHideDuration={2000}
                        >
                            <SnackbarContent
                                className={classes.notibox}
                                aria-describedby="client-snackbar"
                                message={
                                    <span id="client-snackbar" className={classes.message}>
                                        {msg}
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
            <Grid container alignContent="center" justify="center">
                <Grid item xs={12} sm={12} md={10} lg={10} xl={8}>
                    {
                        username != 'unknown' ? (
                            <Grid container
                                direction="row"
                                justify="flex-start"
                                alignItems="flex-start">
                                <Grid item xs={2} sm={2} md={2} lg={2} xl={2}>
                                    <Fab size="small" color="primary" aria-label="add" className={classes.fabbtn} onClick={handleClickOpen}>
                                        <AddIcon />
                                    </Fab>
                                </Grid>
                                <Grid item xs={8} sm={8} md={9} lg={8} xl={8}>
                                </Grid>
                            </Grid>
                        ) :
                            (
                                ''
                            )
                    }
                    <Grid container direction="row" justify="center" alignitems="center">
                        <Grid item xs={12}>
                            <Dialog
                                fullScreen={fullScreen}
                                open={open}
                                onClose={handleClose}
                                aria-labelledby="responsive-dialog-title"
                                PaperProps={{
                                    classes: {
                                        root: classes.Dialog
                                    }
                                }}
                            >
                                <DialogTitle id="responsive-dialog-title">{"Describe clearly! "}</DialogTitle>
                                <DialogContent className={classes.Dialogcontent} >
                                    <PageListUpload />
                                </DialogContent>
                                <DialogActions>
                                    <Button onClick={handleClose} color="primary" autoFocus>
                                        CANCEL
                                    </Button>
                                </DialogActions>
                            </Dialog>
                        </Grid>
                    </Grid>

                    {
                        props.posts ? (
                            props.posts.posts.map((single, key) => {
                                let user = {
                                    _id: props.users.user && props.users.user.id,
                                    username: props.users.user && props.users.user.username,
                                    email: props.users.user && props.users.user.email,
                                    phone: props.users.user && props.users.user.phone,
                                    position: props.users.user && props.users.user.position
                                }
                                return <PageListItem singleimg={single ? single : null} key={key} user={user ? user : null} />
                            })
                        ) :
                            ('')
                    }
                </Grid>
            </Grid>
        </>
    );
}

const mapStateToProps = state => ({
    posts: state.posts,
    users: state.users
});


export default connect(mapStateToProps, { addList, getList, getMe })(PageList)