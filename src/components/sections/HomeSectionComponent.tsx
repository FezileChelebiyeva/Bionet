import homeScreenLeftImg from "../../assets/images/homeSectionImage.png";

const HomeSectionComponent = () => {
  return (
    <section className="homeSection">
      <div className="container">
        <div className="row">
          <div className="homeSectionLeft">
            <h1 className="homeSectionTitle">Yeni nəsil, yeni həllər</h1>
            <p className="homeSectionText">
              Together, We Create the Future at Bionet. We design and develop
              digital products that elevate your brand and connect with your
              audience. Let’s innovate together.
            </p>
            <button className="homeSectionBtn">BiZƏ YAZIN</button>
          </div>
          <div className="homeSectionRight">
            <img src={homeScreenLeftImg} alt="homeScreenLeftImg" />
          </div>
        </div>
      </div>
    </section>
  );
};
export default HomeSectionComponent;
