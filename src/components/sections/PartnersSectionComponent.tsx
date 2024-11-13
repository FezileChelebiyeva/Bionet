import React from "react";
import bp from "../../assets/images/bp.png";
import azAir from "../../assets/images/azerairle.png";
import irsad from "../../assets/images/irsad.png";
import kapital from "../../assets/images/kapital.png";
import rabite from "../../assets/images/rabitebank.png";
const PartnersSectionComponent = () => {
  return (
    <section className="partnersSectionComponent">
      <div className="container">
        <div className="partnersSectionRow">
          <div style={{ width: "100%" }}>
            <div className="partnersSectionHeader">
              <h2 className="title" style={{ color: "#fff" }}>
                Partnyorlar
              </h2>
              <p className="partnersSectionText">
                Helping leaders to create and transform products, brand
                experiences, and customer relationships.
              </p>
            </div>
            <div className="partnersSectionLogos">
              <div className="partnerLogo">
                <img className="logoImg" src={bp} alt="bp" />
              </div>
              <div className="partnerLogo">
                <img className="logoImg" src={azAir} alt="azAir" />
              </div>
              <div className="partnerLogo">
                <img className="logoImg" src={irsad} alt="irsad" />
              </div>
              <div className="partnerLogo">
                <img className="logoImg" src={kapital} alt="kapital" />
              </div>
              <div className="partnerLogo">
                <img className="logoImg" src={rabite} alt="rabite" />
              </div>
              <div className="partnerLogo"></div>
              <div className="partnerLogo">
                <img className="logoImg" src={kapital} alt="kapital" />
              </div>
              <div className="partnerLogo">
                <img className="logoImg" src={rabite} alt="rabite" />
              </div>
              <div className="partnerLogo">
                <img className="logoImg" src={bp} alt="bp" />
              </div>
              <div className="partnerLogo">
                <img className="logoImg" src={azAir} alt="azAir" />
              </div>
              <div className="partnerLogo">
                <img className="logoImg" src={irsad} alt="irsad" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default PartnersSectionComponent;
