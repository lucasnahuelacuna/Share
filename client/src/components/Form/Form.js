import React, { useState, useEffect } from 'react'
import useStyles from './styles'
import { TextField, Button, Typography, Paper } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import { createPost, updatePost } from '../../actions/posts'
import { useHistory } from 'react-router-dom'
import { storage } from '../../firebase'

const Form = ({ currentId, setCurrentId }) => {
    const [postData, setPostData] = useState({
        title: '',
        message: '',
        tags: '',
        selectedFile: ''
    })
    const [image, setImage] = useState(null)
    const [submit, setSubmit] = useState(false)
    const post = useSelector(state => currentId ? state.posts.posts.find(p => p._id === currentId) : null)
    const dispatch = useDispatch()
    const history = useHistory()
    const classes = useStyles()
    const user = JSON.parse(localStorage.getItem('profile'))

    useEffect(() => {
        if(post) setPostData(post)
    },[post])

    useEffect(() => {
        if(postData.title && postData.message && postData.tags) {
            if(currentId) {
                dispatch(updatePost(currentId, {...postData, name: user?.result?.name }))
            } else {
                dispatch(createPost({...postData, name: user?.result?.name }, history))
            }
            clear()
        }
    }, [submit])

    const handleSubmit = (e) => {
        e.preventDefault()

        if(image) {
            const uploadTask = storage.ref(`images/${user?.result?._id}/${image.name}`).put(image)
            uploadTask.on(
                "state_changed", 
                snapshot => {}, 
                error => console.log(error),
                async () => {
                    const url = await storage.ref(`images/${user?.result?._id}`)
                        .child(image.name)
                        .getDownloadURL()
                    setPostData({ ...postData, selectedFile: url })
                    setSubmit(true)
                }
            )
        } else {
            setSubmit(true)
        }
    }

    const handleChange = (e) => {
        if(e.target.files[0]) {
            setImage(e.target.files[0])
        }
    }

    const clear = () => {
        setCurrentId(null)
        setPostData({
            title: '',
            message: '',
            tags: '',
            selectedFile: ''
        })
    }

    if(!user?.result?.name) {
        return (
            <Paper className={classes.paper}>
                <Typography variant="h6" align="center">
                    Please Sign In to create your own post or like other posts.
                </Typography>
            </Paper>
        )
    }

    return (
        <Paper className={classes.paper} elevation={6}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant="h6">{currentId ? "Editing" : "Sharing"} a Memory</Typography>
                <TextField 
                    name="title" 
                    variant="outlined" 
                    label="Title" 
                    fullWidth
                    value={postData.title}
                    onChange={(e) => setPostData({ ...postData, title: e.target.value})} 
                />
                <TextField 
                    name="message" 
                    variant="outlined" 
                    label="Message" 
                    fullWidth
                    value={postData.message}
                    onChange={(e) => setPostData({ ...postData, message: e.target.value})} 
                />
                <TextField 
                    name="tags" 
                    variant="outlined" 
                    label="Tags (coma separated)" 
                    fullWidth
                    value={postData.tags}
                    onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',')})} 
                />
                <div className={classes.fileInput}>
                    <input type="file" onChange={handleChange} />
                </div>
                <Button 
                    className={classes.buttonSubmit} 
                    variant="contained"
                    color="primary"
                    size="large"
                    type="submit"
                    fullWidth
                >   
                    Submit
                </Button>
                <Button 
                    variant="contained"
                    color="secondary"
                    size="small"
                    onClick={clear}
                    fullWidth
                >   
                    Clear
                </Button>
            </form>
        </Paper>
    )
}

export default Form