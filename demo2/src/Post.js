import React, { Component } from 'react' //rec
import "./Post.css"
export class Post extends Component {
    render() {
        return (
            <div className ="post">
                <p><strong>{this.props.userId}</strong>{this.props.message}</p>
                <p>Comment</p>
                <p>{this.props.children}</p>
            </div>
        )
    }
}

export default Post
