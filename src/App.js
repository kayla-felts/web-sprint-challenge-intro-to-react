import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import { BASE_URL } from './constants/index'
import CharacterList from './components/CharacterList'
const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [character, setCharacter] = useState([]);

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(() => {
      axios
        .get(`${BASE_URL}`)
        .then((res) => {
          setCharacter(res.data);
        })
        .catch((error) => {
          debugger;
        });
    });
  

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      {
        <CharacterList info = {character} />
      }
    </div>
  );
  
}
//my code works up untill I start to actually use it. AWESOMESAUCE.
export default App;
