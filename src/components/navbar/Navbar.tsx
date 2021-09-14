import React, {Component} from "react";
import AppBar from '@material-ui/core/AppBar';
import Home from "@material-ui/icons/Home";
import Group from "@material-ui/icons/Group";
import Work from "@material-ui/icons/Work";
import Forum from "@material-ui/icons/Forum";
import Notifications from "@material-ui/icons/Notifications";
import { Avatar } from "@material-ui/core";
import Search from "../search/Search";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import { withStyles } from '@material-ui/core/styles';
const styles = require("./Navbar.css");


class Navbar extends React.Component{
    
render(){
    return(
        <div className="header">
            <div className="header_left">
                <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"></img>
                <Search/>
            </div>
            <div className="header_middle">
                    <Box className="MenuIcon">
                        <Home className="icon" fontSize="large"/>
                        <p className="icon_text">Home</p>
                    </Box>
                    <Box className="MenuIcon" >
                        <Group className="icon" fontSize="large"/>
                        <p className="icon_text">My Network</p>
                    </Box>
                    <Box className="MenuIcon" >
                        <Work className="icon" fontSize="large"/>
                        <p className="icon_text">Jobs</p>
                    </Box>
                    <Box className="MenuIcon" >
                        <Forum className="icon" fontSize="large"/>
                        <p className="icon_text">Messaging</p>                  
                    </Box>
                    <Box className="MenuIcon" >
                        <Notifications className="icon"fontSize="large"/>
                        <p className="icon_text">Notifications</p>  
                    </Box>
                    <Box className="MenuIcon" >
                        <Avatar className="icon"/>
                        <p className="icon_text">My Profile</p>  
                    </Box>
            </div>
        </div>
    );
}
}

export default withStyles(styles)(Navbar);