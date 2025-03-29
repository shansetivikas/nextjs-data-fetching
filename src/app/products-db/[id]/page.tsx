import { getProduct } from "@/app/prisma-db";
import EditProductForm from "./product-edit-form";
import { Product } from "../page";
import { notFound } from "next/navigation";



export default async function EditProductPage({params}: {params : Promise<{id:string}>}) {

    const {id} = await params;

    const productData = await getProduct(parseInt(id));

    if (!productData) {
        notFound();
    }

    const product: Product = productData;    

    return <EditProductForm product={product}/>

   
}