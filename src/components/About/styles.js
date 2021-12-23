import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme)=>({
    grid : {
        marginTop:"-15px",
        justiy:"center",
        marginRight:"10px",
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        borderRadius:"5px",
    },
    image: {
        width:"100%",
        height:"100%",
    },
    image2 : {
        width:"100%",
        height:"75%",
    },
    mission :{
        textAlign:"center",
        
    },
    cardContent :{
        display :'flex',
        justifyContent: 'space-between'
    }

}))