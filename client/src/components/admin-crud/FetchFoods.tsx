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
const FoodList = () => {
  const [foodCategories, setFoodCategories] = useState<FoodCategory[]>([]);
  const fetchFoodCategories = async () => {
    try {
      const response = await axios.get<FoodCategory[]>(
        `https://food-delivery-lrqy.onrender.com/foods-get`
      );
      console.log(response);
      setFoodCategories(response.data);
    } catch (error) {
      console.log("Error fetching data", error);
    }
  };
  useEffect(() => {
    fetchFoodCategories();
  }, []);
  return (
    <div>
      <ul>
        {foodCategories.length > 0 ? (
          foodCategories.map((category) => (
            <div key={category.id} style={{ marginBottom: "20px" }}>
              <img
                src={category.images}
                alt={category.foodName}
                style={{
                  width: "282px",
                  height: "186px",
                  borderRadius: "10px",
                }}
              />
              <p
                style={{
                  fontWeight: "600",
                  fontStyle: "inherit",
                }}
              >
                {category.foodName}
              </p>

              <p
                style={{
                  color: "#18BA51",
                  fontWeight: "600",
                  fontStyle: "inherit",
                }}
              >
                {category.price}₮
              </p>
            </div>
          ))
        ) : (
          <p>No food categories available.</p>
        )}
      </ul>
    </div>
  );
};
export default FoodList;
