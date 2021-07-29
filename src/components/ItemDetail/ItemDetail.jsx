import React, { useState, useContext } from "react";
import "./itemDetail.scss";
import { ItemCount } from "../ItemCount/itemCount";
import { CartContext } from "../../context/cartContext";

export const ItemDetail = ({ item }) => {
  const [state, setState] = useState(false);

  const { addItem } = useContext(CartContext);
  const { pictureUrl, title, price, stock } = item[0];

  const onAdd = (itemCount) => {
    setState(true);
    const itemInfo = item[0];
    const quantity = itemCount;
    addItem(itemInfo, quantity);
  };

  return (
    <div className="container">
      <div className="item-detail-container">
        <img className="item-detail-img" src={pictureUrl} alt="" />
        <div className="item-detail-description">
          <h3 className="item-detail-title">{title}</h3>
          <p className="item-detail-price">$ {price}</p>
          <div className="item-detail-count">
            <ItemCount onAdd={onAdd} state={state} stockItem={stock} />
          </div>
        </div>

        <div className="item-detail-p">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus ullam architecto, sed ut nesciunt eaque iure ea porro assumenda corrupti error molestias itaque similique dolores, repellendus maiores, autem nisi mollitia.</p>
      </div>
      </div>

      
    </div>
  );
};
