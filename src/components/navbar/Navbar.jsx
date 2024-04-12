// Style
import "./Navbar.css";

function Navbar({ users }) {
  return (
    <div className="Navbar">
      <h2 className="Nav-logo">User</h2>
      {users.length > 0 ? users.length : <h3>No Users :(</h3>}
    </div>
  );
}

export default Navbar;
