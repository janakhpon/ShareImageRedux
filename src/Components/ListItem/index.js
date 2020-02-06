import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import moment from 'moment'
import CloseIcon from '@material-ui/icons/Close'
import SnackbarContent from '@material-ui/core/SnackbarContent'
import Snackbar from '@material-ui/core/Snackbar'
import IconButton from '@material-ui/core/IconButton'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import { useHistory } from 'react-router-dom'
import { connect } from 'react-redux'
import { deleteListItem, updateListItem } from '../../actions/dataActions'
import { MAIN_URL, URL_LIST_REMOVE, URL_LIST_ID } from '../../Requests'
import './index.css'
const formData = new FormData()

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        padding: theme.spacing(2),
        margin: theme.spacing(1),
        background: 'transparent',
    },
    paper: {
        padding: theme.spacing(2),
        margin: 'auto',
        maxWidth: '100%',
        background: '#002c4c',
        color: '#ffffff',
    },
    image: {
        [theme.breakpoints.down('sm')]: {
            width: '100%',
            height: '100%',
        },
        [theme.breakpoints.up('md')]: {
            width: '100%',
            height: '100%',
        },
        [theme.breakpoints.up('lg')]: {
            width: 300,
            height: 200,
        },
    },
    img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
    },
    btn: {
        backgroundColor: '#bf1a2f',
        color: '#ffffff',
        margin: theme.spacing(2),
    },
    btn1: {
        backgroundColor: '#02c39a',
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
    Dialog: {
        background: '#002c4c',
        color: '#ffffff',
    },
    Dialogcontent: {
        maxWidth: '100%',
        background: '#002c4c',
        color: '#ffffff',
    },
}));



const NOTI_VALUES = {
    msg: '',
    err: ''
}

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const PageListItem = (props) => {
    let { singleimg, user } = props
    console.log("List Item")
    console.log(props)
    let err = props.posts.posts&& props.posts.posts.error
    let msg = props.posts.posts&& props.posts.posts.msg
    const { _id, date, description, image, mimetype } = singleimg
    const { username, position } = user

    const INITIAL_STATE = {
        description: singleimg.description,
        image: null
    }

    const [values, setValues] = React.useState(INITIAL_STATE)
    const [noti, setNoti] = React.useState(NOTI_VALUES)
    const [open, setOpen] = React.useState(true)
    const [updateopen, setUpdateopen] = React.useState(false)
    const classes = useStyles();
    const history = useHistory()

    const onClose = () => {
        setOpen(false)
    }

    const handleUpdateOpen = () => {
        setUpdateopen(true)
    }

    const handleUpdateClose = () => {
        setUpdateopen(false)
    }
    const handleDescription = (e) => {
        e.preventDefault()
        setValues({
            description: e.target.value
        })
        formData.set('description', e.target.value);
    }


    const handleImage = async (e) => {
        e.preventDefault()
        setValues({
            image: e.target.files
        })
        formData.append('image', e.target.files[0]);
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        let url = `${URL_LIST_ID}${_id}`

        try {
            props.updateListItem(formData, url)

        } catch (err) {
            setNoti({ err: err })
        }


    }

    const handleRemove = async (e) => {
        e.preventDefault()
        let url = `${URL_LIST_REMOVE}${_id}`

        try {
            props.deleteListItem(url, _id)
        } catch (err) {
            setNoti({ err: err })
        }

    }

    return (
        <div className={classes.root}>
            {
                err ? (
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
                                    sorry
                                </span>
                            }
                            action={[
                                <IconButton key="close" aria-label="close" color="inherit" onClick={onClose}>
                                    <CloseIcon className={classes.icon} />
                                </IconButton>
                            ]}
                        />
                    </Snackbar>
                ) : (
                        ''
                    )
            }
            <Dialog
                open={updateopen}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleUpdateClose}
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
                PaperProps={{
                    classes: {
                        root: classes.Dialog
                    }
                }}
            >
                <DialogTitle id="alert-dialog-slide-title">{username ? username : 'unknown'}</DialogTitle>
                <DialogContent className={classes.Dialogcontent}>
                    <Grid container direction="row" justify="center" alignitems="center" spacing={2}>
                        <Grid item xs={12} className="grid">
                            <Paper className='paper'>
                                <input type="text" id="description" name="description" className="form-control" value={values.description} onChange={handleDescription} />
                            </Paper>
                        </Grid>

                        <Grid item xs={12} className="grid">
                            <Paper className='paper' >
                                <input type="file" className="form-control" id="image" name="image" ref={values.image} onChange={handleImage} />
                            </Paper>
                        </Grid>

                        <Grid item xs={12} className="grid">
                            <Paper className='paper'>
                                <input type="submit" value="UPLOAD" className="btn-submit" onClick={handleSubmit} />
                            </Paper>
                        </Grid>
                    </Grid>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleUpdateClose} color="primary" className={classes.btn}>
                        OK
                </Button>
                </DialogActions>
            </Dialog>
            <Paper className={classes.paper}>
                <Grid container spacing={2}>
                    <Grid item>
                        <ButtonBase className={classes.image}>
                            <img className={classes.img} alt="complex" src={`${MAIN_URL}/${image ? image : 'imgnotfound'}`} />
                        </ButtonBase>
                    </Grid>
                    <Grid item xs={12} sm container>
                        <Grid item xs container direction="column" spacing={2}>
                            <Grid item xs>
                                <Typography gutterBottom variant="h6">
                                    {moment(date, 'x').fromNow()}
                                </Typography>
                                <Typography variant="body2" gutterBottom>
                                    Description : {description}
                                </Typography>
                                <Typography variant="body2" gutterBottom>
                                    IMG : {mimetype}
                                </Typography>
                                <Typography variant="body2" gutterBottom>
                                    ID : {_id}
                                </Typography>
                                <Typography variant="body1">
                                    By : {username}
                                </Typography>
                                <Typography variant="body2">
                                    {position} at Technological University(Mawlamyine)
                                </Typography>
                            </Grid>
                            <Grid item container direction="row">
                                <Grid xs item>
                                    <Typography variant="body2" style={{ cursor: 'pointer' }}>
                                        <Button variant="contained" className={classes.btn1} onClick={handleUpdateOpen}>
                                            UPDATE
                                        </Button>
                                    </Typography>
                                </Grid>
                                <Grid xs item>
                                    <Typography variant="body2" style={{ cursor: 'pointer' }}>
                                        <Button variant="contained" className={classes.btn} onClick={handleRemove}>
                                            REMOVE
                                </Button>
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <Typography variant="subtitle1">
                                <a href={`${MAIN_URL}/${image}`}>Access</a>
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    );
}


const mapStateToProps = state => ({
    posts: state.posts,
    users: state.users,
})

export default connect(mapStateToProps, { updateListItem, deleteListItem })(PageListItem)