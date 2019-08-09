import React, { Component } from 'react'
import '../style.css';
import Story from './Story'


class LoadArticle extends Component {
  constructor (props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    }

    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount () {
    fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=8c98008a0c5c4802822597e13a53eab0')
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.articles
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          })
        }
      )
  }

  render () {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    }
    else if (!isLoaded ){
      return <div>Loading...</div>
    }
    else {
      return (
              <div>
               {items.map(item => (
                 <Story title={item.title} imageURL={item.urlToImage} content={item.description} linkTo={item.url} />
               ))}
              </div>
           );
    }
  };
}

export default LoadArticle;
