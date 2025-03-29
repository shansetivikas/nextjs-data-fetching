type Author = {
    id: number,
    name: string
}

export default async function Author({id}:{id:number}) {
    await new Promise((resolve)=>setTimeout(resolve, 2000));
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const authorDetails: Author = await response.json();

    return (
       <p>Author: {authorDetails.name}</p>
    )
}