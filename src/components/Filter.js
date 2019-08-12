import React, { Component } from 'react';
import axios from 'axios';
import Story from './Story';
import FilterForm from './FilterForm';
import '../style.css';

class Filter extends Component {
  constructor () {
    super();
    this.state = {
      isLoaded: false,
      articles: ""
    }
    this._getNewsArticle = this._getNewsArticle.bind(this);
  }

  // getting the url from requestURL and make GET request using axios
  _getNewsArticle (query) {
    axios.get(query)
      .then((data) => {
        console.log(data);
        this.setState({
          isLoaded: true,
          articles: data});
      });
  }


  render () {
    // put a check to wait until the API has returned articles
    if (!this.state.isLoaded) {
      //wait
      return (
        <FilterForm onSubmit={ this._getNewsArticle } />
      )
    }
    else {
      return (
        <div className="filter">
          <FilterForm onSubmit={ this._getNewsArticle } />
          {this.state.articles.data.articles.map(item => (
            <Story title={item.title} imageURL={item.urlToImage} content={item.description} linkTo={item.url} key={item.url} />
          ))}
        </div>
      );
    }

  };
}

export default Filter;
