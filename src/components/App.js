import React, {useState,useEffect} from "react"

const App = () => {

  const fruits= ["apple", "banana", "cherry", "date", "elderberry", "fig"];
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      const filteredSuggestions = fruits.filter(fruit => fruit.includes(searchTerm.toLowerCase()));
      setSuggestions(filteredSuggestions);
    });

    return ()=> clearTimeout(timer);
    
  }, [searchTerm]);

  const handleSuggestionClick = (suggestion) => {
    setSearchTerm(suggestion);
    setSuggestions([]);
  }
  
  return (
    <div id="main">
      <h1>Search item</h1>
        <input
          type="text"
          placeholder="Search for fruits..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
        <ul>
          {
            suggestions.map((suggestion, index) =>(
              <li key={index} onClick={() => handleSuggestionClick(suggestion)} >
                {suggestion}
              </li>
            ))
          }
        </ul>
    </div>
  )
}

export default App
