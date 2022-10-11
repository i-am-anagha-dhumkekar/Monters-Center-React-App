import "./App.css"
import {Component} from "react";
import CardList from './components/card-list/card-list.component'
import SearchBox from "./components/search-bar/search-box.component";

class App extends Component{
  constructor()
  {
    super();
    this.state={
      monsters:[],
      search:'',
    };
  }
  
  componentDidMount()
  {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((response)=>response.json())
    .then((users)=>{
      this.setState(()=>{
        return{monsters:users}
      })
    });
  }

  handleonchange=(event)=>{
    const search=event.target.value.toLowerCase();
    this.setState(()=>{
      return {search}
    })
  }

  render()
  {
    const {monsters,search}=this.state;
    const {handleonchange}=this;
    const filteredmonster=monsters.filter((monster)=>{
      return monster.name.toLowerCase().includes(search)
    });
    
    return(
      <div>
        <h1 style={{fontFamily:" 'Silkscreen', cursive" , color:"lightblue"}}>Monsters Center</h1>
        <SearchBox change={handleonchange} placeholder="Search Monster" />
        <CardList monsters={filteredmonster} />
      </div>
    );
  }


}

export default App;
