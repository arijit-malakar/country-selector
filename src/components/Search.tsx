import { IoSearchSharp } from "react-icons/io5";
import { useFilterSearch } from "../hooks/useFilterSearch";

// interface SearchProps {
//   query: string;
//   setQuery: React.Dispatch<React.SetStateAction<string>>;
//   setSelectedRegion: React.Dispatch<React.SetStateAction<string>>;
// }

const Search: React.FC = () => {
  const { query, setQuery, setSelectedRegion } = useFilterSearch();

  return (
    <div className="search-field">
      <IoSearchSharp className="search-icon" />
      <input
        className="search-input"
        type="text"
        placeholder="Search for a country..."
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          setSelectedRegion("");
        }}
      />
    </div>
  );
};

export default Search;
