import React from "react";
import activtyImg1 from "../../assets/images/activtyImg1.png";
import activtyImg2 from "../../assets/images/activtyImg2.png";
import activtyImg3 from "../../assets/images/activtyImg3.png";

const OurActivitySection = () => {
  return (
    <section className="OurActivity">
         <div className="OurActivityHeader">
            <h2 className="title">Fəaliyyətimiz</h2>
          </div>
      <div className="OurActivityContents">
      <div className="container">
          <div className="OurActivityCardBox">
            <OurActivityCard
              bgColor={"#fff"}
              img={activtyImg1}
              title={"+50 hazırlanmış vebsayt"}
              text={
                "Fəaliyyətimiz müddətində çox sahibkarlarla işləyib, uğurlu layihələr ərsəyə gətirmişik. Sizin üçün istədiyiniz vebsaytları və mobil tətbiqləri dizayn edirik."
              }
            />
            <OurActivityCard
              bgColor={"#fff"}
              img={activtyImg2}
              title={"+5 illik təcrübə"}
              text={
                "Fəaliyyətimiz müddətində çox sahibkarlarla işləyib, uğurlu layihələr ərsəyə gətirmişik. Sizin üçün istədiyiniz vebsaytları və mobil tətbiqləri dizayn edirik."
              }
            />
            <OurActivityCard
              bgColor={"#fff"}
              img={activtyImg3}
              title={"Premium klass dizayn"}
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

export default OurActivitySection;

interface CardProps {
  img: string;
  title: string;
  text: string;
  bgColor: string;
}

const OurActivityCard: React.FC<CardProps> = ({
  img,
  title,
  text,
  bgColor,
}) => {
  return (
    <div className="OurActivityCard" style={{ backgroundColor: bgColor }}>
      <img className="OurActivityIcon" src={img} alt={title} />
      <div className="OurActivityCardContent">
        <h3 className="OurActivityTitle">{title}</h3>
        <p className="OurActivityText">{text}</p>
      </div>
    </div>
  );
};
