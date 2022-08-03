import Search from "./Search"
import "./Products.css"
import Product from "../header/Product"

const Products = ({ handleChangeProduct, searchItem }) => {
 
    const products = [ "hammer", "saws", "drills", "chainsaws" ]

    return (
      <>
        <div className="product-and-search-container">
          <div className="products-container">
                { products.map( (item, index) => (
                  <Product
                    handleChangeProduct={handleChangeProduct} 
                    item={item} 
                    key={index}
                />
                )) }
                <Search 
                  handleChangeProduct={handleChangeProduct}
                />
                </div>
                <div className="search-display">
                    <h4>Showing results for {searchItem}...</h4>
                </div>
          </div>
          <Products 
            handleChangeProduct={handleChangeProduct} 
            searchItem={searchItem}
          />
      </>

    )
}

export default Products