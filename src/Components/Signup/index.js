import React from 'react'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import * as routes from '../../Routes'
import Grid from '@material-ui/core/Grid'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import { amber, green } from '@material-ui/core/colors'
import FormControl from '@material-ui/core/FormControl'
import NativeSelect from '@material-ui/core/NativeSelect'
import InputLabel from '@material-ui/core/InputLabel'
import { useHistory } from 'react-router-dom'
import { withStyles } from "@material-ui/styles"
import axios from 'axios'
import { URL_USER_SIGNUP } from '../../Requests'
import CloseIcon from '@material-ui/icons/Close'
import SnackbarContent from '@material-ui/core/SnackbarContent'
import Snackbar from '@material-ui/core/Snackbar'
import IconButton from '@material-ui/core/IconButton'
import { connect } from 'react-redux'
import { userSignup, getCurrentUser } from '../../actions/userActions'

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




const INITIAL_VALUES = {
    name: "",
    email: "",
    phone: "",
    password: "",
    position: ""
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


const PageSignup = (props) => {
    console.log(props.users.user)
    console.log(props.errors)
    const history = useHistory()
    const [values, setValues] = React.useState(INITIAL_VALUES)
    const [noti, setNoti] = React.useState(NOTI_VALUES)
    const [open, setOpen] = React.useState(true)
    const [select, setSelect] = React.useState('')
    const classes = useStyles()
    const handleChange = (e) => {
        e.persist()
        setValues(previousValues => ({
            ...previousValues, [e.target.name]: e.target.value
        }))
    }

    const onClose = () => {
        setOpen(false)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        let name = values.name
        let email = values.email
        let phone = values.phone
        let password = values.password
        let position = select
        formData.set('username', name)
        formData.set('email', email)
        formData.set('phone', phone)
        formData.set('password', password)
        formData.set('position', position)

        let dbb = await props.userSignup(formData)
        console.log(dbb)
        
    }

    const handleSelectChange = event => {
        setSelect(event.target.value)
    }

    return (
        <Container component="main" maxWidth="xs">
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
                ) : ('')
            }
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    CREATE AN ACCOUNT
                </Typography>
                <form className={classes.form} noValidate>
                    <CustomTextField
                        variant="outlined"
                        margin="normal"
                        onChange={handleChange}
                        required
                        fullWidth
                        id="name"
                        label="Your name"
                        name="name"
                        autoComplete="name"
                        autoFocus

                    />
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
                        id="phone"
                        label="Phone number"
                        name="phone"
                        autoComplete="name"
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
                    <FormControl className={classes.margin} fullWidth>
                        <InputLabel className={classes.select} htmlFor="demo-customized-select-native">Your Position</InputLabel>
                        <NativeSelect
                            id="demo-customized-select-native"
                            value={select}
                            onChange={handleSelectChange}
                            className={classes.select}
                        >
                            <option value="none" />
                            <option value={"Student"}>Student</option>
                            <option value={"Teacher"}>Teacher</option>
                        </NativeSelect>
                    </FormControl>

                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        onClick={handleSubmit}
                        className={classes.submit}
                    >
                        SIGN UP
                     </Button>
                    <Grid container
                        direction="row"
                        justify="center"
                        alignitems="center">
                        <Grid item xs={6} >
                            <NavLink to={routes.SIGNIN} variant="body2">
                                {"Already have an account? Sign In"}
                            </NavLink>
                        </Grid>
                    </Grid>
                </form>
            </div>
        </Container>
    );
}

const mapStateToProps = state => ({
    users: state.users,
    errors: state.errors
});


export default connect(mapStateToProps, { userSignup })(PageSignup)