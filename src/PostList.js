import React, { Component } from 'react';
import { Post } from './Post';

export class PostList extends Component {

    render() {
        const posts = this.props.posts.map(u => <Post date={u.Date} title={u.Title} author={u.Author} text={u.Text} />)

        return (
            <div className="Post-List">
            <p> This is the current blog posts with {this.props.posts.length} </p>
            {posts}
        </div>
        )
    }
}