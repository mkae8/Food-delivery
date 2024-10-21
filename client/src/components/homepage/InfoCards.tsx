"use client";
import React from "react";

import { InfoCard } from "@/components/homepage/InfoCard";
import { FiBookOpen } from "react-icons/fi";
import { MdOutlineWatchLater } from "react-icons/md";
import { PiBowlFood } from "react-icons/pi";

const information = [
  {
    Icon: <FiBookOpen style={{ width: "30px", height: "30px" }} />,
    text_main: "Хүргэлтийн төлөв хянах",
    text_description: "Захиалга бэлтгэлийн явцыг хянах",
  },
  {
    Icon: <MdOutlineWatchLater style={{ width: "30px", height: "30px" }} />,
    text_main: "Шуурхай хүргэлт",
    text_description: "Захиалга бэлтгэлийн явцыг хянах",
  },
  {
    Icon: <PiBowlFood style={{ width: "30px", height: "30px" }} />,
    text_main: "Эрүүл, баталгаат орц",
    text_description: "Захиалга бэлтгэлийн явцыг хянах",
  },
  {
    Icon: <FiBookOpen style={{ width: "30px", height: "30px" }} />,
    text_main: "Хоолны өргөн сонголт",
    text_description: "Захиалга бэлтгэлийн явцыг хянах",
  },
];
export default function HomeInfoCards() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        marginTop: "122px",
      }}
    >
      {information.map((el, index) => {
        return (
          <InfoCard
            key={index}
            Icon={el.Icon}
            text_main={el.text_main}
            text_description={el.text_description}
          />
        );
      })}
    </div>
  );
}
