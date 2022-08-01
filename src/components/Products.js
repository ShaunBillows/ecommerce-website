import Search from "./Search"
import "./Products.css"

const Products = ({ handleChangeProduct }) => {

    return (
        <div className="products-container">
        <div
          className="product-item"
          onClick={() => handleChangeProduct("hammer")}
        >
          <h3>hammers</h3>
        </div>
        <br></br>
        <div
          className="product-item"
          onClick={() => handleChangeProduct("saw")}
        >
          <h3>saws</h3>
        </div>
        <br></br>
        <div
          className="product-item"
          onClick={() => handleChangeProduct("drill")}
        >
          <h3>drills</h3>
        </div>
        <div
          className="product-item"
          onClick={() => handleChangeProduct("chainsaw")}
        >
          <h3>chainsaw</h3>
        </div>
        <div
          className="product-item"
          onClick={() => handleChangeProduct("toolbox")}>
          <h3>toolbox</h3>
        </div>
        <Search handleChangeProduct={handleChangeProduct}/>
      </div>
    )
}

export default Products