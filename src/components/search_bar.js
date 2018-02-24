import React from 'react';


// const SearchBar = () => {
//     return <input />;
// }

//converting fucntional compnent to a class component
class SearchBar extends React.Component {

    constructor() {
        super();
        this.state = {
            term: ""
        };
    }
    render = () => {
        return  <input onChange = { e => this.setState({term : e.target.value})} />
    }
}
export default SearchBar;