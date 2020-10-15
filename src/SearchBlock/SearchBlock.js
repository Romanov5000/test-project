import React from 'react';

export default class SearchBlock extends React.Component {


    onTextChange = () => {
        this.props.onSearch(this.searchInput.value)
    }

    onFilter = () => {
        
        this.props.filter(this.searchInput.value)
    }

    render() {
        
        return (
            <div className="SearchBlock" >

                <input ref={(input) => { this.searchInput = input }}></input>
                <button onClick={this.onTextChange.bind(this)}>dddd</button>
                <button onClick={this.onFilter.bind(this)}>vvv</button>
                
            </div>
        );
    }
}
