import React, { useEffect } from "react";
import { useState } from "react";

const Comments = () => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const getComments = fetch("https://jsonplaceholder.org/users");
    getComments
      .then((res) => setComments(res.data))
      .catch((error) => setComments(error.data));
  }, []);

  console.log(comments);

  return <div>Comments</div>;
};

export default Users;
