import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { useNavigation } from "../hooks/useNavigation";
import Button from "./Button";

const CountryDetail: React.FC = () => {
  const { navigate } = useNavigation();

  return (
    <>
      <div className="container-btn">
        <Button
          type="back"
          icon={<MdOutlineKeyboardBackspace className="back-icon" />}
          onClick={() => navigate("/")}
        >
          Back
        </Button>
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
              {["France", "Germany", "Netherlands"].map((country, i) => (
                <Button
                  key={i}
                  type="country"
                  onClick={() => navigate(`/country/${country}`)}
                >
                  {country}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CountryDetail;
