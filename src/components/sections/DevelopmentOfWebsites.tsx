import React from "react";
import SearchIcon from "../../assets/images/developSectionSearchIcon.png";
import UIUXIcon from "../../assets/images/UIUXDesign.png";
import FrontendIcon from "../../assets/images/backFront.png";

const DevelopmentOfWebsites = () => {
  return (
    <section className="DevelopmentOfWebsites">
      <div className="container">
        <div className="DevelopmentOfWebsitesContents">
          <div className="DevelopmentOfWebsitesHeader">
            <h2 className="title">Veb saytların hazırlanması</h2>
          </div>
          <div className="DevelopmentOfWebsitesCardBox">
            <DevelopmentCard
              bgColor={"#e1f5f3"}
              img={SearchIcon}
              title={"Bazar araşdırması"}
              text={
                "Fəaliyyətimiz müddətində çox sahibkarlarla işləyib, uğurlu layihələr ərsəyə gətirmişik. Sizin üçün istədiyiniz vebsaytları və mobil tətbiqləri dizayn edirik."
              }
            />
            <DevelopmentCard
              bgColor={"#E4FDE7"}
              img={UIUXIcon}
              title={"UI/UX Dizayn"}
              text={
                "Fəaliyyətimiz müddətində çox sahibkarlarla işləyib, uğurlu layihələr ərsəyə gətirmişik. Sizin üçün istədiyiniz vebsaytları və mobil tətbiqləri dizayn edirik."
              }
            />
            <DevelopmentCard
              bgColor={"#E2ECFF"}
              img={FrontendIcon}
              title={"Frontend İnkişaf"}
              text={
                "Fəaliyyətimiz müddətində çox sahibkarlarla işləyib, uğurlu layihələr ərsəyə gətirmişik. Sizin üçün istədiyiniz vebsaytları və mobil tətbiqləri dizayn edirik."
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DevelopmentOfWebsites;

interface CardProps {
  img: string;
  title: string;
  text: string;
  bgColor: string;
}

const DevelopmentCard: React.FC<CardProps> = ({
  img,
  title,
  text,
  bgColor,
}) => {
  return (
    <div
      className="DevelopmentOfWebsitesCard"
      style={{ backgroundColor: bgColor }}
    >
      <img className="DevelopmentOfWebsitesIcon" src={img} alt={title} />
      <div className="DevelopmentOfWebsitesCardContent">
        <h3 className="DevelopmentOfWebsitesTitle">{title}</h3>
        <p className="DevelopmentOfWebsitesText">{text}</p>
      </div>
    </div>
  );
};
