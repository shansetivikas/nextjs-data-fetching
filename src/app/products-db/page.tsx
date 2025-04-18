import { removeProduct } from "@/actions/products";
import { getProducts } from "../prisma-db"

export type Product = {
    id: number,
    title: string,
    price: number,
    description: string|null
}

export default async function ProductsDb() {
    const products: Product[] = await getProducts();

    return (
        <ul className="space-y-4 p-4">
            {
                products.map((product) => (
                    <li key={product.id} className="p-4 bg-white shadow-md rounded-lg text-gray-700">
                        <h2 className="text-xl font-semibold">{product.title}</h2>
                        <p>{product.description}</p>
                        <p className="text-lg font-medium">${product.price}</p>
                        <form action={removeProduct.bind(null, product.id)}>
                            <button type="submit" className="px-4 py-3 mt-4 text-white bg-red-500 reounded-md">
                                Delete
                            </button>
                        </form>
                        
                    </li>
                ))
            }
        </ul>
    )
}