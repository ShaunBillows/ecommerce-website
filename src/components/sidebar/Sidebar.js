import BasketItem from "./basket-item";
import "./Sidebar.css";
import SidebarIcon from "./SidebarIcon";

const SidebarContent = ({ handleDecrementBasket, basket, handleIncrementBasket, handleShowSidebar, getTotal, sidebarIsOpen }) => {
  
  return (
    <div className={sidebarIsOpen ? "sidebar open" : "sidebar"}>
      <div className="sidebar-icon-container">
        <SidebarIcon handleShowSidebar={handleShowSidebar} />
      </div>
      {basket.map((item, i) => (
        <BasketItem
          item={item}
          handleDecrementBasket={handleDecrementBasket}
          handleIncrementBasket={handleIncrementBasket}
          key={i}
        />
      ))}
      {basket ? <h2>total: {getTotal()}</h2> : <h2></h2>}
    </div>
  );
};

export default SidebarContent;
