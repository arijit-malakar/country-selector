import { useEffect, useState } from "react";
import Header from "./components/Header";
import Card from "./components/Card";
import Dropdown from "./components/Dropdown";
import Loader from "./components/Loader";
import ErrorMessage from "./components/ErrorMessage";
import Search from "./components/Search";
import { useTheme } from "./hooks/useTheme";
import { useNavigation } from "./hooks/useNavigation";
import { Country } from "./@types/countryTypes";
import CountryDetail from "./components/CountryDetail";

const baseUrl = "https://restcountries.com/v3.1";

const App = () => {
  const { isDarkMode } = useTheme();
  const { currentPath } = useNavigation();
  const [query, setQuery] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("");
  const [countries, setCountries] = useState<Country[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  console.log(error);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        setIsLoading(true);
        setError("");
        let res;
        if (query) {
          res = await fetch(`${baseUrl}/name/${query}`);
        } else if (selectedRegion) {
          res = await fetch(`${baseUrl}/region/${selectedRegion}`);
        } else {
          res = await fetch(`${baseUrl}/all`);
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

    if (isDarkMode) {
      document.body.classList.add("dark-theme");
      document.body.classList.remove("light-theme");
    } else {
      document.body.classList.add("light-theme");
      document.body.classList.remove("dark-theme");
    }

    if (query.length > 0 && query.length < 3) {
      return;
    }

    fetchCountries();
  }, [isDarkMode, query, selectedRegion]);

  return (
    <>
      <Header />
      <main>
        {currentPath === "/" && (
          <>
            <div className="container-filter">
              <Search
                query={query}
                setQuery={setQuery}
                setSelectedRegion={setSelectedRegion}
              />
              <Dropdown
                selectedRegion={selectedRegion}
                setSelectedRegion={setSelectedRegion}
                setQuery={setQuery}
              />
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
        )}
        {currentPath.startsWith("/country/") ? (
          <CountryDetail />
        ) : (
          currentPath !== "/" && <p>Page Not Found ☹️</p>
        )}
      </main>
    </>
  );
};

export default App;
