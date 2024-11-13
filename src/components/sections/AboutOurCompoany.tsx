import ImageCeo from "../../assets/images/personOne.png";

const AboutOurCompany = () => {
  return (
    <section className="aboutOurCompany">
      <div className="container">
        <h2 className="title" style={{ marginBottom: "60px" }}>
          Şirkətimiz haqqında
        </h2>
        <div className="row">
          <div className="aboutOurCompanyContentLeft">
            <h3 className="aboutOurCompanyContentLeftTitle">Biz kimik?</h3>
            <p
              className="aboutOurCompanyContentLeftText"
              style={{ marginBottom: "16px" }}
            >
              Şirkətimiz, Bionet uzun illərdir ki, müştərilərinə yüksək
              keyfiyyətli veb-saytların hazırlanması xidmətini təklif edir.
              Müxtəlif sənaye sahələrində fəaliyyət göstərən müəssisələrlə
              əməkdaşlıq edərək, onların onlayn mövcudluğunu artırmağa və
              bizneslərini rəqəmsal dünyaya adaptasiya etməyə kömək edirik
            </p>
            <p className="aboutOurCompanyContentLeftText">
              Şirkətimiz, Bionet uzun illərdir ki, müştərilərinə yüksək
              keyfiyyətli veb-saytların hazırlanması xidmətini təklif edir.
              Müxtəlif sənaye sahələrində fəaliyyət göstərən müəssisələrlə
              əməkdaşlıq edərək, onların onlayn mövcudluğunu artırmağa və
              bizneslərini rəqəmsal dünyaya adaptasiya etməyə kömək edirik
            </p>
          </div>
          <div className="aboutOurCompanyContentRight">
            <img
              className="aboutOurCompanyContentRightImg"
              src={ImageCeo}
              alt="a"
            />
            <h3 className="imgTitle">Midhət Həsənzadə</h3>
            <p className="imgText">CEO</p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AboutOurCompany;
