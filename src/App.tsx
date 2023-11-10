import Header from "./components/Header";
import CountryDetail from "./components/CountryDetail";
import Home from "./pages/Home";
import { useNavigation } from "./hooks/useNavigation";

const App = () => {
  const { currentPath } = useNavigation();

  return (
    <>
      <Header />
      <main>
        {currentPath === "/" && <Home />}
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
