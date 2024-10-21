"use client";

import { AdminAdd } from "@/components/adminCrud/AdminAdd";
import { AddCategory } from "@/components/adminCrud/AddCategory";

const AdminCrud = () => {
  return (
    <>
      <AddCategory />
      <AdminAdd />
    </>
  );
};

export default AdminCrud;
