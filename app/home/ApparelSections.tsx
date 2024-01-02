import React, { Suspense } from "react";
import SectionsProducts from "./SectionsProducts";
import getApparelSectionsData from "@/actions/getApparelSections";

const ApparelSections: React.FC = async () => {
  const products = await getApparelSectionsData();

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SectionsProducts products={products} />
    </Suspense>
  );
};

export default ApparelSections;
