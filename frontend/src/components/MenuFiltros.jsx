/**
 * Permite al usuario:
 *  - Buscar animes por titulo.
 *  - Filtrar por genero.
 *  - Ordenar por calificacion o por anio.
 *  - Limpiar todos los filtros de una sola vez.
 *
 * Props:
 *  @param {Function} onCerrar     
 *  @param {string}   busqueda     
 *  @param {Function} setBusqueda  
 *  @param {string}   genero       
 *  @param {Function} setGenero    
 *  @param {string}   orden        
 *  @param {Function} setOrden     
 */
function MenuFiltros({ onCerrar, busqueda, setBusqueda, genero, setGenero, orden, setOrden }) {
  // Opciones disponibles para el selector de genero.
  // "Todos" es el valor especial que desactiva el filtro por genero en App.
  const generos = ["Todos", "Aventura", "Suspenso", "Acción", "Ciencia ficción", "Romance", "Deportes"];

// Restablece los tres filtros a sus valores iniciales.
  function limpiar() {
    setBusqueda("");      
    setGenero("Todos");   
    setOrden("ninguno");  
  }

  return (
    <aside className="panel">
      <div className="panel-top">
        <h2>Filtros</h2>
        <button className="panel-close" onClick={onCerrar}>✕</button>
      </div>

      {/* Campo de busqueda por titulo.
            su valor viene de "busqueda" y cada tecla actualiza el estado.*/}
      <label>Buscar por título</label>
      <input
        type="text"
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
        placeholder="Ej: Death Note"
      />

      {/* Selector de genero.
        Las opciones se generan recorriendo el arreglo "generos";
        "key" ayuda a React a identificar cada <option>. */}
      <label>Género</label>
      <select value={genero} onChange={(e) => setGenero(e.target.value)}>
        {generos.map((g) => (
          <option key={g} value={g}>{g}</option>
        ))}
      </select>

      {/* Selector de ordenamiento.
        Los "value" deben coincidir con los que App evalua en el ordenamiento:
        "ninguno", "calificacion" y "anio". */}
      <label>Ordenar por</label>
      <select value={orden} onChange={(e) => setOrden(e.target.value)}>
        <option value="ninguno">Sin ordenar</option>
        <option value="calificacion">Mejor calificación</option>
        <option value="anio">Más reciente</option>
      </select>


      <button className="panel-clear" onClick={limpiar}>Limpiar filtros</button>
    </aside>
  );
}

export default MenuFiltros;