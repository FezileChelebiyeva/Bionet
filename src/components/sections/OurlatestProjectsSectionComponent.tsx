import React from "react";
import ProjectOne from "../../assets/images/projectOne.png";
import ProjectTwo from "../../assets/images/ProjectTwo.png";
import ProjectThree from "../../assets/images/ProjectThree.png";
import ProjectFour from "../../assets/images/ProjectFour.png";

const OurlatestProjectsSectionComponent = () => {
  return (
    <section className="OurlatestProjectsSectionComponent">
      <div className="container">
        <div className="OurlatestProjectsSectionContents">
          <div className="OurlatestProjectsSectionHeader">
            <h2 className="title">Son layihələrimiz</h2>
          </div>
          <div className="OurlatestProjectsSectionImage">
            <img className="OurLatestImage" src={ProjectOne} alt="ProjectOne" />
            <img className="OurLatestImage" src={ProjectTwo} alt="ProjectOne" />

            <img
              className="OurLatestImage"
              src={ProjectThree}
              alt="ProjectOne"
            />
            <img
              className="OurLatestImage"
              src={ProjectFour}
              alt="ProjectOne"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default OurlatestProjectsSectionComponent;
