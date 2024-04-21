import { prisma } from '../database/prisma-client';
import {
  Category,
  CategoryCreateData,
  CategoryRepository,
} from '../interfaces/categories.interface';
import { Prisma } from '@prisma/client';
class CategoriesRepositoryPrisma implements CategoryRepository {
  async create(data: CategoryCreateData): Promise<Category> {

    const result = await prisma.categories.create({
      data: {
        name: data.name,
        parentId: data.parentId,
      },
    });
    return result;
  }

  async findByParentId(
    parentId: string,
  ): Promise<Category | null> {
    const result = await prisma.categories.findFirst({
      where: {
        OR: [
          { parentId },
        ],
      },
    });
    return result || null;
  }
  async findById(
    id: string,
  ): Promise<Category | null> {
    const result = await prisma.categories.findFirst({
      where: {
        id
      },
    });
    return result || null;
  }
  private includeNestedCategories(
    maximumLevel: number,
  ): boolean | Prisma.Categories$nestedCategoriesArgs {
    if (maximumLevel === 1) {
      return true;
    }
    return {
      include: {
        nestedCategories: this.includeNestedCategories(maximumLevel - 1),
      },
    };
  }
  async findAllCategories(): Promise<Category[]> {
    const result = await prisma.categories.findMany({
     include : {
        _count : {
          select : {
            products : true
          }
        },
        nestedCategories : true,
        parentCategory : true
      }
     
    });

    return result;
  }
  async updateCategory({ id, name, parentId }: Category): Promise<Category> {
    const result = await prisma.categories.update({
      where: {
        id,
      },
      data: {
        name,
        parentId,
      },
    });

    return result;
  }
  async delete(id: string): Promise<boolean> {
    const result = await prisma.categories.delete({
      where: {
        id,
      },
    });

    return result ? true : false;
  }
}

export { CategoriesRepositoryPrisma };
