import { useEffect, useState, Fragment } from "react";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { useNavigation } from "../hooks/useNavigation";
import Button from "./Button";
import { Country, CountryNames } from "../@types/countryTypes";
import Loader from "./Loader";
import ErrorMessage from "./ErrorMessage";
import formatNumber from "../utils/formatNumber";
import { baseURL } from "../contants";

const CountryDetail: React.FC = () => {
  const { currentPath, navigate } = useNavigation();
  const paramCountry = currentPath.split("country/")[1];
  const [country, setCountry] = useState<Country>();
  const [borderCountries, setBorderCountries] = useState<CountryNames[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchCountry = async () => {
      try {
        setIsLoading(true);
        setError("");
        const res = await fetch(
          `${baseURL}/name/${paramCountry}?fullText=true`
        );
        const data = await res.json();
        if (data.status === 404) throw new Error("Country not found");
        setCountry(data[0]);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCountry();
  }, [paramCountry]);

  useEffect(() => {
    const fetchBorderCountries = async () => {
      if (country?.borders) {
        try {
          const borderResponses = await Promise.all(
            country.borders.map(async (borderCode) => {
              const res = await fetch(
                `${baseURL}/alpha/${borderCode}?fields=name`
              );
              const data = await res.json();
              if (data.status === 404) throw new Error("Wrong country code!");
              return data.name;
            })
          );
          setBorderCountries(borderResponses);
        } catch (err) {
          console.error(err);
        }
      }
    };

    fetchBorderCountries();
  }, [country?.borders]);

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
      {isLoading ? (
        <Loader />
      ) : error ? (
        <ErrorMessage message={error} />
      ) : (
        <div className="container-detail">
          <div className="col-detail">
            <img className="country-img" src={country?.flags.svg} />
          </div>
          <div className="col-detail">
            <h1 className="heading-primary">{country?.name.common}</h1>
            <div className="info-text">
              <div className="info">
                <p>
                  <strong>Native Name: </strong>
                  {country?.name.nativeName &&
                    Object.values(country.name.nativeName)[0]?.common}
                </p>
                <p>
                  <strong>Population: </strong>
                  {formatNumber(country?.population || 0)}
                </p>
                <p>
                  <strong>Region: </strong>
                  {country?.region}
                </p>
                <p>
                  <strong>Sub Region: </strong>
                  {country?.subregion}
                </p>
                <p>
                  <strong>Capital: </strong>
                  {country?.capital}
                </p>
              </div>
              <div className="info">
                <p>
                  <strong>Top Level Domain: </strong>
                  {country?.tld}
                </p>
                <p>
                  <strong>Currencies: </strong>
                  {Object.values(country?.currencies || {}).map(
                    (currency, i, arr) => (
                      <Fragment key={i}>
                        {currency.name}
                        {i < arr.length - 1 && ", "}
                      </Fragment>
                    )
                  )}
                </p>
                <p>
                  <strong>Languages: </strong>
                  {Object.keys(country?.languages || {}).map(
                    (language, i, arr) => (
                      <Fragment key={i}>
                        {language}
                        {i < arr.length - 1 && ", "}
                      </Fragment>
                    )
                  )}
                </p>
              </div>
            </div>

            <div className="info-border">
              <strong>Border Countries: </strong>
              <div className="btn-group">
                {borderCountries.map((borderCountry, i) => (
                  <Button
                    key={i}
                    type="country"
                    onClick={() =>
                      navigate(`/country/${borderCountry.official}`)
                    }
                  >
                    {borderCountry.common}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CountryDetail;
