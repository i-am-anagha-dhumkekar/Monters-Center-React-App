import { Component } from "react";
import "./search-box.styles.css"
class SearchBox extends Component{
    render()
    {
        return(
            <div><input className="search-box" type="search" placeholder={this.props.placeholder} onChange={this.props.change} /></div>
        );
    }

}
export default SearchBox;