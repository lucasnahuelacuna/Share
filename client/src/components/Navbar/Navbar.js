import React from 'react'
import { Link } from 'react-router-dom'
import { AppBar, Avatar, Typography, Button, Toolbar } from '@material-ui/core'
import useStyles from './styles'
import ShareImage from '../../images/ShareImage.png'

const Navbar = () => {
    const classes = useStyles()
    const user = null

    return (
        <AppBar className={classes.appBar} position="static" color="inherit">
            <div className={classes.brandContainer}>
                <Typography component={Link} to="/" className={classes.heading} variant="h2" align="center">Share</Typography>
                <img className={classes.image} src={ShareImage} alt="Sharing" height="60" />
            </div>
            <Toolbar className={classes.toolbar}>
                {user ? (
                    <div className={classes.profile}>
                        <Avatar className={classes.purple} alt={user.result.name} src={user.result.imageUrl}>{user.result.name.charAt(0)}</Avatar>
                        <Typography className={classes.userName} variant="6">{user.result.name}</Typography>
                        <Button variant="contained" className={classes.logout} color="secondary">Logout</Button>
                    </div>
                ) : (
                    <Button component={Link} to="/auth" variant="contained" color="primary">Sign In</Button>
                )}
            </Toolbar>
        </AppBar>
    )
}

export default Navbar
