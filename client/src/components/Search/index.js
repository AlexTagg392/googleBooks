import React from 'react';
import "../Search/style.css";

function SearchForm(props) {

    return (
        <div id='search-form' className='text-center'>
            <input className='form-control' name='title'
                placeholder='Search for a book...'
                type='text'
                onChange={props.handleInputChange}></input>
                <br />
                <button
                className='btn btn-block'
                    onClick={props.handleFormSubmit}
                    type='submit'
                >   Search!
            </button>
        </div>
    )
}

export default SearchForm
