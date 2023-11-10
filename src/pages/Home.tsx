import { useEffect, useState } from "react";
import Dropdown from "../components/Dropdown";
import Search from "../components/Search";
import { useFilterSearch } from "../hooks/useFilterSearch";
import { Country } from "../@types/countryTypes";
import { baseURL } from "../contants";
import Loader from "../components/Loader";
import ErrorMessage from "../components/ErrorMessage";
import Card from "../components/Card";

const Home = () => {
  const { query, selectedRegion } = useFilterSearch();
  const [countries, setCountries] = useState<Country[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        setIsLoading(true);
        setError("");
        let res;
        if (query) {
          res = await fetch(`${baseURL}/name/${query}`);
        } else if (selectedRegion) {
          res = await fetch(`${baseURL}/region/${selectedRegion}`);
        } else {
          res = await fetch(`${baseURL}/all`);
        }
        const data = await res.json();
        if (data.status === 404) throw new Error("Country not found");
        setCountries(data);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setIsLoading(false);
      }
    };

    if (query.length > 0 && query.length < 3) {
      return;
    }

    fetchCountries();
  }, [query, selectedRegion]);

  return (
    <>
      <div className="container-filter">
        <Search />
        <Dropdown />
      </div>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <ErrorMessage message={error} />
      ) : (
        <div className="container-grid">
          {countries.map((country, i) => (
            <Card
              key={i}
              to={country.name.official}
              image={country.flags.svg}
              title={country.name.common}
              population={country.population}
              region={country.region}
              capital={country.capital}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default Home;
