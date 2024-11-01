import { SearchComponent } from "@/components/search/SearchComponent";
import axios from "axios";
import React from "react";

const page = async ({ params }: { params: { id: string } }) => {
  const { id } = params;

  const response = await axios.get(`${process.env.BACKEND_URL}/food-get/${id}`);

  return (
    <div>
      <SearchComponent food={response.data} />
    </div>
  );
};
export default page;
