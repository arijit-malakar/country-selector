import { IoSearchSharp } from "react-icons/io5";

interface SearchProps {
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
}

function Search({ query, setQuery }: SearchProps) {
  return (
    <div className="search-field">
      <IoSearchSharp className="search-icon" />
      <input
        className="search-input"
        type="text"
        placeholder="Search for a country..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
}

export default Search;
