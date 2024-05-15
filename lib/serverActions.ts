"use server";

import { redirect } from "next/navigation";
import { saveMeal } from "./meals";
import { revalidatePath } from "next/cache";

export const shareMeal = async (formData: { get: (arg0: string) => any }) => {
  const mealData = {
    title: formData.get("title"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    image: formData.get("image"),
    creator: formData.get("name"),
    creator_email: formData.get("email"),
  };
  await saveMeal(mealData);
  console.log(mealData);
  revalidatePath("/meals"); //This function tells next js to clear cache for that path and refetch data
  redirect("/meals");
};
