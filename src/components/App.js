import React from 'react';
import SearchBar from './SearchBar';
import { render } from '@testing-library/react';

class App {
    onSearchSubmit(term){
        console.log(term);
    }
    render(){
        return (
            <div>
                <SearchBar onSubmit={this.onSearchSubmit}/>
            </div>
        );
    }
    
};

export default App;