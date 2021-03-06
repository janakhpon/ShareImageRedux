import React, { useState } from 'react'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux'
import { addList } from '../../actions/dataActions'
import './index.css'
const formData = new FormData()


const useStyles = makeStyles(theme => ({
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
    },
}));



const INITIAL_STATE = {
    description: "",
    image: null
}


const NOTI_VALUES = {
    msg: '',
    err: ''
}


const PageListUpload = (props) => {
    console.log(props.posts)
    const [values, setValues] = useState(INITIAL_STATE)
    const [noti, setNoti] = React.useState(NOTI_VALUES)
    const [open, setOpen] = React.useState(false)
    const classes = useStyles()
    const history = useHistory()
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

        try {
            props.addList(formData)

        } catch (err) {
            setNoti({ err: err })
        }

    }

    return (
        <>
            {
                noti.err ? (
                    <Backdrop
                        className={classes.backdrop}
                        open={open}
                        onClick={() => {
                            setOpen(false);
                        }}
                    >
                        <CircularProgress color="inherit" />
                    </Backdrop>
                ) : (
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
                    )
            }
        </>
    );



}

const mapStateToProps = state => ({
    posts: state.posts
});

export default connect(mapStateToProps, { addList })(PageListUpload)