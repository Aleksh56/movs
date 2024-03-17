import { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div
      className={`bg-gray-800 h-screen text-white ${
        collapsed ? "w-20" : "w-64"
      } p-4`}
    >
      <button className="text-white" onClick={toggleSidebar}>
        Toggle Sidebar
      </button>
      <div className="mt-8">
        <Link to="/admin-panel/dashboard" className="block py-2">
          Dashboard
        </Link>
        <Link to="/admin-panel/news" className="block py-2">
          News
        </Link>
        {/* Добавьте другие пункты меню по аналогии */}
      </div>
    </div>
  );
};

export default Sidebar;
