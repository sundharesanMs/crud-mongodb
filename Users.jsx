import React, { useState } from "react";
import { Link } from "react-router-dom";
export default function Users() {
  const [users, setUsers] = useState([
    {
      Name: "subda",
      Email: "sundhar42@gmail.com",
      Age: 20,
    },
  ]);
  return (
    <div className="d-flex vh-100 bg-primary">
      <div>
        <button>
          <Link to="/create">add +</Link>
        </button>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>eamil</th>
              <th>age</th>
              <th>action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => {
              return (
                <tr>
                  <td>{user.Name}</td>
                  <td>{user.Email}</td>
                  <td>{user.Age}</td>
                  <td>
                    <button className="">
                      <Link to="/update">edit</Link>
                    </button>
                    <button>Delete</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
