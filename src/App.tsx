import { IoSearchSharp } from "react-icons/io5";
import Header from "./components/Header";

function App() {
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
          <select className="filter-region">
            <option disabled={true} value="">
              Filter by Region
            </option>
            {["Africa", "America", "Asia", "Europe", "Ocenia"].map((region) => (
              <option value={region}>{region}</option>
            ))}
          </select>
        </div>
        <div className="countries-grid">
          <div className="card">
            <img src="https://flagcdn.com/w320/de.png" />
            <h3>Germany</h3>
            <div className="country-grid-details">
              <p>
                <strong>Population: </strong>81,770,900
              </p>
              <p>
                <strong>Region: </strong>Europe
              </p>
              <p>
                <strong>Capital: </strong>Berlin
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
