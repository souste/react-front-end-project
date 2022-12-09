function Header({ user }) {
  return (
    <div>
      <h1 className="header">Stephen's Game Review Site</h1>
      <p className="header-login">Logged in as {user}</p>
    </div>
  );
}

export default Header;
