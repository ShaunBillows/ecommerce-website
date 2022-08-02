import "./Header.css"
import SidebarIcon from "../sidebar/SidebarIcon"


const Header = ({ getBasketItemNumber, openModal, setSidebar, handleShowSidebar }) => {
    return (
    <div className="header">
        <div className="heading-container">
          <h1>Hardware Store</h1>
        </div>
        <div className="cheackout-container">
          <div className="checkout-item checkout-icon" onClick={() =>{ openModal(); setSidebar(false);} }></div>
          <div className="checkout-item checkout-quantity">
            {getBasketItemNumber()}
          </div>
        </div>
        <div className="sidebar-toggle">
          <SidebarIcon handleShowSidebar={handleShowSidebar}/>
        </div>
      </div>
    )
}

export default Header