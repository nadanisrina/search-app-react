import React from 'react';

class SearchBar extends React.Component{
    state = {term: ''};

    onInputChange(e){
        console.log(e.target.value); 
    }

    onFormSubmit = (e) => {
        e.preventDefault();
        console.log(this.state.term);
    }
    
    render(){
        return(
        <div>
            <div className="ui container">
                <div style={{marginTop : '10px'}} className="ui segment">
                    <form onSubmit = {this.onFormSubmit} className="ui form">
                        <label style={{marginRight : '10px'}}> Image Search</label>
                        <div className="ui big icon input">
                            <input name="search" type="text" placeholder="search for images..." value={this.state.term} onChange={(e) => this.setState({term: e.target.value})} />
                            <i className="search icon"></i>
                        </div> 
                    </form>
                </div>
            </div>
        </div>
        );
    }
};

export default SearchBar; 