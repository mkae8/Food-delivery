"use client";

import { Allfoot } from "@/components/menuComponents/AllFoot";
import Foot from "@/components/menuComponents/Foot";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const mockDbData = [
  {
    image: "/hool1.png",
    title: "Өглөөний хоол",
    price: "14,800₮",
    category: "soup",
  },
  {
    image: "/zairmag.png",
    title: "Зайрмаг",
    price: "4,800₮",
    category: "soup",
  },
  {
    image: "/hool2.png",
    title: "Өглөөний хоол",
    price: "24,800₮",
    category: "soup",
  },
  {
    image: "/hool3.png",
    title: "Breakfast",
    price: "124,800₮",
    category: "soup",
  },
  { image: "/hool4.png", title: "Торт", price: "54,800₮", category: "soup" },
  {
    image: "/hool5.png",
    title: "Oreo shake",
    price: "54,800₮",
    category: "breakfast",
  },
  {
    image: "/hool6.png",
    title: "Chocolate ",
    price: "54,800₮",
    category: "breakfast",
  },
  { image: "/hool7.png", title: "Yoghurt", price: "54,800₮" },
  { image: "/hool1.png", title: "Өглөөний хоол", price: "14,800₮" },
  { image: "/zairmag.png", title: "Зайрмаг", price: "4,800₮" },
  { image: "/hool2.png", title: "Өглөөний хоол", price: "24,800₮" },
  { image: "/hool3.png", title: "Breakfast", price: "124,800₮" },
];

const MenuPage: React.FC = () => {
  const [foods, setFoods] = useState<any>([]);
  const searchParams = useSearchParams();

  useEffect(() => {
    const categoryPath = searchParams.get("category");
    const getFoods = async () => {
      if (categoryPath) {
        // await
        // categoryoor avchirna foods. with body category=`${categoryPath}`
        // state SEt

        const categoriedFoods = mockDbData.filter((el) => {
          if (
            el.category?.toLocaleLowerCase() ===
            categoryPath.toLocaleLowerCase()
          ) {
            return true;
          } else {
            return false;
          }
        });

        setFoods([...categoriedFoods]);
      } else {
        //get backend all foods
        setFoods([...mockDbData]);
      }
    };

    getFoods();
  }, [searchParams]);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "start",
        gap: "10px",
        textAlign: "center",
        flexDirection: "column",
      }}
    >
      <Foot />

      <Allfoot foods={foods} />
    </div>
  );
};

export default MenuPage;
