export const Allfoot = () => {
  const imageSources = [
    { image: "/hool1.png", title: "Өглөөний хоол", price: "14,800₮" },
    { image: "/zairmag.png", title: "Зайрмаг", price: "4,800₮" },
    { image: "/hool2.png", title: "Өглөөний хоол", price: "24,800₮" },
    { image: "/hool3.png", title: "Breakfast", price: "124,800₮" },
    { image: "/hool4.png", title: "Торт", price: "54,800₮" },
    { image: "/hool5.png", title: "Oreo shake", price: "54,800₮" },
    { image: "/hool6.png", title: "Chocolate ", price: "54,800₮" },
    { image: "/hool7.png", title: "Yoghurt", price: "54,800₮" },
    { image: "/hool1.png", title: "Өглөөний хоол", price: "14,800₮" },
    { image: "/zairmag.png", title: "Зайрмаг", price: "4,800₮" },
    { image: "/hool2.png", title: "Өглөөний хоол", price: "24,800₮" },
    { image: "/hool3.png", title: "Breakfast", price: "124,800₮" },
  ];

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: "10px",
      }}
    >
      {imageSources.map((src, index) => (
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
            </p>{" "}
          </div>
        </div>
      ))}
    </div>
  );
};
