import React, { Component } from 'react';


export class Post extends Component {
    render() {
        return (
            <div className="Post">
                <p>Date:{this.props.date}</p>
                <p>Title: {this.props.title}</p>
                <p>Author: {this.props.author}</p>
                <p>Text: {this.props.text}</p>
            </div>
        )
    }
}