import React, { useEffect } from "react";
import { usePaginate } from "../../utils/hooks/usePaginate";
import { Button } from "@mui/material";

const Todos = () => {
  const {
    data: posts,
    error,
    isLoading,
  } = fetch("https://jsonplaceholder.org/posts");

  const { currentArray, nextPage, prevPage, totalPages, currentPage } =
    usePaginate(posts, 10);

  return (
    <div>
      {currentArray.map((post) => (
        <h2 key={post.id}>{post.slug}</h2>
      ))}
    </div>
  );
};

export default Todos;
