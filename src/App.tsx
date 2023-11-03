import { useEffect, useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import Header from "./components/Header";
import Card from "./components/Card";
import Dropdown from "./components/Dropdown";
import Loader from "./components/Loading";

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
  const [selectedRegion, setSelectedRegion] = useState("");
  const [countries, setCountries] = useState<Country[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  console.log(selectedRegion);

  useEffect(() => {
    const url = "https://restcountries.com/v3.1/all";
    const fetchCountries = async () => {
      try {
        setIsLoading(true);
        const res = await fetch(url);
        const data = await res.json();
        setCountries(data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCountries();
  }, []);

  return (
    <div>
      <Header />
      <main>
        <div className="container-filter">
          <div className="search-field">
            <IoSearchSharp className="search-icon" />
            <input
              className="search-input"
              type="text"
              placeholder="Search for a country..."
            />
          </div>
          <Dropdown setSelectedRegion={setSelectedRegion} />
        </div>
        <div className="container-grid">
          {isLoading ? (
            <Loader />
          ) : (
            countries.map((country, i) => (
              <Card
                key={i}
                image={country.flags.svg}
                title={country.name.official}
                population={country.population}
                region={country.region}
                capital={country.capital}
              />
            ))
          )}
        </div>
      </main>
    </div>
  );
}

export default App;
