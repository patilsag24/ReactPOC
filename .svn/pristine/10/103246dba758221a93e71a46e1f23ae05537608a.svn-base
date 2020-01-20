import React, { Component } from 'react';

class SearchBar extends Component
{
    onSearch(e){
        this.props.onSearchHandle(e.target.value);
    }
    render(){
        return(
            <div>
                <input type="text" onChange={this.onSearch.bind(this)} placeholder="Search Product name" />
            </div>
        );
    }
}

export default SearchBar;