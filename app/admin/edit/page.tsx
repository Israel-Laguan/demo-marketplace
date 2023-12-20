import { title } from "@/components/primitives";
import { useRouter } from 'next/router';

export default function AdminPage() {
	const router = useRouter();
  const { productId } = router.query;
	return (
		<div>
			<h1 className={title()}>Edit Product Details</h1>
      <p>Product ID: {productId}</p>
		</div>
	);
}