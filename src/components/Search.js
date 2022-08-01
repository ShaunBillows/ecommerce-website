import "./Search.css"



const Search = ({handleGetInput, handleChangeProduct}) => {

    const searchClicked = () => {
        handleGetInput()
        // handleChangeProduct('hello')
        return
    }


    return (
        <span className="search-container">
            <input></input>
            <button onClick={searchClicked()}>search</button>
        </span>
    )
}

export default Search