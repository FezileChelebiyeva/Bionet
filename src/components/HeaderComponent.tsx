import { useState } from "react";
import Logo from "../assets/images/bionetLogoFooter.png";
import { IoSearch } from "react-icons/io5";
import { useLocation } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";

const HeaderComponent = () => {
  const [menuBar, setMenuBar] = useState(false);
  const location = useLocation();

  const getHeaderStyleAndLogo = () => {
    switch (location.pathname) {
      case "/":
        return {
          logo: Logo,
          style: {
            background: "linear-gradient(90deg, #587abc 9%, #01c3cd 86%)",
          },
          color: "#fff",
        };
      default:
        return {
          logo: Logo,
          style: {
            background: "linear-gradient(90deg, #587abc 9%, #01c3cd 86%)",
          },
          color: "#fff",
        };
    }
  };

  const { logo, style, color } = getHeaderStyleAndLogo();

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/ProjectsPage", label: "Projects" },
    { path: "/servicesPage", label: "Services" },
    { path: "/aboutPage", label: "About" },
    { path: "/contactsPage", label: "Contacts" },
  ];

  return (
    <header id="header" style={{ ...style }}>
      <div className="container">
        <div className="header">
          <div className="logo">
            <a href="./">
              <img src={logo} alt="Bionet Logo" />
            </a>
          </div>
          <div className={`navbar  ${menuBar ? "active_navbar" : ""}`}>
            <div className="container">
              <ul className="navlink_lists">
                {navItems.map((nav, i) => (
                  <li key={i} className="nav_list">
                    <a
                      onClick={() => setMenuBar(false)}
                      className="link"
                      href={nav.path}
                      style={{
                        color: location.pathname === nav.path ? "black" : color,
                      }}
                    >
                      {nav.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="header_end">
            <div className="nav_left">
              <IoSearch cursor={"pointer"} size={24} color={color} />
              <a className="navLinkItem" style={{ color: color }} href="./">
                En
              </a>
            </div>
            <div
              className={`icon_button ${menuBar ? "active" : ""}`}
              onClick={() => setMenuBar(!menuBar)}
            >
              {menuBar ? (
                <HiX color="#fff" size={"30px"} className="icon close_icon" />
              ) : (
                <HiMenu color="#fff" size={"30px"} className="icon menu_icon" />
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderComponent;
