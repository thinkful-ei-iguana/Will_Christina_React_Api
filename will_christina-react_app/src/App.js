import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Search from './Search';

class App extends Component {

  state = {

  }


  handleSubmit = (searchSubmitEvent, searchInput) => {
    searchSubmitEvent.preventDefault();
    this.setState({
      searchQuery: searchInput
    }); 

    const baseUrl = 'https://www.googleapis.com/books/v1/volumes';
    const key = 'AIzaSyAYDJhq65jOJdEWKmAaCQSIUaxDdaMMCf8';
    const fullSearchUrl = this.fullQuery(baseUrl, searchInput, key);
    fetch()

    

  };


  render() {
    return (
      <div className="App">
        <Header />
        <Search />
      </div>
    );

  }; 
  
}

class 

export default App;
