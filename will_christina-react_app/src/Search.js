import React, { Component } from 'react';
// import { Component } from 'react';

class Search extends Component {

    state = {
        searchInput: '',
    }

    handleInput = (searchEvent) => {
        this.setState({
            searchInput: searchEvent.target.value
        });
    }

    render() {

       return(
           <div>
               Search

           </div> 

        )
    }
}