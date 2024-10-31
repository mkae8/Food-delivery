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

interface Foods {
  _id: string;
  foodName: string;
}

type FoodContextType = {
foodNames: Foods[];
  setRefetch: Dispatch<SetStateAction<Boolean>>;
};

const FoodContext = createContext<FoodContextType | null>(null);

export const FoodProvider = ({ children }: PropsWithChildren) => {
  const [foodNames, setFoodNames] = useState<Foods[]>([]);
  const [refetch, setRefetch] = useState<Boolean>(false);

  useEffect(() => {
    const fetchFoods = async () => {
      try {
        const response = await axios.get<Foods[]>(
          `${process.env.BACKEND_URL}/foods-get`
        );
        console.log("hello");

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
