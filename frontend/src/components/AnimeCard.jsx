function AnimeCard({ anime }) {
  return (
    <div className="card">
      {anime.imagen ? (
        <img src={anime.imagen} alt={anime.titulo} />
      ) : (
        <div className="card-placeholder">{anime.titulo[0]}</div>
      )}
      <div className="card-body">
        <h3>{anime.titulo}</h3>
        <p className="card-genero">{anime.genero} · {anime.anio}</p>
        <p className="card-rating">★ {anime.calificacion}</p>
      </div>
    </div>
  );
}

export default AnimeCard;