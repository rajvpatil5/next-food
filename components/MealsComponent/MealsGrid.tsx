import React from "react";
import classes from "@/components/MealsComponent/MealsGrid.module.css";
import MealItem from "@/components/MealsComponent/MealItem";

export type Meals = {
  id: string;
  title: string;
  slug: string;
  image: string;
  summary: string;
  instructions: string;
  creator: string;
  creator_email: string;
};

const MealsGrid = ({ meals }: { meals: Meals[] }) => {
  return (
    <ul className={classes.meals}>
      {meals.map((meal) => (
        <li key={meal.id}>
          <MealItem {...meal} />
        </li>
      ))}
    </ul>
  );
};

export default MealsGrid;
