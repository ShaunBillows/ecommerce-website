import Search from "./Search";
import "./Products.css";
import Product from "../header/Product";

const Products = ({ handleChangeProduct, searchItem }) => {
  const products = ["hammer", "saws", "drills", "chainsaws"];

  return (
    <>
      <div className="product-and-search-container">
        <div className="products-container">
          {products.map((item, index) => (
            <Product
              handleChangeProduct={handleChangeProduct}
              item={item}
              key={index}
            />
          ))}
        </div>
        <div className="search-container">
          <Search handleChangeProduct={handleChangeProduct} />
        </div>
      </div>
      <div className="search-display">
        <h4>Showing results for {searchItem}...</h4>
      </div>
    </>
  );
};

export default Products;
