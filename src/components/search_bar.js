import React, { Component }  from 'react';


class SearchBar extends Component{

     constructor(props){
        super(props);
        this.state = {
            term : ''
        }
        this.onInputChange = this.onInputChange.bind(this);
    } 
    onInputChange(term){
        this.setState({ term });
    }
    
    render(){
        return  <div className="search-bar">
                    <input 
                        value={ this.state.value }
                        onChange={ event => this.onInputChange(event.target.value)  } 
                       // onBlur = {this.props.OnSearchTermChange(this.state.term)}
                    />
                </div>;
    }
    
}

export default SearchBar;