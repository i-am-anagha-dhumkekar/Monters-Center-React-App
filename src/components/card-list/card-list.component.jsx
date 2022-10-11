import { Component } from "react";
import "./card.styles.css"
class CardList extends Component
{
    render(){

        const {monsters} =this.props;
        return(
        <div className="card-list">
            {monsters.map((monster)=>{
          return (<div className="card-container" key={monster.id}>
          <img alt="img" src={`https://robohash.org/${monster.id}?set=set2&size=180x180`}></img>
          <h2>{monster.name}</h2>
          <p>{monster.email}</p></div>
            );
        })}
        </div>);
    }



}
export default CardList;