import React, { Component } from 'react';
import Book from './Book';



class List extends Component() {

    render(){
    const { bookResults } = this.props;
    const bookList = bookResults.items.map((book, index) => 
    <Book 
        book = {book}
        key ={index}        
    />
    );

    return(
        <div>
            <ul>
                {bookList}
            </ul>
        </div>
    )
    };
};

export default List;