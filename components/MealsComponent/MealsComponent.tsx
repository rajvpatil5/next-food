import React, { Suspense } from "react";
import classes from "@/components/MealsComponent/MealsComponent.module.css";
import loadingClasses from "@/app/meals/loading.module.css";
import Link from "next/link";
import MealsGrid, { Meals } from "@/components/MealsComponent/MealsGrid";
import { getMeals } from "@/lib/meals";

const MealsContainer = async () => {
  const meals = await getMeals();
  return <MealsGrid meals={meals} />;
};

const MealsComponent = () => {
  return (
    <div>
      <header className={classes.header}>
        <h1>
          Delicious meals created <span className={classes.highlight}>by you</span>
        </h1>
        <p>Choose your favorite recipe and cook it yourself. It is easy and fun!!!</p>
        <p>
          <Link className="underline" href={"/meals/share"}>
            Share your favorite recipe
          </Link>
        </p>
      </header>
      <main className={classes.main}>
        <Suspense fallback={<div className={loadingClasses.loading}>loading...</div>}>
          <MealsContainer />
        </Suspense>
      </main>
    </div>
  );
};

export default MealsComponent;
