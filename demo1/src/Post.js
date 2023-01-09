import React, { Component } from 'react'

export default class Post extends Component {
    render() {
        return (
            <div>
                <p>Text  <b><i>: {this.props.content}</i></b></p>
                <p>Post by  <b><i>:{this.props.name}</i></b></p>
            </div>
        );
    }
}


