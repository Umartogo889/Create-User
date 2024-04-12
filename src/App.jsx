//style
import "./App.css";
// hooks
import { useState } from "react";

// components
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import UserList from "./components/userList/UserList";
import NewUser from "./components/NewUser/NewUserList";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [users, setUsers] = useState([]);

  // remove user
  function removeUser(id) {
    const RemoveUser = users.filter((user) => {
      return user.id !== id;
    });
    setUsers(RemoveUser);
  }

  // add user
  function AddUser(user) {
    setUsers((prev) => {
      return [...prev, user];
    });
  }

  // close Modal
  function CloseModal(e) {
    if (e.keyCode === 27 || e.target.className === "overlay") {
      setShowModal(false);
    }
  }
  return (
    <>
      <div className="App" onClick={CloseModal} onKeyDown={CloseModal}>
        <Navbar users={users} />
        <main>
          <UserList users={users} removeUser={removeUser} />
        </main>
        {users.length <= 0 && <h1 className="No-Users">No Users :(</h1>}
        <button className="Create-btn" onClick={() => setShowModal(true)}>
          Create User
        </button>
        <Footer />
        {showModal && <NewUser AddUser={AddUser} setShowModal={setShowModal} />}
      </div>
    </>
  );
}

export default App;
