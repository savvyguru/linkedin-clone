import React, {Component} from "react";
import Navbar from "../navbar/Navbar";
import Post from "../post/Post";
const styles = require("./Newsfeed.css")

export default class Newsfeed extends React.Component{
    
render(){
    return(
        <div>
            <Navbar/>
            <div className="feed">
                <Post name ="Richard Pung" title="Grab Software Engineer" description="Greetings !!

I am excited to share with all of you that I have joined Grab as Senior Software Engineer !

I would like to thank Nidhi Banga for the support throughout the recruiting process ! 

Getting the new job wouldn’t have been possible without the constant support and motivation provided by my wife, Bhagyashree Khedkar, who really had to suffer a lot through my long study sessions, family back in India and friends !!

I am looking forward to use all my past experience, learn from and work with intelligent grabbers to drive Southeast Asia forward !! #softwareengineer #newbeginning #grabber" displayPicture="../../static/myimage.jpeg"/>
                <Post name ="Richard Pung" title="Grab Software Engineer" description="I am happy to annouce that i got into grab" displayPicture="../../static/myimage.jpeg"/>
            </div>
        </div>
    );
}
}
