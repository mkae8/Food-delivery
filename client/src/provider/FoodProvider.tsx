"use client";

import axios from "axios";
import { toast } from "react-toastify";
import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import { PropsWithChildren } from "react";
import { FoodItem } from "../components/homepage/HomePageFoods";

type FoodContextType = {
  foodNames: FoodItem[];

  setRefetch: Dispatch<SetStateAction<Boolean>>;
};

const FoodContext = createContext<FoodContextType | null>(null);

export const FoodProvider = ({ children }: PropsWithChildren) => {
  const [foodNames, setFoodNames] = useState<FoodItem[]>([]);
  const [refetch, setRefetch] = useState<Boolean>(false);

  useEffect(() => {
    const fetchFoods = async () => {
      try {
        const response = await axios.get<FoodItem[]>(
          `https:/food-delivery-ily2.onrender.com/foods-get`
        );

        setFoodNames(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
        toast.error("Failed to fetch foods.");
      }
    };

    fetchFoods();
  }, [refetch]);

  return (
    <FoodContext.Provider value={{ foodNames, setRefetch }}>
      {children}
    </FoodContext.Provider>
  );
};

export const useFoods = () => {
  const food = useContext(FoodContext);
  if (!food) {
    throw new Error("useCategory must be used within a CategoryProvider");
  }
  return food;
};
