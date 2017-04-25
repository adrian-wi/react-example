import React, { Component } from 'react';
import '../../css/App.css';
import data from '../../data.json';

import Result from './Result';
import Form from './Form';
import Tip from './Tip';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      posts: [],
      isSearched: false,
      isTip: true
    };
    this.handleSearch = this.handleSearch.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleEnterPress = this.handleEnterPress.bind(this);
    this.showTip = this.showTip.bind(this);
    this.hideTip = this.hideTip.bind(this);
  }

  componentDidMount() {
    if(this.props.location.query) {
      this.setState({
        value: this.props.location.query.userName
      },() => {
        this.handleSearch();
      });
    }
  }

  showTip(event) {
    this.setState({
      isTip: true
    });
  }

  hideTip(event) {
    this.setState({
      isTip: false
    });
  }

  handleChange(event) {
    this.setState({
      value: event.target.value
    });
  }

  handleEnterPress(event) {
    if(event.key === "Enter") {
      this.handleSearch();
    }
  }

  handleSearch() {
    let user = data.users.find((user) => {
        return user.name === this.state.value;
    });
    let posts = [];
    if(user) {
        posts = data.posts.filter((post) => {
            return (post.userId === user.id);
        });
    }
    this.setState({posts, isSearched: true}, () => {
      if(this.state.posts[0]) {
        this.hideTip();
      }
      else {
        this.showTip();
      }
    });
  }

  render() {
    return (
        <div>
            <Form handleEnterPress={ this.handleEnterPress } value={ this.state.value } data={ data } handleChange={ this.handleChange } handleSearch={ this.handleSearch } />
            <Result hideTip={ this.hideTip } showTip={ this.showTip } posts={ this.state.posts } isSearched={ this.state.isSearched } />
            <Tip isTip={ this.state.isTip } data={ data }/>
        </div>
    );
  }
}