"use client";

import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";

export const HomePageFoods = () => {
  const saleFoods = [
    {
      image: "/hool1.png",
      title: "Өглөөний хоол",
      SalePrice: "14,800₮",
      price: "16,800₮",
      percent: "20%",
    },
    {
      image: "/zairmag.png",
      title: "Зайрмаг",
      SalePrice: "4,800₮",
      price: "6,800₮",
      percent: "20%",
    },
    {
      image: "/hool2.png",
      title: "Өглөөний хоол",
      SalePrice: "24,800₮",
      price: "26,800₮",
      percent: "20%",
    },
    {
      image: "/hool3.png",
      title: "Breakfast",
      SalePrice: "24,800₮",
      price: "26,800₮",
      percent: "20%",
    },
  ];
  const undsenHool = [
    {
      image: "/pizza.png",
      title: "Main Pizza ",
      price: "34,800₮",
    },
    {
      image: "/tart.png",
      title: "Food tart",
      price: "22,800₮",
    },
    {
      image: "/breakfast.png",
      title: "Өглөөний хоол",
      price: "14,800₮",
    },
    {
      image: "/soup.png",
      title: "Зутан шөл",
      price: "17,800₮",
    },
  ];
  const Zuush = [
    {
      image: "/chicken.png",
      title: "Чихэрлэг тахиа",
      price: "24,800₮",
    },
    {
      image: "/lunch.png",
      title: "Lunch",
      price: "24,800₮",
    },
    {
      image: "/sendvich.png",
      title: "Сэндвич",
      price: "14,800₮",
    },
    {
      image: "/applePie.png",
      title: "Apple pie",
      price: "34,800₮",
    },
  ];
  const Amttan = [
    {
      image: "/cake.png",
      title: "Торт",
      price: "54,800₮",
    },
    {
      image: "/oreoShake.png",
      title: "Oreo shake",
      price: "14,800₮",
    },
    {
      image: "/chocolate.png",
      title: "Chocolate ",
      price: "14,800₮",
    },
    {
      image: "/yoghurt.png",
      title: "Yoghurt",
      price: "14,800₮",
    },
  ];
  return (
    <>
      <Container
        sx={{
          width: "1200px",
          height: "1616px",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          gap: "50px",
          marginTop: "122px",
        }}
      >
        <Box
          sx={{
            height: "344px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "1190px",
              height: "64px",
              marginLeft: "10px",
            }}
          >
            <Box display="flex" flexDirection="column">
              <Typography
                sx={{
                  fontSize: "22px",
                  fontWeight: "700",
                  display: "flex",
                  gap: "10px",
                  alignItems: "center",
                }}
              >
                <Image
                  style={{ display: "flex", alignItems: "center" }}
                  src={"/image copy 6.png"}
                  width={20}
                  height={20}
                  priority
                  alt="Sale"
                />
                Хямдралтай
              </Typography>
            </Box>
            <Typography
              sx={{
                color: "#18BA51",
                display: "flex",
                gap: "10px",
                alignItems: "center",
                paddingLeft: "100px",
                fontSize: "13px",
              }}
            >
              Бүгдийг харах
              <Image
                style={{ display: "flex", alignItems: "center" }}
                src={"/bullet.png"}
                width={6}
                height={12}
                priority
                alt="Sale"
              />
            </Typography>
          </Box>
          <Box
            sx={{
              display: "grid",
              width: "1200px",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "20px",
              marginTop: "20px",
            }}
          >
            {saleFoods.map((src, index) => (
              <Box
                key={index}
                sx={{ display: "column", justifyContent: "start" }}
              >
                <Box>
                  <img
                    src={src.image}
                    alt={src.title}
                    style={{
                      height: "190px",
                      width: "295px",
                      borderRadius: "12px",
                      position: "absolute",
                      objectFit: "cover",
                    }}
                  />
                  <Typography
                    sx={{
                      display: "flex",
                      position: "absolute",
                      width: "60px",
                      height: "30px",
                      justifyContent: "center",
                      alignItems: "center",
                      marginLeft: "200px",
                      marginTop: "20px",
                      textAlign: "start",
                      fontWeight: "bold",
                      color: "white",
                      borderRadius: "20px",
                      border: "1px solid white",
                      backgroundColor: "#18BA51",
                    }}
                  >
                    {src.percent}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    width: "280px",
                    display: "column",
                    justifyContent: "start",
                    marginTop: "190px",
                  }}
                >
                  <Typography
                    sx={{
                      marginLeft: "10px",
                      textAlign: "start",
                      fontWeight: "bold",
                    }}
                  >
                    {src.title}
                  </Typography>
                  <Box>
                    <Typography
                      sx={{
                        marginLeft: "10px",
                        textAlign: "start",
                        fontWeight: "bold",
                        color: "#18BA51",
                      }}
                    >
                      {src.SalePrice}
                    </Typography>
                    <Typography
                      sx={{
                        marginLeft: "10px",
                        textAlign: "start",
                        fontWeight: "bold",
                        textDecorationLine: "line-through",
                      }}
                    >
                      {src.price}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
        {/* hoyr */}
        <Box
          sx={{
            height: "344px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "1190px",
              height: "64px",
              marginLeft: "10px",
            }}
          >
            <Box display="flex" flexDirection="column">
              <Typography
                sx={{
                  fontSize: "22px",
                  fontWeight: "700",
                  display: "flex",
                  gap: "10px",
                  alignItems: "center",
                }}
              >
                <Image
                  style={{ display: "flex", alignItems: "center" }}
                  src={"/image copy 6.png"}
                  width={20}
                  height={20}
                  priority
                  alt="Sale"
                />
                Үндсэн хоол
              </Typography>
            </Box>
            <Typography
              sx={{
                color: "#18BA51",
                display: "flex",
                gap: "10px",
                alignItems: "center",
                paddingLeft: "100px",
                fontSize: "13px",
              }}
            >
              Бүгдийг харах
              <Image
                style={{ display: "flex", alignItems: "center" }}
                src={"/bullet.png"}
                width={6}
                height={12}
                priority
                alt="Sale"
              />
            </Typography>
          </Box>
          <Box
            sx={{
              display: "grid",
              width: "1200px",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "20px",
              marginTop: "20px",
            }}
          >
            {undsenHool.map((src, index) => (
              <Box
                key={index}
                sx={{ display: "column", justifyContent: "start" }}
              >
                <Box>
                  <img
                    src={src.image}
                    alt={src.title}
                    style={{
                      height: "190px",
                      width: "280px",
                      borderRadius: "12px",
                      objectFit: "cover",
                    }}
                  />
                </Box>
                <Box
                  sx={{
                    width: "280px",
                    display: "column",
                    justifyContent: "start",
                  }}
                >
                  <Typography
                    sx={{
                      marginLeft: "10px",
                      textAlign: "start",
                      fontWeight: "bold",
                    }}
                  >
                    {src.title}
                  </Typography>
                  <Box>
                    <Typography
                      sx={{
                        marginLeft: "10px",
                        textAlign: "start",
                        fontWeight: "bold",
                        color: "#18BA51",
                      }}
                    >
                      {src.price}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
        {/* gurav */}
        <Box
          sx={{
            height: "344px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "1190px",
              height: "64px",
              marginLeft: "10px",
            }}
          >
            <Box display="flex" flexDirection="column">
              <Typography
                sx={{
                  fontSize: "22px",
                  fontWeight: "700",
                  display: "flex",
                  gap: "10px",
                  alignItems: "center",
                }}
              >
                <Image
                  style={{ display: "flex", alignItems: "center" }}
                  src={"/image copy 6.png"}
                  width={20}
                  height={20}
                  priority
                  alt="Sale"
                />
                Салад ба зууш
              </Typography>
            </Box>
            <Typography
              sx={{
                color: "#18BA51",
                display: "flex",
                gap: "10px",
                alignItems: "center",
                paddingLeft: "100px",
                fontSize: "13px",
              }}
            >
              Бүгдийг харах
              <Image
                style={{ display: "flex", alignItems: "center" }}
                src={"/bullet.png"}
                width={6}
                height={12}
                priority
                alt="Sale"
              />
            </Typography>
          </Box>
          <Box
            sx={{
              display: "grid",
              width: "1200px",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "20px",
              marginTop: "20px",
            }}
          >
            {Zuush.map((src, index) => (
              <Box
                key={index}
                sx={{ display: "column", justifyContent: "start" }}
              >
                <Box>
                  <img
                    src={src.image}
                    alt={src.title}
                    style={{
                      height: "190px",
                      width: "280px",
                      borderRadius: "12px",
                      objectFit: "cover",
                    }}
                  />
                </Box>
                <Box
                  sx={{
                    width: "280px",
                    display: "column",
                    justifyContent: "start",
                  }}
                >
                  <Typography
                    sx={{
                      marginLeft: "10px",
                      textAlign: "start",
                      fontWeight: "bold",
                    }}
                  >
                    {src.title}
                  </Typography>
                  <Box>
                    <Typography
                      sx={{
                        marginLeft: "10px",
                        textAlign: "start",
                        fontWeight: "bold",
                        color: "#18BA51",
                      }}
                    >
                      {src.price}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
        {/* duruv */}
        <Box
          sx={{
            height: "344px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "1190px",
              height: "64px",
              marginLeft: "10px",
            }}
          >
            <Box display="flex" flexDirection="column">
              <Typography
                sx={{
                  fontSize: "22px",
                  fontWeight: "700",
                  display: "flex",
                  gap: "10px",
                  alignItems: "center",
                }}
              >
                <Image
                  style={{ display: "flex", alignItems: "center" }}
                  src={"/image copy 6.png"}
                  width={20}
                  height={20}
                  priority
                  alt="Sale"
                />
                Амттан
              </Typography>
            </Box>
            <Typography
              sx={{
                color: "#18BA51",
                display: "flex",
                gap: "10px",
                alignItems: "center",
                paddingLeft: "100px",
                fontSize: "13px",
              }}
            >
              Бүгдийг харах
              <Image
                style={{ display: "flex", alignItems: "center" }}
                src={"/bullet.png"}
                width={6}
                height={12}
                priority
                alt="Sale"
              />
            </Typography>
          </Box>
          <Box
            sx={{
              display: "grid",
              width: "1200px",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "20px",
              marginTop: "20px",
            }}
          >
            {Amttan.map((src, index) => (
              <Box
                key={index}
                sx={{ display: "column", justifyContent: "start" }}
              >
                <Box>
                  <img
                    src={src.image}
                    alt={src.title}
                    style={{
                      height: "190px",
                      width: "280px",
                      borderRadius: "12px",
                      objectFit: "cover",
                    }}
                  />
                </Box>
                <Box
                  sx={{
                    width: "280px",
                    display: "column",
                    justifyContent: "start",
                  }}
                >
                  <Typography
                    sx={{
                      marginLeft: "10px",
                      textAlign: "start",
                      fontWeight: "bold",
                    }}
                  >
                    {src.title}
                  </Typography>
                  <Box>
                    <Typography
                      sx={{
                        marginLeft: "10px",
                        textAlign: "start",
                        fontWeight: "bold",
                        color: "#18BA51",
                      }}
                    >
                      {src.price}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </>
  );
};
