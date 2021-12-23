import React from 'react'
import  {Grid,Card,  CardContent, CardActions, Typography, IconButton} from '@material-ui/core';
import { FiFacebook} from "react-icons/fi";
import useStyles from './styles';

const About = () => {
    const classes = useStyles();
    return (
        <main className={classes.content} >
            <div className={classes.toolbar} />

                <Grid container justify="center" style={{marginTop:"-180px"}}>
                    <Grid  justify="center" item xs={12} sm={8} md={8} lg={8}  >
                    </Grid>
                    <Grid  justify="center" item xs={12} sm={4} md={4} lg={4}  >
                            <Typography variant="h6"> 
                                <img  className={classes.image} src="/first.png" alt="secess progress" />
                            </Typography>  
                    </Grid>
                </Grid>
                
                <Grid container justify="center" spacing={3} >
                    <Grid className={classes.grid} justify="center" item xs={12} sm={12} md={5} lg={5}  >
                        <Typography variant="h6"> 
                            <img  className={classes.image} src="/about.png" alt="secess progress" />
                        </Typography>  
                    </Grid>
                    <Grid className={classes.grid} justify="center" item xs={12} sm={12} md={5} lg={5}  >
                        <Typography variant="h6" color="textSecondary" style={{fontFamily:"sans-serif" , textAlign:"center"}}> 

                            <Typography variant="h4"  style={{color:"black"}}> One Of The best online Store </Typography><br/>
                                Over a decade ago, we started a store to sell snowboards online. 
                                None of the ecommerce solutions at the time gave us the control 
                                we needed to be successful-so we built our own. Today, businesses 
                                of all sizes use online Stors , whether they’re selling online,
                                in retail stores, or on-the-go.
                            </Typography>  
                    </Grid>
                    <Grid className={classes.mission} justify="center" item xs={12} sm={12} md={10} lg={8} >
                        <Typography variant="body2" style={{fontWeight:"bold", marginBottom:"-15px"}}> OUR MISSION </Typography><br />
                        <Typography variant="h4">Making commerce better for everyone</Typography><br />
                        <Typography color="textSecondary" variant="h6"> We help people achieve independence by making it easier to start, run, and grow a business. We believe the future of commerce has more voices, not fewer, so we’re reducing the barriers to business ownership to make commerce better for everyone.</Typography> 
                    </Grid>
                </Grid>

                <Grid container justify="center" spacing={3} style={{marginTop:"50px"}}>       
                    <Grid className={classes.grid} justify="center" item xs={12} sm={12} md={5} lg={5} >
                        <Typography variant="h6" color="textSecondary" style={{fontFamily:"sans-serif" , textAlign:"center"}}> 
                        <Typography variant="body2" style={{fontWeight:"bold", marginBottom:"-15px", color:"black"}}> OUR PEOPLE </Typography><br />
                        <Typography variant="h4"  style={{color:"black"}}> Creating a community for impact </Typography><br/>
                            Avrnikh has grown from 5 people in a coffee shop to over 300 across the globe. With over 1,000 businesses powered by Avrnikh , we care deeply about the work we do. We’re constant learners who thrive on change and seek to have an impact in everything we do.
                        </Typography>  
                    </Grid>
                    <Grid  className={classes.grid} justify="center" item xs={12} sm={12} md={5} lg={5} >
                        <Typography variant="h6"> 
                            <img  className={classes.image} src="/about.png" alt="secess progress" />
                        </Typography>  
                    </Grid> 
                </Grid>

                <Grid container justify="center" spacing={3} style={{marginTop:"50px",textAlign:"center"}}>
                    <Grid justify="center" item xs={12} sm={12} md={3} lg={3} >
                        <Card >
                            <img  src="/imad.png" className={classes.image} alt=" imad iziki"/>
                            <CardContent>
                                <div className={classes.cardContent} >
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Iziki Imad
                                    </Typography>
                                        <CardActions disableSpacing >
                                        <a href="https://www.facebook.com/avrnikhAlaxa/" style={{textDecoration:"none"}}>
                                            <IconButton aria-label="Add to Cart"  >
                                                <FiFacebook />
                                            </IconButton>
                                        </a>
                                        </CardActions>
                                </div>
                                <Typography  variant="p" color="textSecondary" >
                                    
                                    fondateur de l’Agence web Avrnikh , Iziki dirige les projets clients. Avec lui, tout se fait en douceur, avec compréhension pour que vous puissiez maitriser totalement vos projets.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid justify="center" item xs={12} sm={12} md={3} lg={3} >
                        <Card >
                            <img  src="/yassine.jpeg" className={classes.image} alt="yassine iziki"/>
                            <CardContent>
                                <div className={classes.cardContent} >
                                    <Typography gutterBottom variant="h5" component="h2">
                                         Iziki Yassine
                                    </Typography>
                                        <CardActions disableSpacing >

                                        <a href="https://www.facebook.com/avrnikhAlaxa/"style={{textDecoration:"none"}}>
                                            <IconButton aria-label="Add to Cart"  >
                                                <FiFacebook />
                                            </IconButton>
                                        </a>

                                        </CardActions>
                                </div>
                                <Typography  variant="p" color="textSecondary" >
                                Profond Geek et grand fan de toutes les nouvelles technologies, j’aime trouver de nouvelles solutions élégantes pour optimiser les développements web!
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid justify="center" item xs={12} sm={12} md={3} lg={3} >
                        <Card >
                            <img  src="/najib.png" className={classes.image} alt="najib iziki"/>
                            <CardContent>
                                <div className={classes.cardContent} >
                                    <Typography gutterBottom variant="h5" component="h2">
                                         Iziki Najib
                                    </Typography>
                                        <CardActions disableSpacing >
                                            <a href="https://www.facebook.com/avrnikhAlaxa/" style={{textDecoration:"none"}}>
                                                <IconButton aria-label="Add to Cart"  >   
                                                <FiFacebook />
                                                </IconButton>
                                            </a>
                                        </CardActions>
                                </div>
                                <Typography  variant="p" color="textSecondary"  >
                                Toujours à l’écoute et prêt à vous conseiller, je suis votre point de contact quotidien sur votre projet digital. N’hésitez pas, je suis là pour vous.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
        </main>
    )
}

export default About
