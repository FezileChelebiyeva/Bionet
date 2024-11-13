import React, { useState } from "react";
import { FaYoutube, FaInstagram, FaFacebookF } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { MdLocationPin } from "react-icons/md";
import { BsTelephoneFill } from "react-icons/bs";
import Logo from "../assets/images/bionetLogoFooter.png";
import LogoTwo from "../assets/images/bionetLogo.png";
import { IoSearch } from "react-icons/io5";
import { useLocation } from "react-router-dom";

const HeaderComponent = () => {
  const [menuBar, setMenuBar] = useState(true);
  const [showInput, setShowInput] = useState(false);

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

  const handleIconClick = () => {
    setShowInput(!showInput);
  };

  return (
    <header className="header">
      <div className="headerBottom" style={{ ...style }}>
        <div className="container">
          <div className="row">
            <a className="logo" href="./">
              <img src={logo} alt="Bionet Logo" />
            </a>
            <ul className="navList">
              {navItems.map((item) => (
                <li
                  className="navItem"
                  style={{ margin: "10px 0" }}
                  key={item.label}
                >
                  <a
                    className="navLinkItem"
                    href={item.path}
                    style={{
                      color: location.pathname === item.path ? "black" : color,
                    }}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="navLeft">
              <IoSearch size={24} color={color} />
              <a className="navLinkItem" style={{ color: color }} href="./">
                En
              </a>
            </div>
            <div className="menu-control">
              {menuBar ? (
                <div onClick={() => setMenuBar(false)} className="menu-bar">
                  <i className="fa-solid fa-bars"></i>
                </div>
              ) : (
                <div onClick={() => setMenuBar(true)} className="close">
                  <i className="fa-solid fa-x"></i>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      {!menuBar && (
        <div className="mobile-header">
          <div className="top">
            <div className="container">
              <div className="top-content">
                <a className="logo" href="./">
                  <img src={logo} alt="Bionet Logo" />
                </a>
                <div className="navLeft">
                  <IoSearch size={24} color={color} onClick={handleIconClick} />
                  <a className="langItem" style={{ color: color }} href="./">
                    En
                  </a>
                </div>
                <div className="menu-control">
                  {menuBar ? (
                    <div onClick={() => setMenuBar(false)} className="menu-bar">
                      <i className="fa-solid fa-bars"></i>
                    </div>
                  ) : (
                    <div onClick={() => setMenuBar(true)} className="close">
                      <i className="fa-solid fa-x"></i>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="bottom">
            <div className="container">
              <div className="lists">
                <ul className="navList">
                  {navItems.map((item) => (
                    <li
                      className="navItem"
                      style={{ margin: "10px 0" }}
                      key={item.label}
                    >
                      <a
                        className="navLinkItem"
                        href={item.path}
                        style={{
                          color:
                            location.pathname === item.path ? "black" : color,
                        }}
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default HeaderComponent;
