import { useState } from "react";
import React from 'react';

const CreatePlanPage = () => {

  //state hook - 'useState'
  const [newItem, setNewItem] = useState("");
  const [items, setItems] = useState([]);

  //helper functions

  function addItem() {

    if (!newItem) {
      alert("Enter an item.")
      return;
    }
    const item = {
      id: Math.floor(Math.random() * 1000),
      value: newItem
    };

    setItems(oldList => [...oldList, item]);

    setNewItem("");

  }

  function deleteItem(id) {
    const newArray = items.filter(item => item.id !== id);
    setItems(newArray);
  }

  return (
    <div className="CreatePlanPage">

    <h1>CreatePlanPage</h1>

    <input
    type="text"
    placeholder='Add a plan'
    value={newItem}
    onChange={e => setNewItem(e.target.value)}
    />

    <button onClick={() => addItem()}>Add</button>

    <ul>
      {items.map(item => {
        return(
          <li key={item.id}>{item.value} <button onClick={() => deleteItem(item.id)}>❌</button></li>
        )
      })}
    </ul>

    </div>
  );
};

export default CreatePlanPage;
