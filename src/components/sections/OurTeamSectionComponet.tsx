import React from "react";
import PersonOne from "../../assets/images/personOne.png";
import PersonTwo from "../../assets/images/PersonTwo.png";
import PersonThree from "../../assets/images/PersonThree.png";
import PersonFour from "../../assets/images/PersonFour.png";

const OurTeamSectionComponent = () => {
  return (
    <section className="OurTeamSectionComponent">
      <div className="container">
        <div className="OurTeamSectionComponentContents">
          <div className="OurTeamSectionComponentContext">
            <h2 className="title">Komandamız</h2>
            <p className="OurTeamSectionComponentDescription">
              Fəaliyyətimiz müddətində çox sahibkarlarla işləyib, uğurlu
              layihələr ərsəyə gətirmişik. Sizin üçün istədiyiniz vebsaytları və
              mobil tətbiqləri dizayn edirik. Fəaliyyətimiz müddətində çox
              sahibkarlarla işləyib, uğurlu layihələr ərsəyə gətirmişik. Sizin
              üçün istədiyiniz vebsaytları və mobil tətbiqləri dizayn edirik.
            </p>
          </div>

          <div className="OurTeamSectionComponentCardBox">
            <div className="OurTeamSectionComponentImageLeft">
              <TeamMemberCard
                image={PersonOne}
                name="Ali Ali"
                info="Front End Developer"
              />
              <TeamMemberCard
                image={PersonTwo}
                name="Ali Ali"
                info="Front End Developer"
              />
            </div>
            <div className="OurTeamSectionComponentImageRight">
              <TeamMemberCard
                image={PersonThree}
                name="Ali Ali"
                info="Back End Developer"
              />
              <TeamMemberCard
                image={PersonFour}
                name="Lalə Allahverdiyeva"
                info="UX/Uİ Dizayner"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

interface TeamMemberCardProps {
  image: string;
  name: string;
  info: string;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({
  image,
  name,
  info,
}) => {
  return (
    <div className="personCard">
      <img className="personImage" src={image} alt={name} />
      <h3 className="personName">{name}</h3>
      <p className="personInfo">{info}</p>
    </div>
  );
};

export default OurTeamSectionComponent;
