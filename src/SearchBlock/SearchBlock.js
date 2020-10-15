import React, { useState } from 'react';
import './SearchBlock.css';

const SearchBlock = (props) => {

    const [searchValue, setSearchValue] = useState('');

    const onTextChange = () => {
        props.onSearch(searchValue)
    }

    const onFilter = () => {

        props.filter(searchValue)
    }


    return (
        <div className="SearchBlock" >

            <input value={searchValue} onChange={(e) => setSearchValue(e.target.value)} className="form-control"></input>
            <button onClick={onTextChange} className="btn btn-info">Search</button>
            <button onClick={onFilter} className="btn btn-info">Length</button>

        </div>
    )
}
export default SearchBlock;
