import React from "react";
import ServiceIocnOne from "../../assets/images/serviceIconone.png";
import ServiceIocnTwo from "../../assets/images/ServiceIocn.png";
import ServiceIocnThree from "../../assets/images/ServiceIconThree.png";

const OurServicesSection = () => {
  return (
    <section className="OurServicesSection">
      <div className="container">
        <div className="OurServicesSectionContents">
          <div className="OurServicesSectionHeader">
            <h2 className="title">Xidmətlərimiz</h2>
          </div>
          <div className="OurServicesSectionCardBox">
            <OurServicesSectionCard
              bgColor={"#E4FDE7"}
              img={ServiceIocnOne}
              title={"Rəqib və bazar araşdırması"}
              text={
                "Bazar araşdırması, şirkətlərin və ya təşkilatların müəyyən bir sektorda mövcud olan rəqabət mühiti, müştəri tələbləri və bazar trendi haqqında dərin... "
              }
            />
            <OurServicesSectionCard
              bgColor={"#E1F5F3"}
              img={ServiceIocnTwo}
              title={"UX/UI Dizaynın çəkilməsi"}
              text={
                "UX/UI dizaynın çəkilməsi, istifadəçi təcrübəsini və interfeysini nəzərə alaraq funksional və vizual olaraq cəlbedici bir məhsul yaratmaq prosesidir. "
              }
            />
            <OurServicesSectionCard
              bgColor={"#CEF0EF"}
              img={ServiceIocnThree}
              title={"Veb saytın və  mobil tətbiqin təhvil verilməsi"}
              text={
                "Veb saytın təhvil verilməsi, layihənin tamamlanma mərhələsində müştəriyə və ya layihə sahibinə işlək vəziyyətdə təqdim olunması prosesidir."
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurServicesSection;

interface CardProps {
  img: string;
  title: string;
  text: string;
  bgColor: string;
}

const OurServicesSectionCard: React.FC<CardProps> = ({
  img,
  title,
  text,
  bgColor,
}) => {
  return (
    <div
      className="OurServicesSectionCard"
      style={{ backgroundColor: bgColor }}
    >
      <img className="OurServicesSectionIcon" src={img} alt={title} />
      <div className="OurServicesSectionCardContent">
        <h3 className="OurServicesSectionTitle">{title}</h3>
        <p className="OurServicesSectionText">{text}</p>
      </div>
    </div>
  );
};
