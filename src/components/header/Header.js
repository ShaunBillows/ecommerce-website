import "./Header.css";
import SidebarIcon from "../sidebar/SidebarIcon";
import Products from "./Products";

const Header = ({
  getBasketItemNumber,
  openModal,
  setSidebar,
  handleShowSidebar,
  handleChangeProduct,
  searchItem,
}) => {
  return (
    <div className="header">
      <div className="heading-container">
        <SidebarIcon handleShowSidebar={handleShowSidebar} />
        {/* <div className="logo"></div> */}
        <h1>Hardware Store</h1>
        <div className="cheackout-container">
          <div className="checkout-item checkout-icon" onClick={() =>{ openModal(); setSidebar(false);} }></div>
            <div className="checkout-item checkout-quantity">
              {getBasketItemNumber()}
            </div>
        </div>
      </div>
      <Products
        handleChangeProduct={handleChangeProduct}
        searchItem={searchItem}
      />
    </div>
  );
};

export default Header;
