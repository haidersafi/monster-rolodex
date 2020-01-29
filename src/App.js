import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {Cardlist} from './Cardlist';
import {SearchBox} from './Search-Box'
class App extends Component {
  constructor()
  {
    super()
    this.state={Monsters:[],Searchfield:''}
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users').then(resp=>resp.json()).then(users=>this.setState({Monsters:users}))
  }
  handleChange=(e)=>{
    this.setState({Searchfield:e.target.value})
  }
  render()
  {
    const {Monsters,Searchfield}=this.state;
    const filteredRobots=Monsters.filter(monster=>{
      return(monster.name.toLowerCase().includes(Searchfield.toLowerCase()))
    })
    
  return (
    

    <div className="App">
    <h1>Monsters-Rolodex</h1>
    <SearchBox placeHolder='Search Robots' handleChange={this.handleChange}/>
    <Cardlist Monsters={filteredRobots}/>


    
     
    </div>
  );
}
}

export default App;
