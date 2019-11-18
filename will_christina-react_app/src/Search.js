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
        const { handleSubmit } = this.props;
        const { searchInput } = this.state;

       return(
           <div>
               <form className='search-form' 
               onSubmit={ submitEvent => handleSubmit(submitEvent, searchInput)}>
                   <input
                    type='text' 
                    placeholder='Search Here'
                    name='search'
                    onChange={ this.handleInput }/>
                <button type='submit'>Submit</button>
               </form>
           </div> 

        )
    }
}

export default Search;