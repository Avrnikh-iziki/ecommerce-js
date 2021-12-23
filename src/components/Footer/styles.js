import { makeStyles } from '@material-ui/core/styles';
export default makeStyles((theme) => ({
  opaci : {
    backgroundColor:"rgba(0,0,0,0.6)"
  },
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '20vh',
    backgroundImage:"url(/mara.jpg)",
    backgroundPosition:"center" ,
    backgroundSize: "cover",
    marginTop:"20px",
    '&:hover': {
      backgroundImage:"url(/mark.jpg)",
      backgroundPosition:"center 40%" ,
      backgroundSize: "cover",
    },

  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
    
  },
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: 'auto',
    backgroundColor:"orange",
    color:'white',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    marginTop:"40px",
  },
  logo: {
    backgroundColor:"transparent",
    textAlign:"center"
    

  },
  fac: {
    width:"20px",
    height:"20px",
   
  },
  btn_container: {
    fontFamily:"-moz-initial",
    marginTop:"2px",
    color:"white" ,
    border:"2px solid rgb(255,0,0)",
    height:"40px",
    width:"200px",
    borderRadius:"10px",
    display:"flex",
    flexDirection:"row" , 
    justifyItems:"center",
     alignItems:"center",
     backgroundColor:"rgba(0,0,0,0.5)",
     '&:hover': {
      backgroundColor:"red",
      transform:"scale(0.9)",
    },
  },
  sub_btn_container : {
    padding:"5px",
    display:"flex", 
    flexDirection:"row" ,
    justifyItems:"center",
    alignItems:"center",
  },
  lo : {
    border:"2px solid white",
    width:"30px",
    height:"30px", 
    display:"flex",
    justifyItems:"center",
    alignItems:"center",
    borderRadius:"50%",
  },
  name : {
  padding:"5px",
  fontSize:"20px",
  marginLeft:"10px" ,
  paddingLeft:"2px",
  width:"150px",
  textAlign:"center",

  },
  cont : {
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
    flexDirection:"column",
  }
  
}));