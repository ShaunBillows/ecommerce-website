import "./Search.css"

import { useState } from "react"



const Search = ({handleGetInput, handleChangeProduct}) => {

    const [ input, setInput ] = useState("")
    
    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
        //   addTasks([...tasks, input]);
          setInput("");
        }
      };

    return (
        <span className="search-container">
            <input type="text" value={input} onKeyDown={handleKeyDown} onChange={event => setInput(event.target.value)}></input>
            <button onClick={() => setInput("")}>search</button>
        </span>
    )
}

export default Search