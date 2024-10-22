"use client";

import { Breakfast } from "@/components/menuComponents/Breakfast";
import { Dessert } from "@/components/menuComponents/Dessert";
import Foot from "@/components/menuComponents/Foot";
import { MainCourse } from "@/components/menuComponents/MainCourse";
import { Soup } from "@/components/menuComponents/Soup";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { useEffect, useState } from "react";

// const steps: React.FC<{ clickHandler: () => void }>[] = [
//   Breakfast,
//   Soup,
//   Dessert,
//   MainCourse,
// ];

const category = ["123", "cxz", "hgjl"];

const FoodMenu: React.FC = () => {
  // const [step, setStep] = useState(0);
  // const StepComponent = steps[step];
  const { push } = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const categoryPath = searchParams.get("category");

  const handleChange = (item: string) => {
    push(`${pathname}?category=${item}`);
  };

  // useEffect(() => {
  //   console.log("hello");
  // }, [categoryPath]);

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
      {/* <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "10px",
          textAlign: "center",
        }}
      >
        {category.map((item) => {
          return <h1 onClick={() => handleChange(item)}>{item}</h1>;
        })}
      </div>
      <h1>{categoryPath}</h1> */}
    </div>
  );
};

export default FoodMenu;
