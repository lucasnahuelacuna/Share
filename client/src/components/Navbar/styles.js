import { makeStyles } from '@material-ui/core/styles';
import { deepPurple } from '@material-ui/core/colors';

export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 50px',
  },
  heading: {
    color: '#555',
    textDecoration: 'none',
    [theme.breakpoints.down('xs')]: {
      fontSize: '24px'
    },
  },
  image: {
    marginLeft: '15px',
    [theme.breakpoints.down('xs')]: {
      height: '30px'
    },
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: '400px',
  },
  profile: {
    display: 'flex',
    [theme.breakpoints.down('xs')]: {
      display: 'block',
      with: 'auto'
    },
  },
  userName: {
    display: 'flex',
    alignItems: 'center',
    margin: '0 50px',
    [theme.breakpoints.down('md')]: {
      margin: '0 40px',
    },
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  brandContainer: {
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none'
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
    [theme.breakpoints.down('sm')]: {
      marginRight: '50px',
    },
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
  },
  logout: {
    [theme.breakpoints.down('xs')]: {
      fontSize: '12px'
    },
  },
  signin: {
    [theme.breakpoints.down('xs')]: {
      fontSize: '12px',
      whiteSpace: 'nowrap'
    },
  }
}));