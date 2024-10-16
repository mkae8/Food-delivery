"use client";
import React, { ChangeEvent } from "react";
import { Typography } from "@mui/material";
import { InfoCard } from "@/components/homepage/InfoCard";
import { FiBookOpen } from "react-icons/fi";
import { MdOutlineWatchLater } from "react-icons/md";
import { PiBowlFood } from "react-icons/pi";

import { green } from "@mui/material/colors";
import { CgEnter } from "react-icons/cg";

export default function HomeInfoCards() {
  return (
    <div
      style={{
        display: "flex",
        gap: "18px",
        justifyContent: "center",
        marginTop: "20px",
      }}
    >
      <div>
        <InfoCard
          Icon={() => <FiBookOpen style={{ width: "30px", height: "30px" }} />}
          text_main="Хүргэлтийн төлөв хянах"
          text_description="Захиалга бэлтгэлийн явцыг хянах"
        />
      </div>
      <div>
        <InfoCard
          Icon={() => (
            <MdOutlineWatchLater style={{ width: "30px", height: "30px" }} />
          )}
          text_main="Шуурхай хүргэлт"
          text_description="Захиалга бэлтгэлийн явцыг хянах"
        />
      </div>
      <div>
        <InfoCard
          Icon={() => <PiBowlFood style={{ width: "30px", height: "30px" }} />}
          text_main="Эрүүл, баталгаат орц"
          text_description="Захиалга бэлтгэлийн явцыг хянах"
        />
      </div>
      <div>
        <InfoCard
          Icon={() => <FiBookOpen style={{ width: "30px", height: "30px" }} />}
          text_main="Хоолны өргөн сонголт"
          text_description="Захиалга бэлтгэлийн явцыг хянах"
        />
      </div>
    </div>
  );
}
