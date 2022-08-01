import BasketItem from "../basket-item/basket-item";
import "./Sidebar.css";
import SidebarIcon from "../sidebar-icon/SidebarIcon";

const SidebarContent = ({
  handleRemoveItem,
  basket,
  handleAddItem,
  handleShowSidebar,
  getTotal,
  sidebarIsOpen
}) => {
  return (
    <div className={sidebarIsOpen ? "sidebar open" : "sidebar"}>
      <div className="sidebar-icon-container">
        <SidebarIcon handleShowSidebar={handleShowSidebar} />
      </div>
      {basket.map((item, i) => (
        <BasketItem
          item={item}
          handleRemoveItem={handleRemoveItem}
          handleAddItem={handleAddItem}
          key={i}
        />
      ))}
      {basket ? <h2>total: {getTotal()}</h2> : <h2></h2>}
    </div>

  );
};

export default SidebarContent;
