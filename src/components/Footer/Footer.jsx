import React from 'react';
import { CssBaseline,Container, Typography ,Grid } from '@material-ui/core';
import { FiShoppingCart } from "react-icons/fi";
import { FiFacebook} from "react-icons/fi";
import { FaWhatsapp} from "react-icons/fa";
import { AiOutlinePhone} from "react-icons/ai";
import { AiOutlineHome} from "react-icons/ai";
import { FiHelpCircle} from "react-icons/fi";

import logo from '../../assets/avrnikh.png';
import useStyles from './styles';

const Footer = () => {

  const classes = useStyles();
 const Copyright = () =>  {
    return (
      <Typography variant="body2"  style={{textAlign:"center",color:"white"}}>
        {'Copyright © '} 
        Avrnikh 
        { ' ' + new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

  return (
    <div className={classes.root}>
      <div className={classes.opaci}> 
      <CssBaseline />
      <main className={classes.content}> 
        <Grid container spacing={4} >
                <Grid item xs={12} sm={6} md={4} lg={3}  >
                
                </Grid>
                 <Grid item xs={12} sm={6} md={4} lg={3} >
                    <div  className={classes.logo}>
                        <img  style={{height:"200px"}} src={logo} alt="log"/>
                    </div> 
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3} >
                    <Typography variant="h3" color="secondary" gutterBottom style={{ borderBottom:"2px solid white ", textAlign:"center"}}>Our Pages</Typography>
                  
                    <div className={classes.cont}>
                      <a href="/" style={{textDecoration:"none"}}> 
                        <div className={classes.btn_container}  > 
                              <div className={classes.sub_btn_container}>
                              <div  ><AiOutlineHome className={classes.fac} style={{width:"30px", height:"30px" ,paddingTop:"6px"}} /></div>
                                  <div className={classes.name}> Home </div>
                              </div>
                        </div>
                      </a>
                      <a href="/about"  style={{textDecoration:"none"}}> 
                        <div className={classes.btn_container} > 
                              <div className={classes.sub_btn_container}>
                              <div  ><FiHelpCircle className={classes.fac} style={{width:"30px", height:"30px" ,paddingTop:"6px"}} /></div>
                                  <div className={classes.name}> About Us </div>
                              </div>
                        </div>
                      </a>
                      <a href="/cart" style={{textDecoration:"none"}}>
                        <div  className={classes.btn_container} > 
                              <div className={classes.sub_btn_container}>
                              <div  ><FiShoppingCart className={classes.fac} style={{width:"30px", height:"30px" ,paddingTop:"6px"}} /></div>
                                  <div className={classes.name}> Cart </div>
                              </div>
                        </div>
                      </a>
                      
                    </div> 
                   
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3} >
                    <Typography variant="h3" color="secondary" gutterBottom style={{ borderBottom:"2px solid white " ,textAlign:"center"}} >Contact Us</Typography>
                    <div className={classes.cont}>
                      <a href="/" style={{textDecoration:"none"}}> 
                        <div className={classes.btn_container} > 
                              <div className={classes.sub_btn_container}>
                                  <div  ><FiFacebook className={classes.fac} style={{width:"30px", height:"30px" ,paddingTop:"6px"}} /></div>
                                  <div className={classes.name}>Imad IZIKI </div>
                              </div>
                        </div>
                      </a>
                        <div className={classes.btn_container}>
                            <div className={classes.sub_btn_container}>
                                <div  ><FaWhatsapp className={classes.fac} style={{width:"30px", height:"30px" ,paddingTop:"2px"}}/></div>
                                <div className={classes.name}>+212 641493139 </div>
                            </div>
                        </div>
                        <div className={classes.btn_container}>
                            <div className={classes.sub_btn_container}>
                                <div  ><AiOutlinePhone className={classes.fac}  style={{width:"30px", height:"30px" ,paddingTop:"2px"}} /></div>
                                <div className={classes.name} >+212 641493139 </div>
                            </div>
                        </div>
                       
                    </div> 
                </Grid>
        </Grid>
      </main>
      <br />
      <footer className={classes.footer}>
        <Container maxWidth="sm">
          <Copyright />
        </Container>
      </footer>
      </div>
    </div>
  );
};

export default Footer