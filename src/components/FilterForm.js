import React, { Component } from 'react';
import axios from 'axios';
import Story from './Story';
import '../style.css';
import Collapse from '@kunukn/react-collapse';
import sliders from '../images/icons/sliders.svg'

class FilterForm extends Component {
  constructor () {
    super();
    this.state = {
      query: "",
      sources: [],
      sortBy: "",

      filterVariables: [],
      isLoaded: false,
      articles: "",

      isOpen: false
    }

    this.requestURL = this.requestURL.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
    this._handleInputSearch = this._handleInputSearch.bind(this);
    this._handleInputSources = this._handleInputSources.bind(this);
    this._handleInputSortBy = this._handleInputSortBy.bind(this);
    this.filterStringEdit = this.filterStringEdit.bind(this);
    this.animateFilter = this.animateFilter.bind(this);

  }

  requestURL () {
    // calculate the separate parts of the URL to send to the API request.
    // in an object so that they can be called using a string below
    const variables = {
      query: 'q=' + this.state.query,
      queryInTitle: "qInTitle=" + "war",
      dateFrom: 'from=' + "2019-08-05",
      dateTo: 'to=' + "2019-08-12",
      sortBy: 'sortBy=' + this.state.sortBy,
      sources: 'sources=' + this.state.sources.join(","),
      domains: 'domains=' + ["nytimes.com","techcrunch.com"].join(","),
      excludeDomains: "excludeDomains=" + ["nytimes.com","techcrunch.com"].join(","),
      language: "language=" + 'en',
      pageSize: "pageSize=" + "5",
      page: "page=" + "1",
    }

    // Only include the variables that have been changed by the user
    // fetch the variables that have been edited, which have been added to the array FilterVariables from each onInput handler
    let filterVariables = this.state.filterVariables;
    let filterString = [];
    // Loop through each variable edited and add the corresponding API-compatible string from the variables object to a new array
    filterVariables.forEach((variable) => {
      filterString.push(variables[variable]);
    });
    // join this new array with &'s inbetween for the API URL
    filterString = filterString.join("&");
    const url = 'https://newsapi.org/v2/everything?' +
          filterString +
          '&' +
          'apiKey=8c98008a0c5c4802822597e13a53eab0';
    return url;
  }

  // when form is submitted, calculate the URL and make the API request.
  _handleSubmit (event) {
    event.preventDefault();
    const query = this.requestURL();
    this.props.onSubmit(query);
  }

  // change the state value to equal the string input.
  _handleInputSearch (event) {
      this.filterStringEdit(event);
      this.setState({
        query: event.target.value,
      })
  }

  _handleInputSources (event) {
    // check if the input already exists in the state varaiable
    // if it doesnt then add it to the state array.
    // if it does, then remove it as it has been unchecked.
    const sourcesState = this.state.sources;
    const sourceIndex = sourcesState.indexOf(event.target.value);
    if (sourceIndex === -1) {
      sourcesState.push(event.target.value);
    }
    else {
      sourcesState.splice(sourceIndex, 1);
    }

    // set the changes to the state variable.
    this.setState({
      sources: sourcesState,
    });

    // update the filter variable array.
    this.filterStringEdit(event);
  }

  _handleInputSortBy (event) {
    this.filterStringEdit(event);
    console.log(event.target.value);
    this.setState({
      sortBy: event.target.value,
    })
  }

  // Add and remove the filter variables that have been changed by the user.
  // Called at the start of each onInput method.
  filterStringEdit (event) {
    const filterVariable = event.target.parentNode.getAttribute("for");
    let filterList = this.state.filterVariables;
    let sourceIndex = filterList.indexOf(filterVariable);
    if (sourceIndex === -1) {
      filterList.push(filterVariable);
    }
    else {
      filterList.splice(sourceIndex, 1);
      if (filterVariable === "query" && event.target.value) {
        filterList.push(filterVariable);
      }
      if (filterVariable === "sources" && this.state.sources.length > 0) {
        filterList.push(filterVariable);
      }
    }

    this.setState({
      filterVariables: filterList,
    });
  }

  animateFilter() {
    // animate the accordion state of the filters menu using isOpen, which connects to the Collapse object rendered.
    this.setState({isOpen: this.state.isOpen ? false : true});
  }

  render () {
    // the for="" for each label must correspond with a key from the `variables` object in the above requestURL function
      return (
        <div>
          <form onSubmit={this._handleSubmit} className="filterForm">
            <div className="filterHeader filterSection">
              <div className="filterTitle">
                <span />
                Filters:
                <span />
              </div>

              <div className="reset">
                <span />
                <span onClick={ this.animateFilter }><img src={ sliders } className="icon"/></span>
                <span />
              </div>
            </div>
            <Collapse isOpen={ this.state.isOpen }>
              <label htmlFor="query" className="filterSection" >
                <span>Search:</span>
                <input type="search" id="query" results="5" onInput={ this._handleInputSearch } />
              </label>
              <label htmlFor="sources" className="sources filterSection">
                <span>Sources:</span>
                <input type="checkbox" id="bbc" value="abc-news-au" onInput={ this._handleInputSources } />
                <label htmlFor="bbc">ABC News</label>
                <input type="checkbox" id="cnn" value="cnn" onInput={ this._handleInputSources } />
                <label htmlFor="cnn">CNN</label>
                <input type="checkbox" id="independent" value="independent" onInput={ this._handleInputSources } />
                <label htmlFor="independent">Independent</label>
                <input type="checkbox" id="huffington" value="the-huffington-post" onInput={ this._handleInputSources } />
                <label htmlFor="huffington">The Huffington Post</label>
                <input type="checkbox" id="washington" value="the-washington-times" onInput={ this._handleInputSources } />
                <label htmlFor="washington">The Wasington Times</label>
              </label>
              <label htmlFor="sortBy" className="filterSection">
                <span>Sort By:</span>
                <select name="sortBy" onInput={ this._handleInputSortBy }>
                  <option value="publishedAt">Most Recent</option>
                  <option value="popularity">Popularity</option>
                  <option value="relevancy">Relevancy</option>
                </select>
              </label>
              <label className="filterSection submitForm">
                <input type="submit" value="Filter" />
              </label>
            </Collapse>
          </form>
        </div>
      )
    }
  };

export default FilterForm;
