import React from "react";
import classes from "@/app/meals/[mealSlug]/page.module.css";
import Image from "next/image";
import { getMeal } from "@/lib/meals";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { notFound } from "next/navigation";

const MealDetailsPage = ({ params }: { params: any }) => {
  const meal: any = getMeal(params.mealSlug);

  if (!meal) {
    notFound();
  }
  meal.instructions = meal.instructions.replace(/\n/g, "<br />");
  return (
    <>
      <header className={classes.header}>
        <div className={classes.image}>
          <Image fill src={`https://ik.imagekit.io/wt9s8djlb/${meal.image}`} alt={meal.title} />
        </div>
        <div className={classes.headerText}>
          <h1>{meal.title}</h1>
          <p className={classes.creator}>
            by <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
          </p>
          <p className={classes.summary}>{meal.summary}</p>
        </div>
      </header>
      <main>
        <p className={classes.instructions} dangerouslySetInnerHTML={{ __html: meal.instructions }}></p>
      </main>
    </>
  );
};

export default MealDetailsPage;
