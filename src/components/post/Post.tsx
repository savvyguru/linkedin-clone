import React, {Component} from "react";
import displayPicture from "../../static/myimage.jpeg"
import attachments from "../../static/grab.jpeg"
const styles = require("./Post.css")

interface postProps{
    name: String;
    title: String;
    displayPicture?: String;
    description: String;
    postPicture?: Array<String>;
    likesCount?: Number;
    Comments?: Array<String>;
}


export default class Post extends React.Component<postProps>{

render(){
    return(
        <React.Fragment>
        <div className="post">
            <div className="profile_descriptor">
                <img className="profilepic" src={displayPicture}/> 
                <div className="title_header">    
                    <p className="name">{this.props.name}</p>
                    <p className="title">{this.props.title}</p>
                </div>
            </div>
            <p className="description">{this.props.description}</p>
            <img/>
            <img className="attachments" src={attachments}/>
        </div>
        </React.Fragment>
    );
}
}