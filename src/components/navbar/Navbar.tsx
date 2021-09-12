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

export default class Navbar extends React.Component{
    
render(){
    return(
        <div>
            <AppBar position="static" background-color="#FFFFFF">
                <Box display="flex" flexDirection="row" justifyContent="space-around">
                    <Search/>
                    <Box display="flex" flexDirection="row" justifyContent="center" >
                        <Box display="flex" flexDirection="column" >
                            <Home fontSize="large" color="action"/>
                            <div>Home</div>
                        </Box>
                        <Box display="flex" flexDirection="column" alignItems="center" >
                            <Group fontSize="large" color="action"/>
                            My Network
                        </Box>
                        <Box display="flex" flexDirection="column" alignItems="center" >
                            <Work fontSize="large" color="action"/>
                            Jobs
                        </Box>
                        <Box display="flex" flexDirection="column" alignItems="center" >
                            <Forum fontSize="large" color="action"/>
                            Messaging
                        </Box>
                        <Box display="flex" flexDirection="column" alignItems="center" >
                            <Notifications fontSize="large" color="action"/>
                            Notifications
                        </Box>
                        <Avatar color="action"/>
                    </Box>
                    
                </Box>
            </AppBar>
        </div>
    );
}
}