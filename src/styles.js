import { makeStyles } from '@material-ui/core/styles';
export default makeStyles((theme) => ({
  opaci : {
    backgroundColor:"rgba(0,0,0,0.6)",
    height:"600px"
  },
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '600px',
    backgroundImage:"url(/mara.jpg)",
    backgroundPosition:"center" ,
    backgroundSize: "cover",
    marginTop:"65px",
    '&:hover': {
      backgroundImage:"url(/mark.jpg)",
      backgroundPosition:"center 40%" ,
      backgroundSize: "cover",
    },
    justifyContent:"center",
    alignItems:"center",
  },
  title : {
    color:"white",
    textAlign:"center",
    marginTop:"100px",
    wordSpacing:"5px",
    letterSpacing:"2px",
    textTransform:"upperCase",
    fontFamily:"niew roman ",
    padding:"10px"
  },
  subtitle : {
    color :"orange",
    marginTop:"290px",
    paddingLeft:"10px",
    marginBottom:"30px"
  }
 
})); 