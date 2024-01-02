import React, { Suspense } from "react";
import SectionsProducts from "./SectionsProducts";
import { Product } from "@/prisma/models";

const ApparelSections: React.FC<{ products: Product[] }> = ({ products }) => (
  <Suspense fallback={<div>Loading...</div>}>
    <SectionsProducts products={products} />
  </Suspense>
);

export default ApparelSections;
