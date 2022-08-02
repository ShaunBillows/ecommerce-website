import "./SidebarIcon.css";

const SidebarIcon = ({ handleShowSidebar }) => {
  return (
    <div
      className="sidebar-icon-container"
      onClick={() => handleShowSidebar()}
    ></div>
  );
};

export default SidebarIcon;
