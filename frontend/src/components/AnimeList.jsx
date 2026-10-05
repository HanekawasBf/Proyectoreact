import AnimeCard from "./AnimeCard";

function AnimeList({ animes }) {
  return (
    <div className="anime-list">
      {animes.map((anime) => (
        <AnimeCard key={anime.id} anime={anime} />
      ))}
    </div>
  );
}

export default AnimeList;