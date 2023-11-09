import { MdOutlineKeyboardBackspace } from "react-icons/md";

const CountryDetail: React.FC = () => {
  return (
    <>
      <div className="container-btn">
        <button className="btn btn-with-icon btn-back">
          <span className="btn-icon-wrapper">
            <MdOutlineKeyboardBackspace className="back-icon" />
          </span>
          Back
        </button>
      </div>
      <div className="container-detail">
        <div className="col-detail">
          <img className="country-img" src="https://flagcdn.com/in.svg" />
        </div>
        <div className="col-detail">
          <h1 className="heading-primary">Belgium</h1>
          <div className="info-text">
            <div className="info">
              <p>
                <strong>Native Name: </strong>
                Belgie
              </p>
              <p>
                <strong>Population: </strong>
                11,319,511
              </p>
              <p>
                <strong>Region: </strong>
                Europe
              </p>
              <p>
                <strong>Sub Region: </strong>
                Western Europe
              </p>
              <p>
                <strong>Capital: </strong>
                Brussels
              </p>
            </div>
            <div className="info">
              <p>
                <strong>Top Level Domain: </strong>
                .be
              </p>
              <p>
                <strong>Currencies: </strong>
                Euro
              </p>
              <p>
                <strong>Languages: </strong>
                Dutch, French, German
              </p>
            </div>
          </div>

          <div className="info-border">
            <strong>Border Countries: </strong>
            <div className="btn-group">
              <button className="btn btn-country">France</button>
              <button className="btn btn-country">Germany</button>
              <button className="btn btn-country">Netherlands</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CountryDetail;
