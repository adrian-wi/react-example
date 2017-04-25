import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import data from '../../data.json';

export default class Post extends Component {
    constructor(props) {
        super(props);
        this.renderPost = this.renderPost.bind(this);
    }

    renderPost() {
        let post;
        for(let i = 0; i < data.posts.length; i++) {
            if(data.posts[i].id === parseInt(this.props.match.params.post_id, 10)) {
                post = data.posts[i];
            }
        }
        if(post) {
            let userName;
            for(let i = 0; i < data.users.length; i++) {
                if(data.users[i].id === post.userId) {
                    userName = data.users[i].name;
                }
            }
            return (
                <div className="post-page">
                    <Link to={{ pathname: "/", query: { userName: userName } }} className="turn-back">Turn back to search results</Link>
                    <h2 className="post-title">{ post.title }</h2>
                    <p className="post-body">{ post.body }</p>
                    <p className="post-user-name">{ userName }</p>
                </div>
            );
        }
        else {
            return (<h2 className="fail">Such post doesn't exist</h2>);
        }
    }

    render() {
        return (
            <div className="post-container">
                { this.renderPost() }
            </div>
        );
    }
}