"use client";

import React, { useEffect, useMemo, useState } from "react";
import { Button } from "@nextui-org/button";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Apparel, getApparelData } from "../handlers/home";

import styles from "./ApparelSections.module.css";
import { Link } from "@nextui-org/link";
import ImagesCarrousel from "./ImagesCarrousel";

const ApparelSections: React.FC = () => {
  const [apparelData, setApparelData] = useState<Apparel[]>([]);
  const [loading, setLoading] = useState<Boolean>(false);

  useEffect(() => {
    setLoading(true);
    getApparelData().then((apparelData) => {
      setApparelData(apparelData);
      setLoading(false);
    });
  }, []);

  // Titles and descriptions for each section
  const sectionTitles = [
    "Favorite Item",
    "Season Sale",
    "Shirts Collection",
    "Accessories",
  ];
  const sectionDescriptions = [
    "Discover our most loved items.",
    "Explore amazing deals for the season.",
    "Elevate your style with our latest shirts.",
    "Add the perfect finishing touch with our accessories.",
  ];

  // Divide the apparel data into four sections
  const sections = useMemo(() => {
    if (!apparelData.length) return [];

    return Array.from({ length: sectionTitles.length }, (_, index) => {
      const startIndex = index * 4;
      return apparelData.slice(startIndex, startIndex + 4);
    });
  }, [apparelData, sectionTitles.length]);

  const renderSection = (
    section: Apparel[],
    title: string,
    description: string
  ) => (
    <div className="mb-8">
      <h3 className={styles.apparelSection__title}>{title}</h3>
      <p className={styles.apparelSection__description}>{description}</p>
      <div className={styles.apparelSection__productContainer}>
        {section.map((item, index) => (
          <Link
            key={index}
            href={`/shop/${item.id}`}
            >
            <Card
              radius="lg"
              className={styles.apparelSection__product}
              isPressable
            >
              {typeof item.discount !== "undefined" && item.discount > 0 ? (
                <CardHeader className={styles.apparelSection__productPromo}>
                  <p className="text-tiny text-white">
                    Available with discount!
                  </p>
                </CardHeader>
              ) : (
                item.quantity < 5 && (
                  <CardHeader className={styles.apparelSection__productPromo}>
                    <p className="text-tiny text-white">
                      Only {item.quantity} units available
                    </p>
                  </CardHeader>
                )
              )}
              <ImagesCarrousel images={item.images} />
              <CardBody>
                <h3 className={styles.apparelSection__productName}>
                  {item.name}
                </h3>
                <p className={styles.apparelSection__productDescription}>
                  {item.description}
                </p>
                <div className={styles.apparelSection__productPriceContainer}>
                  <span className={styles.apparelSection__productPrice}>
                    ${item.price}
                  </span>
                  {item.discount && (
                    <span
                      className={styles.apparelSection__productPriceDiscount}
                    >
                      ${(item.price + item.discount).toFixed(2)}
                    </span>
                  )}
                </div>
              </CardBody>
              <CardFooter className="w-full">
                <Button className="w-full">Add to bag</Button>
              </CardFooter>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );

  return (
    <div className={styles.apparelSection}>
      {!loading && sections.length > 0 ? (
        <div className={styles.apparelSection__sections}>
          {sections.map((section, index) => (
            <div key={index}>
              {renderSection(
                section,
                sectionTitles[index],
                sectionDescriptions[index]
              )}
            </div>
          ))}
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default ApparelSections;
