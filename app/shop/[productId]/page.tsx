"use client";
import { Apparel, getApparelDetails } from "@/app/handlers/home";
import { title } from "@/components/primitives";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import styles from "./ProductId.module.css";
import ImagesCarrousel from "@/app/home/ImagesCarrousel";
import { Button } from "@nextui-org/button";

export default function BagPage() {
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState<Apparel>();
  const params = useParams();
  const { productId } = params;

  useEffect(() => {
    setLoading(true);
    getApparelDetails(productId as string)
      .then((result) => {
        setProduct(result);
        console.log(result);
      })
      .finally(() => {
        setLoading(false);
      });

    return () => {
      setProduct(undefined);
    };
  }, [productId]);

  return (
    <div>
      <h1 className={title()}>{product?.name}</h1>
      {loading && <p>Loading...</p>}
      {!loading && product && (
        <div className={styles.productDetails}>
          <div className={styles.productImage}>
            <ImagesCarrousel images={product.images} />
          </div>
          <div className={styles.productInfo}>
            <p className={styles.productDescription}>{product.description}</p>
            <p className={styles.productPrice}>
              Price: ${product.price}{" "}
              {product.discount !== undefined && product.discount > 0 && (
                <span className={styles.productDiscount}>
                  ${(product.price + product.discount).toFixed(2)}
                </span>
              )}
            </p>
            <Button className={styles.addToBagButton}>Add to Bag</Button>
          </div>
        </div>
      )}
      {!loading && !product && <p>Product not found</p>}
    </div>
  );
}
