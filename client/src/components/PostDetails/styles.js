import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  media: {
    borderRadius: '20px',
    objectFit: 'cover',
    width: '600px',
    height: '500px',
    display: 'block',
    margin: 'auto',
    [theme.breakpoints.down('md')]: {
      width: '500px',
      height: '400px',
    },
    [theme.breakpoints.down('sm')]: {
      width: '450px',
      height: '350px',
    },
    [theme.breakpoints.down('xs')]: {
      width: '100%',
      
    },
  },
  card: {
    display: 'flex',
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      flexWrap: 'wrap',
      flexDirection: 'column',
    },
  },
  section: {
    borderRadius: '20px',
    margin: '10px',
    flex: 1,
  },
  imageSection: {
    marginLeft: '20px',
    [theme.breakpoints.down('sm')]: {
      marginLeft: 0,
    },
  },
  recommendedPosts: {
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  recommendedPost: {
    margin: '20px',
    width: '250px',
    cursor: 'pointer',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '10px',
    [theme.breakpoints.down('xs')]: {
      width: '100%',
      margin: '5px auto',
      boxSizing: 'border-box'
    },
  },
  recommendedPostImage: {
    display: 'block',
    width: '225px',
    height: '132px',
    margin: 'auto',
    borderRadius: '5px',
    objectFit: 'cover'
  },
  recommendedPostMessage: {
    color: '#777',
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "-webkit-box",
    "-webkit-line-clamp": 2,
    "-webkit-box-orient": "vertical",
    height: '40px'
  },
  loadingPaper: {
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center', 
    padding: '20px', 
    borderRadius: '15px', 
    height: '39vh',
  },
  commentsOuterContainer: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  commentsInnerContainer: {
    height: '200px',
    overflowY: 'auto',
    marginRight: '30px'
  },
  commentsTitle: {
    [theme.breakpoints.down('xs')]: {
      fontSize: '12px'
    },
  },
}));