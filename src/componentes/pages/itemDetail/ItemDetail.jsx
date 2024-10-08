import React from "react";
import CounterContainer from "../../common/counter/CounterContainer";

const ItemDetail = ({ item }) => {
  return (
    <div>
      <h1>{item.titulo}</h1>

      <CounterContainer onAdd={onAdd} stock={item.stock} />
    </div>
  );
};

export default ItemDetail;
