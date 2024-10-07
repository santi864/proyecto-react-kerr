import React, { useEffect } from "react";
import { useState } from "react";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const getUsers = axios.get("https://jsonplaceholder.org/users");
    getUsers
      .then((res) => setUsers(res.data))
      .catch((error) => setUsers(error.data));
  }, []);

  console.log(users);

  return <div>Users</div>;
};

export default Users;
