import React, { Component } from 'react';


class Book extends Component() {

    

    render() {
    let author = null;
    let title = null;
    let thumbnailUrl = null;
    let previewUrl = null;
    let snippet = null;
    let cost = null;
        
        return(
            <div>
                <a href={previewUrl} target='blank'> 
                <li>
                    <img src={thumbnailUrl} className='book-img' alt='bookimage'></img>
                    <div>
                        <h2>{title}</h2>
                        <h2>{author}</h2>
                        <h2>{cost}</h2>
                        <p>{snippet}</p>
                    </div>
                </li>
                </a>
            </div>

        );
    };


};



export default Book;