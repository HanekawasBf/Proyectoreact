function Navbar({ onMenu }) {
  return (
    <header className="navbar">
      <button className="menu-btn" onClick={onMenu}>☰</button>
      <h1>AnimeCatálogo</h1>
      <p>Tus series favoritas</p>
    </header>
  );
}

export default Navbar;