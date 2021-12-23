import React ,{ useState, useEffect } from 'react';
import { AppBar, Toolbar, IconButton, Badge,  Typography } from '@material-ui/core';
import { FiShoppingCart } from "react-icons/fi";
import { Link, useLocation } from 'react-router-dom';

import logo from '../../assets/avrnikh.png';
import useStyles from './styles';
import { AiOutlineHome} from "react-icons/ai";
import { FiHelpCircle} from "react-icons/fi";

const PrimarySearchAppBar = ({ totalItems }) => {
  const classes = useStyles();
  const location = useLocation();

  const [isMobile, setIsMobile] = useState(false)
 
    const handleResize = () => {
      if (window.innerWidth < 720) {
          setIsMobile(true)
      } else {
          setIsMobile(false)
      }
    }

    useEffect(() => {
      window.addEventListener("resize", handleResize)
    })

  return (
    <>
      <AppBar position="fixed" className={classes.appBar} color="inherit">
        <Toolbar>
          <Typography component={Link} to="/" variant="h6" className={classes.title} color="inherit">
            <img src={logo} alt="commerce.js" height="55px" className={classes.image} />
          </Typography>
          {location.pathname === '/' 
            ? (
                <div className={classes.button} style={{color:"orange"}}>
                  <IconButton component={Link} to="/" color="inherit"  >
                      <AiOutlineHome /> { !isMobile && (<Typography variant="h6" style={{paddingLeft:"5px", paddingTop:"2px"}}> Home</Typography>)} 
                  </IconButton>
                </div>
            ) 
            :(
              <div className={classes.button} >
                  <IconButton component={Link} to="/" color="inherit"  >
                      <AiOutlineHome /> { !isMobile && (<Typography variant="h6" style={{paddingLeft:"5px", paddingTop:"2px"}}> Home</Typography> )} 
                  </IconButton>
                </div>
            ) }
            
          { location.pathname === "/about"
          ? (
            <div className={classes.button} style={{color:"orange"}}>
            <IconButton component={Link} to="/about"  color="inherit">
                <FiHelpCircle />{ !isMobile && ( <Typography variant="h6" color="inherit" style={{paddingLeft:"5px", paddingTop:"2px"}}>About Us</Typography> )}
            </IconButton>
          </div>
          )
          :(
            <div className={classes.button}>
            <IconButton component={Link} to="/about"  color="inherit">
                <FiHelpCircle />{ !isMobile && ( <Typography variant="h6" color="inherit" style={{paddingLeft:"5px", paddingTop:"2px"}}>About Us</Typography> )}
            </IconButton>
          </div>
          )
          }
          <div className={classes.grow} />
          { location.pathname === '/' ? (
          <div className={classes.button}>
            <IconButton component={Link} to="/cart" color="inherit">
              <Badge badgeContent={totalItems} color="secondary">
               { !isMobile && ( <Typography variant="h6" color="inherit"  style={{paddingLeft:"5px", paddingBottom:"2px"}}>Cart</Typography>)}
                <FiShoppingCart /> 
              </Badge>
            </IconButton>
          </div>
          ):location.pathname === '/about' && (
            <div className={classes.button}>
              <IconButton component={Link} to="/cart" color="inherit">
                <Badge badgeContent={totalItems} color="secondary">
                  { !isMobile && (<Typography variant="h6" color="inherit"  style={{paddingLeft:"5px", paddingBottom:"2px"}}>Cart</Typography>)}
                  <FiShoppingCart /> 
                </Badge>
              </IconButton>
            </div>
            )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default PrimarySearchAppBar;
