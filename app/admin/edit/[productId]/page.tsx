"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { title } from "@/components/primitives";
import { redirect } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import { Checkbox } from "@nextui-org/checkbox";
import { Product } from "@/prisma/models";
import { useTransition } from "react";
import updateProductById from "@/actions/updateProduct";
import deleteProductById from "@/actions/deleteProduct";

const productSchema = z
  .object({
    name: z.string().min(3).max(50),
    description: z.string().min(10).max(200),
    price: z.number().min(0),
    images: z.array(z.string().url()).optional(),
    quantity: z.number().min(0),
    isHidden: z.boolean(),
  })
  .required({
    name: true,
    description: true,
    price: true,
    quantity: true,
  });

export default function EditProductPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const productId = searchParams.get("productId");

  const [isPending, startTransition] = useTransition();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Product>({
    resolver: zodResolver(productSchema),
  });

  const onSubmit = handleSubmit((data) => {
    try {
      if (typeof productId !== "string") {
        redirect("/admin");
      }
      startTransition(async () => {
        await updateProductById(productId, data);
        redirect("/admin");
      });
    } catch (error) {
      console.error("Error updating product:", error);
    }
  });

  const onDelete = async () => {
    try {
      if (typeof productId !== "string") {
        redirect("/admin");
      }
      startTransition(async () => {
        await deleteProductById(productId);
        redirect("/admin");
      });
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };
  return (
    <div>
      <h1 className={title()}>EditProduct {productId}</h1>

      <Button onClick={onDelete} color="warning">
        Delete Product
      </Button>

      <form onSubmit={onSubmit}>
        <div>
          <label>Name:</label>
          <Input {...register("name")} />
          {errors.name && <p>{errors.name.message}</p>}
        </div>
        <div>
          <label>Description:</label>
          <Input {...register("description")} />
          {errors.description && <p>{errors.description.message}</p>}
        </div>
        <div>
          <label>Price:</label>
          <Input type="number" {...register("price")} />
          {errors.price && <p>{errors.price.message}</p>}
        </div>
        <div>
          <label>Images:</label>
          <Input {...register("images")} />
          {errors.images && <p>{errors.images.message}</p>}
        </div>
        <div>
          <label>Quantity:</label>
          <Input type="number" {...register("quantity")} />
          {errors.quantity && <p>{errors.quantity.message}</p>}
        </div>
        <div>
          <label>Is Hidden:</label>
          <Checkbox {...register("isHidden")} />
        </div>
        <Button
          type="submit"
          disabled={isPending}
          className={isPending ? "disabled:cursor-not-allowed" : ""}
        >
          Update Product
        </Button>
      </form>
    </div>
  );
}
