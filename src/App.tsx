import { useEffect, useState } from "react";
import Header from "./components/Header";
import Card from "./components/Card";
import Dropdown from "./components/Dropdown";
import Loader from "./components/Loader";
import ErrorMessage from "./components/ErrorMessage";
import Search from "./components/Search";
import { useTheme } from "./hooks/useTheme";

interface Country {
  name: {
    common: string;
  };
  flags: {
    svg: string;
  };
  population: number;
  region: string;
  capital: string;
}

const baseUrl = "https://restcountries.com/v3.1";

function App() {
  const { isDarkMode } = useTheme();
  const [query, setQuery] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("");
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
        <div className="container-grid">
          {isLoading ? (
            <Loader />
          ) : (
            <>
              {!error &&
                countries.map((country, i) => (
                  <Card
                    key={i}
                    image={country.flags.svg}
                    title={country.name.common}
                    population={country.population}
                    region={country.region}
                    capital={country.capital}
                  />
                ))}
              {error && <ErrorMessage message={error} />}
            </>
          )}
        </div>
      </main>
    </>
  );
}

export default App;
