import React, { useContext } from "react";
import MealsSummary from "./MealsSummary";
import DUMMY_MEALS from "../utils/mockData";
import MenuItem from "./MenuItem";
import cartContext from "../store/cartContext";

const Body = () => {
  return (
    <div className=" h-screen flex flex-col items-center p-1">
      <MealsSummary></MealsSummary>
      {DUMMY_MEALS.map((menu) => (
        <MenuItem
          key={menu.id}
          name={menu.name}
          description={menu.description}
          price={menu.price}
        />
      ))}
    </div>
  );
};

export default Body;
