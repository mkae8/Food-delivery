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

interface Category {
  _id: string;
  categoryName: string;
}

type CategoryContextType = {
  categoryNames: Category[];
  setRefetch: Dispatch<SetStateAction<Boolean>>;
};

const CategoryContext = createContext<CategoryContextType | null>(null);

export const CategoryProvider = ({ children }: PropsWithChildren) => {
  const [categoryNames, setCategoryNames] = useState<Category[]>([]);
  const [refetch, setRefetch] = useState<Boolean>(false);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get<Category[]>(
          `${process.env.BACKEND_URL}/fetchCategory`
        );

        setCategoryNames(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
        toast.error("Failed to fetch categories.");
      }
    };

    fetchCategories();
  }, [refetch]);

  return (
    <CategoryContext.Provider value={{ categoryNames, setRefetch }}>
      {children}
    </CategoryContext.Provider>
  );
};

export const useCategory = () => {
  const category = useContext(CategoryContext);
  if (!category) {
    throw new Error("useCategory must be used within a CategoryProvider");
  }
  return category;
};
