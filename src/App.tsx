import { useEffect, useState } from "react";
import Header from "./components/Header";
import Card from "./components/Card";
import Dropdown from "./components/Dropdown";
import Loader from "./components/Loading";
import ErrorMessage from "./components/ErrorMessage";
import Search from "./components/Search";

interface Country {
  name: {
    official: string;
  };
  flags: {
    svg: string;
  };
  population: number;
  region: string;
  capital: string;
}

function App() {
  const [query, setQuery] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("");
  const [countries, setCountries] = useState<Country[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  console.log(selectedRegion);

  useEffect(() => {
    const baseUrl = "https://restcountries.com/v3.1";
    const fetchCountries = async () => {
      try {
        setIsLoading(true);
        setError("");
        let res;
        if (query) {
          res = await fetch(`${baseUrl}/name/${query}`);
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

    if (query.length > 0 && query.length < 3) {
      return;
    }

    fetchCountries();
  }, [query]);

  return (
    <div>
      <Header />
      <main>
        <div className="container-filter">
          <Search query={query} setQuery={setQuery} />
          <Dropdown setSelectedRegion={setSelectedRegion} />
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
                    title={country.name.official}
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
    </div>
  );
}

export default App;
