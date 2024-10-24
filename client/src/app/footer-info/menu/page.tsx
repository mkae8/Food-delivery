"use client";
import Foot from "@/components/menuComponents/Foot";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

// const steps: React.FC<{ clickHandler: () => void }>[] = [
//   Breakfast,
//   Soup,
//   Dessert,
//   MainCourse,
// ];

const category = ["123", "cxz", "hgjl"];
console.log(category);

const FoodMenu: React.FC = () => {
  // const [step, setStep] = useState(0);
  // const StepComponent = steps[step];
  const { push } = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const categoryPath = searchParams.get("category");
  console.log(categoryPath);

  const handleChange = (item: string) => {
    push(`${pathname}?category=${item}`);
  };

  console.log(handleChange);

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
