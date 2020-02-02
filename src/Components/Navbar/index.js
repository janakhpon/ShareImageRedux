import React from 'react'
import { fade, makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Badge from '@material-ui/core/Badge'
import MenuItem from '@material-ui/core/MenuItem'
import Menu from '@material-ui/core/Menu'
import AccountCircle from '@material-ui/icons/AccountCircle'
import NotificationsIcon from '@material-ui/icons/Notifications'
import MoreIcon from '@material-ui/icons/MoreVert'
import LockIcon from '@material-ui/icons/Lock'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import { Link, useHistory } from 'react-router-dom'
import styled from 'styled-components'
import * as routes from '../../Routes'

const useStyles = makeStyles(theme => ({
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        display: 'none',
        fontSize: '95%',
        padding: theme.spacing(1, 0, 1, 0),
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
    },
    searchIcon: {
        width: theme.spacing(7),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignitems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 7),
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: 200,
        },
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
    button: {
        margin: theme.spacing(1),
        color: "#d90429",
    },
    btn: {
        color: '#ffffff',
    },
    name: {
        margin: theme.spacing(1),
        color: '#011627',
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

const NavLink = styled(Link)`
    text-decoration: none;
    text-align: center;
    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function PageNav({ user, noti, count }) {

    const { username, position, email } = user
    const { err } = noti
    const { notilength } = count
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const history = useHistory()
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleProfileMenuOpen = event => {
        setAnchorEl(event.currentTarget);
    }

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    }

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    }

    const handleMobileMenuOpen = event => {
        setMobileMoreAnchorEl(event.currentTarget);
    }

    const lockMeOut = (e) => {
        localStorage.clear();
        history.push('/Page-signin')
    }

    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={menuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={handleMenuClose}>
                <NavLink to={routes.SIGNUP}>
                    REGISTER
            </NavLink>
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
                <NavLink to={routes.SIGNIN}>
                    LOGIN
            </NavLink>
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
                <Button
                    color="secondary"
                    size="small"
                    className={classes.button}
                    startIcon={<LockIcon />}
                    onClick={lockMeOut}
                >
                    RESET
        </Button>
            </MenuItem>
        </Menu>
    );


    const menuAuthedId = 'primary-search-account-menu';
    const renderMenuAuthed = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={menuAuthedId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={handleMenuClose}>
                <NavLink to={routes.LIST}>
                    <Button
                        color="secondary"
                        className={classes.name}
                    >
                        PAGE LIST
                    </Button>
                </NavLink>
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
                <Button
                    color="secondary"
                    className={classes.name}
                    onClick={handleClickOpen}
                >
                    {username}
                </Button>
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
                <Button
                    color="secondary"
                    size="small"
                    className={classes.button}
                    startIcon={<LockIcon />}
                    onClick={lockMeOut}
                >
                    RESET
            </Button>
            </MenuItem>
        </Menu>
    );


    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >

            <MenuItem onClick={handleMenuClose}>
                <NavLink to={routes.SIGNUP}>
                    REGISTER
    </NavLink>
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
                <NavLink to={routes.SIGNIN}>
                    LOGIN
    </NavLink>
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
                <Button
                    color="secondary"
                    size="small"
                    className={classes.button}
                    startIcon={<LockIcon />}
                    onClick={lockMeOut}
                >
                    SIGNOUT
        </Button>
            </MenuItem>
        </Menu>
    );

    const mobileMenuAuthedId = 'primary-search-account-menu-mobile';
    const renderMobileMenuAuthed = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={mobileMenuAuthedId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem>
                <IconButton aria-label={`${notilength} new notifications`} color="inherit">
                    <Badge badgeContent={notilength} color="primary">
                        <NotificationsIcon />
                    </Badge>
                </IconButton>
                <p>Notifications</p>
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
                <NavLink to={routes.LIST}>
                    <Button
                        color="secondary"
                        className={classes.name}
                    >
                        PAGE LIST
                    </Button>
                </NavLink>
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
                <Button
                    color="secondary"
                    className={classes.name}
                    onClick={handleClickOpen}
                >
                    {username}
                </Button>
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
                <Button
                    color="secondary"
                    size="small"
                    className={classes.button}
                    startIcon={<LockIcon />}
                    onClick={lockMeOut}
                >
                    SIGNOUT
            </Button>
            </MenuItem>
        </Menu>
    );

    return (
        <div className={classes.grow}>
            {
                err ? (
                    <AppBar position="static" style={{ background: 'transparent', boxShadow: 'none' }}>
                        <Toolbar>
                            <div className={classes.grow} />
                            <div className={classes.sectionDesktop}>
                                <IconButton
                                    edge="end"
                                    aria-label="account of current user"
                                    aria-controls={menuId}
                                    aria-haspopup="true"
                                    onClick={handleProfileMenuOpen}
                                    color="inherit"
                                >
                                    <AccountCircle />
                                </IconButton>
                            </div>
                            <div className={classes.sectionMobile}>
                                <IconButton
                                    aria-label="show more"
                                    aria-controls={mobileMenuId}
                                    aria-haspopup="true"
                                    onClick={handleMobileMenuOpen}
                                    color="inherit"
                                >
                                    <MoreIcon />
                                </IconButton>
                            </div>
                        </Toolbar>
                    </AppBar>
                ) :
                    (
                        <AppBar position="static" style={{ background: 'transparent', boxShadow: 'none' }}>
                            <Toolbar>
                                <div className={classes.grow} />
                                <div className={classes.sectionDesktop}>
                                    <IconButton aria-label={`${notilength} new notifications`} color="inherit">
                                        <Badge badgeContent={notilength} color="primary">
                                            <NotificationsIcon />
                                        </Badge>
                                    </IconButton>
                                    <IconButton
                                        edge="end"
                                        aria-label="account of current user"
                                        aria-controls={menuId}
                                        aria-haspopup="true"
                                        onClick={handleProfileMenuOpen}
                                        color="inherit"
                                    >
                                        <AccountCircle />
                                    </IconButton>
                                </div>
                                <div className={classes.sectionMobile}>
                                    <IconButton
                                        aria-label="show more"
                                        aria-controls={mobileMenuId}
                                        aria-haspopup="true"
                                        onClick={handleMobileMenuOpen}
                                        color="inherit"
                                    >
                                        <MoreIcon />
                                    </IconButton>
                                </div>
                            </Toolbar>
                        </AppBar>
                    )
            }}
            {
                err ? (
                    renderMobileMenu
                ) :
                    (
                        renderMobileMenuAuthed
                    )
            }
            {
                err ? (
                    renderMenu
                ) :
                    (
                        renderMenuAuthed
                    )
            }
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
                PaperProps={{
                    classes: {
                        root: classes.Dialog
                    }
                }}
            >
                <DialogTitle id="alert-dialog-slide-title">{username}</DialogTitle>
                <DialogContent className={classes.Dialogcontent}>
                    <DialogContentText id="alert-dialog-slide-description" className={classes.Dialogcontent}>
                        {username} is a {position} at Technological University of Mawlamyine. You can get in touch with this {position} via {email} .
              </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary" className={classes.btn}>
                        OK
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
