import React from 'react'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import axios from 'axios'
import { URL_LIST } from '../../Requests'
import './index.css'
const formData = new FormData()


class PageListUpload extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            description: '',
            image: null
        }
    }

    handleDescription = (e) => {
        e.preventDefault();
        this.setState({
            description: e.target.value
        });
        formData.set('description', e.target.value);
    }


    handleImage = (e) => {
        this.setState({
            image: e.target.files
        });

        formData.append('image', e.target.files[0]);
    }

    handleSubmit = async (e) => {
        e.preventDefault();

        try {
            let response = await axios({
                method: 'post',
                url: URL_LIST,
                data: formData,
                config: { headers: { 'Content-Type': 'multipart/form-data' } }
            })

            console.log(response)
        } catch (err) {
            console.log(err)
        }


    }




    render() {
        return (
            <>
                <Grid container direction="row" justify="center" alignitems="center" spacing={2}>
                    <Grid item xs={12} className="grid">
                        <Paper className='paper'>
                            <input type="text" id="description" name="description" className="form-control" onChange={this.handleDescription} />
                        </Paper>
                    </Grid>

                    <Grid item xs={12} className="grid">
                        <Paper className='paper' >
                            <input type="file" className="form-control-file" id="image" name="image" ref={this.image} onChange={this.handleImage} />
                        </Paper>
                    </Grid>

                    <Grid item xs={12} className="grid">
                        <Paper className='paper'>
                            <input type="submit" value="upload to Gallery" className="btn btn-primary py-2 px-4 text-white" onClick={this.handleSubmit} />
                        </Paper>
                    </Grid>
                </Grid>

            </>
        );
    }


}

export default PageListUpload