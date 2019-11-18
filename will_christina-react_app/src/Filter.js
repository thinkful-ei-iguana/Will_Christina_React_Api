import React, { Component } from 'react';



class Filter extends Component() {
    render() {
        const {handlePrintType, handleBookType} = this.props;
        return(
            <div className='filter-container'>
                <label>Print Type</label>
                <form
                    action=''
                    onChange= {e => handlePrintType(e.target.value)}>
                      <select name='print-type-filter'>
                          <option value='all'>All</option>
                          <option value='books'>Books</option>
                          <option value='magazines'>Magazines</option>
                      </select>                      
                </form>
                <form
                    action=''
                    onChange= {e => handleBookType(e.target.value)}>
                      <select name='book-type-filter'>
                          <option value='ebooks'>All</option>
                          <option value='free-ebooks'>Free e-Books</option>
                          <option value='paid-ebooks'>Paid e-Books</option>
                          <option value='partially-available-ebooks'>Free Sample e-Books</option>
                      </select>                      
                </form>
            </div>

        );
    }

};

export default Filter;

