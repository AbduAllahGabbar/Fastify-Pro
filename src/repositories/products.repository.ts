import { prisma } from '../database/prisma-client';
import {
  Product,
  ProductCreateData,
  ProductRepository,
} from '../interfaces/products.interface';

class ProductsRepositoryPrisma implements ProductRepository {
  async create(data: ProductCreateData): Promise<Product> {

    const result = await prisma.products.create({
      data: {
        name: data.name,
        categoryId: data.categoryId,
      },
    });
    return result;
  }

  async findByCategoryId(
    categoryId: string,
  ): Promise<Product | null> {
    const result = await prisma.products.findFirst({
      where: {
        OR: [
          { categoryId },
        ],
      },
    });
    return result || null;
  }
  async findAllProducts(): Promise<Product[]> {
    const result = await prisma.products.findMany({
     
    });

    return result;
  }
  async updateProduct({ id, name, categoryId }: Product): Promise<Product> {
    const result = await prisma.products.update({
      where: {
        id,
      },
      data: {
        name,
        categoryId,
      },
    });

    return result;
  }
  async delete(id: string): Promise<boolean> {
    const result = await prisma.products.delete({
      where: {
        id,
      },
    });

    return result ? true : false;
  }
}

export { ProductsRepositoryPrisma };
