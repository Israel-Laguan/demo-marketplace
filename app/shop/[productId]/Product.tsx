"use client";
import { title } from "@/components/primitives";
import styles from "./ProductId.module.css";
import ImagesCarrousel from "@/app/home/ImagesCarrousel";
import { Button } from "@nextui-org/button";
import { Product } from "@/prisma/models";

const Product: React.FC<{ product: Product }> = ({ product }) => (
  <div>
    <h1 className={title()}>{product?.name}</h1>
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
  </div>
);

export default Product;
