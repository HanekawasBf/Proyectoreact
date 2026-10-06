import { useState } from "react";

function AnimeCard({ anime }) {
  const [abierto, setAbierto] = useState(false);

  return (
    <div className="card" onClick={() => setAbierto(!abierto)}>
      {anime.imagen ? (
        <img src={anime.imagen} alt={anime.titulo} />
      ) : (
        <div className="card-placeholder">{anime.titulo[0]}</div>
      )}
      <div className="card-body">
        <span className="badge">{anime.genero}</span>
        <h3>{anime.titulo}</h3>
        <p className="card-anio">Estreno: {anime.anio}</p>
        <p className="card-rating">⭐ {anime.calificacion} / 10</p>
        {abierto && <p className="card-sinopsis">{anime.sinopsis}</p>}
        <p className="card-hint">{abierto ? "Ocultar sinopsis" : "Ver sinopsis"}</p>
      </div>
    </div>
  );
}

export default AnimeCard;