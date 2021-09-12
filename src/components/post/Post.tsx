import React, {Component} from "react";
import Card from "@material-ui/core/Card";
import ImageList from "@material-ui/core/ImageList";

interface postProps{
    name: String;
    title: String;
    displayPicture: String;
    description: String;
    postPicture: Array<String>;
    likesCount: Number;
    Comments?: Array<String>;
}


export default class Post extends React.Component<postProps>{

render(){
    return(
        <div>
            <Card>

            </Card>
        </div>
    );
}
}