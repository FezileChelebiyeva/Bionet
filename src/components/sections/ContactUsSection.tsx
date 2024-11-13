import Input from "components/ui/input";
import { useState } from "react";
import phone from "../../assets/images/phoneImg.png";
import emailimg from "../../assets/images/messageImg.png";
import location from "../../assets/images/locationImg.png";
import messageimg from "../../assets/images/emialImG.png";
import GoogleMapReact from "google-map-react";

// Props'ları tanımlayın
interface AnyReactComponentProps {
  text: string;
  lat: number;
  lng: number;
}

// Bileşeni güncelleyin
const AnyReactComponent: React.FC<AnyReactComponentProps> = ({
  text,
  lat,
  lng,
}) => (
  <div
    style={{
      color: "white",
      background: "rgba(0, 0, 0, 0.5)",
      padding: "10px",
      borderRadius: "5px",
    }}
  >
    {text}
  </div>
);

const ContactUsSection = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const defaultProps = {
    center: {
      lat: 40.383702,
      lng: 49.8096241,
    },
    zoom: 16,
  };

  return (
    <section className="contactUs">
      <div className="container">
        <div className="contactUsTextandTitle">
          <h2 className="title">Bizimlə əlaqə</h2>
          <p className="contactUsText">
            Şirkətimiz, Bionet uzun illərdir ki, müştərilərinə yüksək
            keyfiyyətli veb-saytların hazırlanması xidmətini təklif edir.
            Müxtəlif sənaye sahələrində fəaliyyət göstərən müəssisələrlə
            əməkdaşlıq edərək, onların onlayn mövcudluğunu artırmağa kömək
            edirik.
          </p>
        </div>

        <div className="row">
          <div className="map">
            <GoogleMapReact
              bootstrapURLKeys={{
                key: "AIzaSyBFfToRdgpEw4XjqxkFHqlxJxi_E2WbBIk",
              }}
              defaultCenter={defaultProps.center}
              defaultZoom={defaultProps.zoom}
            ></GoogleMapReact>
          </div>
          <div className="writeUs">
            <h2 className="writeUsTitle">Sualınız var? Bizə yazın </h2>
            <form>
              <div className="formInput">
                <Input
                  id={"name"}
                  change={name}
                  setValue={setName}
                  type={"text"}
                  lable={"Ad və soyadınız"}
                  placheHolder={"Adınızı daxil edin"}
                />
                <Input
                  id={"surname"}
                  change={surname}
                  setValue={setSurname}
                  type={"text"}
                  lable={"Soyad"}
                  placheHolder={"Soyadınızı daxil edin"}
                />
              </div>
              <div className="formInput">
                <Input
                  id={"email"}
                  change={email}
                  setValue={setEmail}
                  type={"text"}
                  lable={"Email"}
                  placheHolder={"Emailinizi daxil edin"}
                />
                <Input
                  id={"number"}
                  change={number}
                  setValue={setNumber}
                  type={"text"}
                  lable={"Telefon"}
                  placheHolder={"Telefon nömrənizi daxil edin"}
                />
              </div>
              <div className="formTextArea">
                <label className="lableInput" htmlFor="message">
                  Necə bir məhsul istəyirsiz
                </label>
                <textarea
                  className="formTextarea"
                  placeholder="Məhsul haqqında"
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />
                <div className="PriceQuoteFormBtnContainer">
                  <button className="PriceQuoteFormBtn" type="submit">
                    Gönder
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="contactUsBottom">
          <div className="contactUsCardBox">
            <div className="contactUsCard">
              <div className="imgContactContainer">
                <img className="imgContact" src={phone} alt="img" />
              </div>
              <h2 className="contactUsCardtitle">Bizə zəng edin</h2>
              <p className="contactUsCardInfoText">(+99412) 310 07 09</p>
            </div>
            <div className="contactUsCard">
              <div className="imgContactContainer">
                <img className="imgContact" src={emailimg} alt="img" />
              </div>
              <h2 className="contactUsCardtitle">Email</h2>
              <p className="contactUsCardInfoText">info@bionet.az</p>
            </div>
            <div className="contactUsCard">
              <div className="imgContactContainer">
                <img className="imgContact" src={messageimg} alt="img" />
              </div>
              <h2 className="contactUsCardtitle">Sosial media</h2>
              <p className="contactUsCardInfoText">(+99412) 310 07 09</p>
            </div>
            <div className="contactUsCard">
              <div className="imgContactContainer">
                <img className="imgContact" src={location} alt="img" />
              </div>
              <h2 className="contactUsCardtitle">Ünvan</h2>
              <p className="contactUsCardInfoText">
                Abbasqulu Ağa Bakıxanov 95A, Bakı, Azərbaycan
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUsSection;
