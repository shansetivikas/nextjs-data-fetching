import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();


export async function getProducts() {
    await new Promise((resolve) => setTimeout(resolve,1500));
    return prisma.product.findMany();
}

export async function addProduct(
    title: string,
    price: number,
    description: string
  ) {
    await new Promise((resolve) => setTimeout(resolve, 1500));
    return prisma.product.create({
      data: { title, price, description },
    });
  }

export async function getProduct(id: number) {
    await new Promise((resolve) => setTimeout(resolve, 1500));
    return prisma.product.findUnique({
      where: {id}
    })
}

export async function updateProduct(
  id: number,
  title: string,
  price: number,
  description: string
) {
  await new Promise((resolve) => setTimeout(resolve, 1500));
  return prisma.product.update({
    where: {id},
    data: {title, price, description}
  })
}

export async function deleteProduct(id: number) {
  await new Promise((resolve) => setTimeout(resolve, 1500));
  return prisma.product.delete({
    where: {id}
  })
}
  