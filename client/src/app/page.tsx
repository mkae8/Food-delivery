import React, { ChangeEvent } from "react";
import { Typography } from "@mui/material";
import { InfoCard } from "@/components/homepage/InfoCard";
import { FiBookOpen } from "react-icons/fi";

import { green } from "@mui/material/colors";
import HomeInfoCards from "@/components/homepage/InfoCards";

export default function Home() {
  return (
    <div>
      <div>
        <HomeInfoCards />
      </div>
    </div>
  );
}
