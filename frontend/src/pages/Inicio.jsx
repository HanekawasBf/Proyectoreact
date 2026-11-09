import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import MenuFiltros from "../components/MenuFiltros";
import MejoresCalificados from "../components/MejoresCalificados";
import AnimeList from "../components/AnimeList";

function Inicio() {
  const [animes, setAnimes] = useState([]);
  const [error, setError] = useState(false);
  const [menuAbierto, setMenuAbierto] = useState(false);
  const [busqueda, setBusqueda] = useState("");
  const [genero, setGenero] = useState("Todos");
  const [orden, setOrden] = useState("ninguno");
  const [soloFavoritos, setSoloFavoritos] = useState(false);
  const [favoritos, setFavoritos] = useState(
    JSON.parse(localStorage.getItem("favoritos")) || []
  );

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/animes/")
      .then((res) => res.json())
      .then((datos) => setAnimes(datos))
      .catch(() => setError(true));
  }, []);

  function alternarFavorito(id) {
    let nuevos;
    if (favoritos.includes(id)) {
      nuevos = favoritos.filter((f) => f !== id);
    } else {
      nuevos = [...favoritos, id];
    }
    setFavoritos(nuevos);
    localStorage.setItem("favoritos", JSON.stringify(nuevos));
  }

  const mejores = [...animes]
    .filter((a) => a.calificacion > 0)
    .sort((a, b) => b.calificacion - a.calificacion)
    .slice(0, 5);

  const sinFiltros = busqueda === "" && genero === "Todos" && !soloFavoritos;

  let lista = animes.filter((a) =>
    a.titulo.toLowerCase().includes(busqueda.toLowerCase())
  );

  if (genero !== "Todos") {
    lista = lista.filter((a) => a.genero === genero);
  }

  if (soloFavoritos) {
    lista = lista.filter((a) => favoritos.includes(a.id));
  }

  if (orden === "calificacion") {
    lista.sort((a, b) => b.calificacion - a.calificacion);
  }
  if (orden === "anio") {
    lista.sort((a, b) => b.anio - a.anio);
  }

  return (
    <>
      <Navbar onMenu={() => setMenuAbierto(!menuAbierto)} />

      {menuAbierto && (
        <MenuFiltros
          onCerrar={() => setMenuAbierto(false)}
          busqueda={busqueda}
          setBusqueda={setBusqueda}
          genero={genero}
          setGenero={setGenero}
          orden={orden}
          setOrden={setOrden}
          soloFavoritos={soloFavoritos}
          setSoloFavoritos={setSoloFavoritos}
        />
      )}

      <main>
        {sinFiltros && <MejoresCalificados animes={mejores} />}

        <h2>Catálogo</h2>
        {error && <p className="vacio">No se pudo conectar con Django. ¿Está corriendo el servidor?</p>}
        {!error && lista.length === 0 && <p className="vacio">No se encontraron animes.</p>}
        <AnimeList animes={lista} favoritos={favoritos} onFavorito={alternarFavorito} />
      </main>
    </>
  );
}

export default Inicio;