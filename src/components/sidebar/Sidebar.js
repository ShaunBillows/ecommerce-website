import BasketItem from "./basket-item";
import "./Sidebar.css";
import SidebarIcon from "./SidebarIcon";

const SidebarContent = ({
  handleDecrementBasket,
  basket,
  handleIncrementBasket,
  handleShowSidebar,
  getTotal,
  sidebarIsOpen,
}) => {
  return (
    <div className={sidebarIsOpen ? "sidebar open" : "sidebar"}>
      <div className="sidebar-icon-container">
        <SidebarIcon handleShowSidebar={handleShowSidebar} />
      </div>
      <br></br>
      <br></br>
      {basket.map((item, i) => (
        <BasketItem
          item={item}
          handleDecrementBasket={handleDecrementBasket}
          handleIncrementBasket={handleIncrementBasket}
          key={i}
        />
      ))}
      {basket ? (
        <h2 className={basket.length ? "total-border" : "none"}>
          total: £{getTotal()}
        </h2>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default SidebarContent;
