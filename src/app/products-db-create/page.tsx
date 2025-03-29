"use client"

import Submit from "@/components/submit";
import { useActionState } from "react";
import { FormState, CreateProduct } from "@/actions/products";



export default function AddProductPage() {

    const initialState: FormState = {
        errors : {},
    }

    const [state, formAction, /*isPending*/] = useActionState(CreateProduct,initialState)

   
    return (
        <form action={formAction} className="p-4 space-y-4 max-w-96">
            <label className="text-black">
                Title
                <input 
                type="text"
                className="block w-full p-2 text-black border rounded"
                name="title"
                />
            </label>
            {
                state.errors.title && <p className="text-red-500">{state.errors.title}</p>
            }
            <label className="text-black">
                Price
                <input 
                type="number"
                className="block w-full p-2 text-black border rounded"
                name="price"
                />
            </label>
            {
                state.errors.price && <p className="text-red-500">{state.errors.price}</p>
            }
            <label className="text-black">
                Description
               <textarea 
                className="block w-full p-2 text-black border rounded"
                name="description"
               />
            </label>
            {
                state.errors.description && <p className="text-red-500">{state.errors.description}</p>
            }
            <Submit/>
            {/* <button
                type="submit"
                className="block w-full p-2 text-white bg-blue-500 rounded disabled:bg-gray-500"
            >
            Add Product
            </button> */}
        </form>
    )
}