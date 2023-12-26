import getApparelSectionsData from "@/actions/getApparelSections";
import { title } from "@/components/primitives";
import { Suspense } from "react";
import AdminProductList from "./AdminProductList";

export default async function AdminPage() {
	const products = await getApparelSectionsData();
	return (
		<Suspense fallback={<div>Loading...</div>}>
			<div>
				<h1 className={title()}>Admin</h1>
				<AdminProductList products={products}/>
			</div>
		</Suspense>
	);
}