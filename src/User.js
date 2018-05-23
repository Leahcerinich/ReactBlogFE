import React, { Component } from 'react';


export class User extends Component {
    render() {
        return (
            <div className="User">
                <p>Author:{this.props.author}</p>
                <p>Date: {this.props.date}</p>
                <p>Title: {this.props.title}</p>
                <p>Text: {this.props.text}</p>
            </div>
        )
    }
}




