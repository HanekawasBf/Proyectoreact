import Navbar from "./components/Navbar";
import AnimeList from "./components/AnimeList";
import animes from "./data/animes";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <h2>Catálogo</h2>
        <AnimeList animes={animes} />
      </main>
    </>
  );
}

export default App;