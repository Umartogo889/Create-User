// Style
import { useState } from "react";
import "./NewUserList.css";
import { v4 as uuidv4 } from "uuid";
function NewUserList({ AddUser, setShowModal }) {
  const [user, setUser] = useState({
    id: uuidv4(),
    Name: "",
    LastName: "",
    age: null,
    ImageUrl: "",
    job: "",
    gender: "",
    from: "",
  });
  function addUserInfo(e) {
    e.preventDefault();
    AddUser(user);
    setShowModal(false);
  }

  return (
    <div className="overlay">
      <div className="modal">
        <h1>Create User</h1>
        <form onSubmit={addUserInfo}>
          <label>
            <span>Image Url:</span>
            <input
              type="url"
              required
              onChange={(e) => {
                setUser((prev) => {
                  return { ...prev, ImageUrl: e.target.value };
                });
              }}
            />
          </label>
          <label>
            <span>FirstName:</span>
            <input
              type="text"
              required
              onChange={(e) => {
                setUser((prev) => {
                  return { ...prev, Name: e.target.value };
                });
              }}
            />
          </label>
          <label>
            <span>LastName:</span>
            <input
              type="text"
              required
              onChange={(e) => {
                setUser((prev) => {
                  return { ...prev, LastName: e.target.value };
                });
              }}
            />
          </label>
          <label>
            <span>Age:</span>
            <input
              type="number"
              required
              onChange={(e) => {
                setUser((prev) => {
                  return { ...prev, age: e.target.value };
                });
              }}
            />
          </label>
          <label>
            <span>From:</span>
            <input
              type="text"
              required
              onChange={(e) => {
                setUser((prev) => {
                  return { ...prev, from: e.target.value };
                });
              }}
            />
          </label>
          <label>
            <span>Job:</span>
            <input
              type="text"
              required
              onChange={(e) => {
                setUser((prev) => {
                  return { ...prev, job: e.target.value };
                });
              }}
            />
          </label>
          <div className="Gender">
            <label>
              <span>Male</span>
              <input
                type="radio"
                name="gender"
                value={"Male"}
                onChange={(e) => {
                  setUser((prev) => {
                    return { ...prev, gender: e.target.value };
                  });
                }}
              />
            </label>
            <label>
              <span>FeMale</span>
              <input
                type="radio"
                name="gender"
                value={"FeMale"}
                onChange={(e) => {
                  setUser((prev) => {
                    return { ...prev, gender: e.target.value };
                  });
                }}
              />
            </label>
          </div>
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default NewUserList;
