import React from "react";

import HeaderComponent from "../components/HeaderComponent";
import HomeSectionComponent from "components/sections/HomeSectionComponent";
import PartnersSectionComponent from "components/sections/PartnersSectionComponent";
import OurlatestProjectsSectionComponent from "components/sections/OurlatestProjectsSectionComponent";
import DevelopmentOfWebsites from "components/sections/DevelopmentOfWebsites";
import OurTeamSectionComponet from "components/sections/OurTeamSectionComponet";
import OurActivitySection from "components/sections/OurActivitySection";
import Footer from "components/Footer";

const Home = () => {
  return (
    <main >
      <HomeSectionComponent />
      <PartnersSectionComponent />
      <OurlatestProjectsSectionComponent />
      <DevelopmentOfWebsites />
      <OurTeamSectionComponet />
      <OurActivitySection />
    </main>
  );
};

export default Home;
