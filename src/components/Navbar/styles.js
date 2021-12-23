import { makeStyles} from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  appBar: {
    backgroundColor:"rgba(0,0,0,0.9)",
    borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
    
  },
  title: {
    flexGrow: 1,
    alignItems: 'center',
    display: 'flex',
    textDecoration: 'none',
  },
  image: {
    marginRight: '10px',
  },

  grow: {
    flexGrow: 8,
    border:"1px solid white"
  },

  button : {
    color:"white",
    '&:hover': {  
      borderRadius:"10px",
      color:"green"
    }
  }
}));