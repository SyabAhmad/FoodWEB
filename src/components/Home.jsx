import React, { useState } from "react";
import pizza from "../assets/pizza.png";
import "./Home.css";
const Home = () => {
  const [value, setValue] = useState(0);
  const RemoveItem = () => {
    setValue((prevItem) => {
      return (prevItem -= 1);
    });
  };
  const AddItem = () => {
    setValue((prevItem) => {
      return (prevItem += 1);
    });
  };
  return (
    <>
      <div className="panel">
        <img src={pizza} alt="this is image" />
        <div className="cartPanel">
          <button onClick={RemoveItem}>Remove</button>
          <span>{value}</span>
          <button onClick={AddItem}>Add</button>
        </div>
      </div>
    </>
  );
};

export default Home;
