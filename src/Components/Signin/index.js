import React from 'react'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import * as routes from '../../Routes'
import Grid from '@material-ui/core/Grid'
import LockOpenOutlinedIcon from '@material-ui/icons/LockOpenOutlined'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import { amber, green } from '@material-ui/core/colors'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { useHistory } from 'react-router-dom'
import { withStyles } from "@material-ui/styles"
import CloseIcon from '@material-ui/icons/Close';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import axios from 'axios'
import { URL_USER_SIGNIN } from '../../Requests'
import setAuthToken from '../utils'


const NavLink = styled(Link)`
    text-decoration: none;
    outline: none;
    text-align: center;
    color: #ffffff;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
        outline: none;
        color: #0984e3;
    }
`;

const useStyles = makeStyles(theme => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        color: "#ffffff",
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
    },
    notibox: {
        color: "#ffffff",
        backgroundColor: "#20bf55",
    },
    success: {
        backgroundColor: green[600],
    },
    error: {
        backgroundColor: theme.palette.error.dark,
    },
    info: {
        backgroundColor: theme.palette.primary.main,
    },
    warning: {
        backgroundColor: amber[700],
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
    select: {
        color: "#ffff",
        "& option": {
            color: theme.palette.primary.main,
        },
        '&.Mui-focused': {
            color: '#d90429',
            background: 'transparent',
        }
    }
}))

const styles = {
    underline: {
        // normal style
        "&::before": {
            borderBottom: "4px solid green"
        },
        // hover style
        "&:hover:not(.Mui-disabled):before": {
            borderBottom: "4px solid blue"
        },
        // focus style
        "&::after": {
            borderBottom: "4px solid red"
        },

        background: 'transparent',
        color: '#ffffff',
    },
    formLabel: {
        color: '#ffffff',
        '&.Mui-focused': {
            color: '#d90429'
        }
    },
}

const checkBoxStyles = theme => ({
    root: {
        '&$checked': {
            color: '#d90429',
        },
    },
    checked: {},
})



const INITIAL_VALUES = {
    email: "",
    password: ""
}

const NOTI_VALUES = {
    msg: '',
    err: ''
}

const CustomTextField = withStyles(styles)(props => {
    const { classes, ...other } = props;
    return <TextField InputProps={{ className: classes.underline }} InputLabelProps={{ className: classes.formLabel }} {...other} />;
});


const formData = new FormData()


const PageSignin = () => {
    const history = useHistory()
    const [values, setValues] = React.useState(INITIAL_VALUES)
    const [noti, setNoti] = React.useState(NOTI_VALUES)
    const [snackopen, setSnackopen] = React.useState(true)


    const classes = useStyles();
    const handleChange = (e) => {
        e.persist();
        setValues(previousValues => ({
            ...previousValues, [e.target.name]: e.target.value
        }))


    }

    const onClose = () => {
        setSnackopen(false)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        let email = values.email
        let password = values.password
        formData.set('email', email)
        formData.set('password', password)

        try {
            const cb = await axios({
                method: 'post',
                url: URL_USER_SIGNIN,
                data: formData,
                config: { headers: { 'Content-Type': 'multipart/form-data' } }
            })
            if (cb.data.err !== '') {
                setNoti({ err: cb.data.err })
            } else {
                localStorage.setItem('token', cb.data.token);
                setAuthToken(cb.data.token)
                setSnackopen(false)
                history.push('Page-list')
            }

        } catch (err) {
            setNoti({ err: err })
        }
    }

    const CustomCheckbox = withStyles(checkBoxStyles)(Checkbox);

    return (
        <Container component="main" maxWidth="xs">
            {
                noti.err ? (
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
                ) : ('')
            }
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOpenOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    UNLOCK YOUR ACCOUNT
                </Typography>
                <form className={classes.form} noValidate>
                    <CustomTextField
                        variant="outlined"
                        margin="normal"
                        onChange={handleChange}
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                    />
                    <CustomTextField
                        variant="outlined"
                        margin="normal"
                        onChange={handleChange}
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                    />

                    <FormControlLabel
                        control={<CustomCheckbox value="remember" color="primary" />}
                        label="Remember me"
                    />


                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        onClick={handleSubmit}
                        className={classes.submit}
                    >
                        SIGN IN
                     </Button>
                    <Grid container
                        direction="row"
                        justify="center"
                        alignitems="center">
                        <Grid item xs={6} >
                            <NavLink to={routes.SIGNUP} variant="body2" alignItems="center">
                                {"Don't have an account? SIGN UP"}
                            </NavLink>
                        </Grid>
                    </Grid>
                </form>
            </div>
        </Container>
    );
}

export default PageSignin;