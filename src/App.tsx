import { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import Header from "./components/Header";
import Card from "./components/Card";
import Dropdown from "./components/Dropdown";

function App() {
  const [selectedRegion, setSelectedRegion] = useState("");
  console.log(selectedRegion);

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
        <div className="countries-grid">
          <Card
            image="https://flagcdn.com/de.svg"
            title="Germany"
            population="81,770,900"
            region="Europe"
            capital="Berlin"
          />
        </div>
      </main>
    </div>
  );
}

export default App;
