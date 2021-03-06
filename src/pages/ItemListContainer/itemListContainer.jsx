import React, { useEffect, useState } from "react";
import "./itemListContainer.scss";
import { ItemList } from "../../components/ItemList/itemList";
import { useParams } from "react-router-dom";
import { getFireStore } from "../../firebase/firebase";

export const ItemListContainer = () => {
  const { id } = useParams();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState();

  useEffect(() => {
    
    setLoading(true);
    const db = getFireStore();
    const itemCollection = db.collection("products");
    const filterItems = id
      ? itemCollection.where("categoryId", "==", id)
      : itemCollection;

      setTimeout(() =>{
        filterItems
        .get()
        .then((querySnapshot) => {
          if (querySnapshot.size === 0) {
            console.log("No results!");
          }
          setItems(
            querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
          );
        })
        .catch((error) => {
          console.log("Error");
        })
        .finally(() => {
          setLoading(false);
        });
      }, 500)
    
  }, [id]);

  return (
    <div className="itemListContainer">
      <ItemList items={items} />
    </div>
  );
};
