// Style
import "./UserList.css";

function UserList({ users, removeUser }) {
  console.log(users);
  return (
    <div className="UserList">
      {users.map((user) => {
        return (
          <>
            <div className="card-wrapper">
              <img src={user.ImageUrl} alt="" />
              <h3>
                {user.Name} {user.LastName} ,{user.age}
              </h3>
              <p>From:{user.from}</p>
              <p>Job: {user.job}</p>
              <p>Gender: {user.gender}</p>
              <button
                className="delite-Btn"
                onClick={() => removeUser(user.id)}
              >
                Delite
              </button>
            </div>
          </>
        );
      })}
    </div>
  );
}

export default UserList;
