import React, { Component } from 'react';

export default class Tip extends Component {
    constructor(props) {
        super(props);
        this.renderTips = this.renderTips.bind(this);
    }

    renderTips() {
        let tips =  this.props.data.users.map((user) => {
            return <h3 readOnly key={ Math.random() } className="tip-title">{ user.name }</h3>
        });
        if(this.props.isTip) {
            return (
                <div className="tip">
                    <h2>Choose one of them:</h2>
                    { tips }
                </div>
            );
        }
        else {
            return null;
        }
    }

    render() {
        return (
            <div>
                { this.renderTips() }
            </div>
        );
    }
}