import React, { Component } from "react";
import "./App.css";
import Header from "./Header";
import Search from "./Search";
import Filter from "./Filter";
import List from "./List";

class App extends Component {
  state = {
    bookFilter: "",
    printFilter: "",
    bookResults: this.props.mockBookResults,
    searchQuery: 'javascript'
  };

  handleSubmit = (searchSubmitEvent, searchInput) => {
    searchSubmitEvent.preventDefault();
    this.setState({
      searchQuery: searchInput
    });

    const baseUrl = "https://www.googleapis.com/books/v1/volumes";
    const key = "AIzaSyAYDJhq65jOJdEWKmAaCQSIUaxDdaMMCf8";
    const fullSearchUrl = this.fullQuery(baseUrl, searchInput, key);
    fetch(fullSearchUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network Error!  Try Again!');
        }
        return response;
      })
      .then(response => response.json())
      .then(bookResultsObj => {
        this.setState({
          bookResults: bookResultsObj,
          error: null
        });
      })
      .catch(error => {
        this.setState({
          error: error.message
        });
      });
  };

  fullQuery = () => {
    const { bookFilter, printFilter } = this.state;
    let fullQuery;
    if (searchInput !== "") {
      fullQuery = "?q=" + searchInput;
    }
    if (bookFilter !== "") {
      fullQuery = fullQuery + "&filter=" + bookFilter;
    }
    if (printFilter !== "") {
      fullQuery = fullQuery + "&bookType=" + printFilter;
    }

    const fullUrl = baseUrl + fullQuery + "&key=" + key;
    return fullUrl;
  };

  handlePrintType = printType => {
    if (printType) {
      this.setState({
        printFilter: printType
      });
    }
  };

  handleBookType = bookType => {
    if (bookType) {
      this.setState({
        bookFilter: bookType
      });
    }
  };

  render() {
    return (
      <div className="App">
        <Header />
        <Search />
      </div>
    );
  }
}

export default App;
