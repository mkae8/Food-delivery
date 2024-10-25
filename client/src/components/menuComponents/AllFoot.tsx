"use client";

export const Allfoot = ({ foods }: { foods: any }) => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: "10px",
      }}
    >
      {foods.map((src: any, index: number) => (
        <div key={index} style={{ display: "column", justifyContent: "start" }}>
          <img
            src={src.image}
            alt={src.title}
            style={{ height: "186px", width: "282px", borderRadius: "12px" }}
          />
          <div
            style={{
              width: "280px",
              display: "column",
              justifyContent: "start",
            }}
          >
            <p
              style={{
                marginLeft: "10px",
                textAlign: "start",
                fontWeight: "bold",
              }}
            >
              {src.title}
            </p>
            <p
              style={{
                marginLeft: "10px",
                textAlign: "start",
                fontWeight: "bold",
                color: "green",
              }}
            >
              {src.price}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};
