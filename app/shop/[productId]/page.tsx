import { title } from "@/components/primitives";
import { useRouter } from 'next/router';

export default function BagPage() {
	const router = useRouter();
  const { productId } = router.query;
	return (
		<div>
			<h1 className={title()}>Product Details</h1>
      <p>Product ID: {productId}</p>
		</div>
	);
}