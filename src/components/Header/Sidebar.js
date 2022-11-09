import React from "react";
import { Link } from "react-router-dom";
import { links } from "../../assets/data/links";
const Sidebar = () => {
  return (
    <div>
      <div className="header-nav-links max-xl:hidden">
        <ul className="flex">
          {links.map((link) => {
            const { id, text, url } = link;
            return (
              <li key={id} className="text-white ">
                <Link to={url} className="nav-links nav-link-ltr ">
                  {text}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
