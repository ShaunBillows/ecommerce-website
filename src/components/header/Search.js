import "./Search.css"
import { useState } from "react"

const Search = ({handleChangeProduct}) => {

    const [ input, setInput ] = useState("")
    
    const handleKeyDown = event => {
        if (event.key === "Enter") {
            handleChangeProduct(input);
            setInput("");
        }
      };

    const handleClickSearch = () => {
        handleChangeProduct(input);
        setInput("");
    };

    return (
        <span className="search-container">
            <input type="text" value={input} onKeyDown={handleKeyDown} onChange={event => setInput(event.target.value)}></input>
            <button onClick={handleClickSearch}>search</button>
        </span>
    )
}

export default Search