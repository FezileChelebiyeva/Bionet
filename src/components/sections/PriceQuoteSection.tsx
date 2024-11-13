import Input from "components/ui/input";
import React, { useState } from "react";

const PriceQuoteSection = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Ad:", name);
    console.log("Numara:", number);
    console.log("Mesaj:", message);
  };

  return (
    <section className="priceQuoteSection">
      <div className="container">
        <div className="priceQuoteContent">
          <div className="priceQuoteTitle">
            <h2 className="title">Qiymət təklifi </h2>
            <p className="priceQuoteText">
              Vebsayt və ya mobil tətbiq üçün dizayn qiymətinin hesablanması
              istəyirsizsə bizə yazın və qiymət təklifi alın
            </p>
          </div>
          <div className="form-box">
            <form className="form" onSubmit={handleSubmit}>
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
                  id={"number"}
                  change={number}
                  setValue={setNumber}
                  type={"text"}
                  lable={"Əlaqə nömrəniz"}
                  placheHolder={"Əlaqə nömrənizi daxil edin"}
                />
              </div>
              <div className="formTextAreaGroup">
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
              </div>
              <div className="PriceQuoteFormBtnContainer">
                <button className="PriceQuoteFormBtn" type="submit">
                  Gönder
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
export default PriceQuoteSection;
