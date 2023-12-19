import { title } from "@/components/primitives";
import { useRouter } from "next/router";

export default function EditProductPage() {
	const router = useRouter();
  const { productId } = router.query;
	return (
		<div>
			<h1 className={title()}>EditProduct { productId }</h1>
		</div>
	);
}