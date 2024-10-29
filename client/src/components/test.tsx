"use client";

import axios from "axios";
import { useState, useEffect } from "react";

interface FoodCategory {
  id: string;
  foodName: string;
  images: string;
  price: string;
  foodIngredients: string;
  foodCategory: string;
}

export const Test = () => {
  const [foodCategories, setFoodCategories] = useState<FoodCategory[]>([]);

  useEffect(() => {
    foodHandler();
  }, []);

  const foodHandler = async () => {
    try {
      const response = await axios.get<FoodCategory[]>(
        `${process.env.BACKEND_URL}/foods-get`
      );
      setFoodCategories(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div>
      <ul>
        {foodCategories.length > 0 ? (
          foodCategories.map((category) => (
            <li key={category.id} style={{ marginBottom: "20px" }}>
              <h3>{category.foodName}</h3>
              <img
                src={category.images}
                alt={category.foodName}
                style={{ width: "200px", height: "auto" }}
              />
              <p>{category.foodIngredients}</p>
              <p>{category.price}</p>
            </li>
          ))
        ) : (
          <p>No food categories available.</p>
        )}
      </ul>
    </div>
  );
};
