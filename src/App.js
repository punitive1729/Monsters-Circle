import "./App.css";
import { useState, useEffect } from "react";
import Cards from "./components/cards/cards.components";
import SearchBox from "./components/search-box/search-box.component";

const App = () => {
  // useState Hooks
  const [searchField, setSearchField] = useState("");
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  const initializeMonsters = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  };

  useEffect(initializeMonsters, []);

  const onSearchChange = (event) => {
    const searchText = event.target.value.toLowerCase();
    setSearchField(searchText);
  };

  const filterMonsters = () => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().startsWith(searchField);
    });
    setFilteredMonsters(newFilteredMonsters);
  };

  useEffect(filterMonsters, [searchField, monsters]);

  return (
    <div className="App">
      <h1 className="app-title">Monsters-Circle</h1>
      <SearchBox
        className="search-monsters"
        placeholder="search monsters"
        onChangeHandler={onSearchChange}
      />
      <Cards monsters={filteredMonsters} />
    </div>
  );
};

/*
// Class component
class App extends Component {

  constructor(){
    super();
    this.state={
      monsters:[],
      searchField:''
    };
      console.log('Constructor called..');
    }
    
  componentDidMount(){
    console.log('componentDidMount called..');

    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())śśś
    .then((users) => this.setState(()=>{
      return { monsters:users };
    },()=>{
      console.log('New State\n', this.state);
    }));
  }

  onSearchChange=(event)=>{
    this.setState(()=>{ 
      return { searchField: event.target.value.toLowerCase() }
    },()=>{
      console.log('Search Text updated..');
    });
  }
  
  render(){
    console.log('render called..');
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;

    const filteredMonsters=monsters.filter((monster) => {
      return monster.name.toLowerCase().startsWith(searchField);
    });

    return (
      <div className='App'>
        <h1 className='app-title'>Monsters-Circle</h1>
        <SearchBox className='search-monsters' placeholder='search monsters' onChangeHandler={onSearchChange}/>
        <Cards monsters={filteredMonsters}/>
      </div>
    );
  }
}
*/

export default App;
