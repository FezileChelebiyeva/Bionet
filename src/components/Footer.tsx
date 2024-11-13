import React from "react";
import Logo from "../assets/images/bionetLogoFooter.png";
import Copyright from "../assets/images/copyrightIcon.png";
import LocationIcon from "../assets/images/locationIcon.png";
import PhoneIcon from "../assets/images/phoneIcon.png";
import EmailIcon from "../assets/images/emailIcon.png";
import Facebook from "../assets/images/Social Media/Facebook.png";
import Instagram from "../assets/images/Social Media/Instagram.png";
import Youtube from "../assets/images/Social Media/Youtube.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footerContet">
          <div className="row">
            <div className="footterLeft">
              <div className="footterLeftTop">
                <img className="logoIcon" src={Logo} />
              </div>
              <div className="footterLeftBootom">
                <img className="socialIcon" src={Facebook} />
                <img className="socialIcon" src={Instagram} />
                <img className="socialIcon" src={Youtube} />
              </div>
            </div>
            <div className="footterRight">
              <FooterNavList
                itemTitle={"Layihələr"}
                item1={"Layihələr"}
                item2={"Son layihələrimiz"}
                item3={"Partnyotlar"}
              />
              <FooterNavList
                itemTitle={"Xidmətlər"}
                item1={"Veb saytlar"}
                item2={"Mobil tətbiqlər"}
                item3={"Bazar araşdırması"}
              />
              <FooterNavList
                itemTitle={"Haqqımızda"}
                item1={"Komandamız"}
                item2={"Şirkət haqqında"}
                item3={"Bloqlar"}
              />
              <FooterNavList
                itemTitle={"Əlaqə"}
                icon={LocationIcon}
                icon1={PhoneIcon}
                icon2={EmailIcon}
                item1={"Nərimanov rayonu"}
                item2={"055 000 00 00"}
                item3={"mdhthesenzade@gmail.com"}
              />
            </div>
          </div>
          <div className="footerBottom">
            <img className="copyrightIcon" src={Copyright} alt="Copyright" />
            <h3 className="copyrightText">
              2024 “Bionet”. Bütün hüquqlar qorunur.
            </h3>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;

interface FooterNavListProps {
  itemTitle: string;
  item1: string;
  item2: string;
  item3: string;
  icon?: string;
  icon1?: string;
  icon2?: string;
}

const FooterNavList: React.FC<FooterNavListProps> = ({
  itemTitle,
  item1,
  item2,
  item3,
  icon,
  icon1,
  icon2,
}) => {
  return (
    <ul className="footerNavList">
      <li className="footerNavItemTitle">{itemTitle}</li>
      <li className="footerNavItem">
        {icon ? (
          <img className="footerNavItemIcon" src={icon} alt="icon" />
        ) : null}
        <a className="footerNavItemLink" href="./">
          {item1}
        </a>
      </li>
      <li className="footerNavItem">
        {icon1 ? (
          <img className="footerNavItemIcon" src={icon1} alt="icon" />
        ) : null}
        <a className="footerNavItemLink" href="./">
          {item2}
        </a>
      </li>
      <li className="footerNavItem">
        {icon2 ? (
          <img className="footerNavItemIcon" src={icon2} alt="icon" />
        ) : null}
        <a className="footerNavItemLink" href="./">
          {item3}
        </a>
      </li>
    </ul>
  );
};
