import {
  Category,
  CategoryCreate,
  CategoryRepository,
} from '../interfaces/categories.interface';
import { CategoriesRepositoryPrisma } from '../repositories/categories.repository';

class CategoryUseCase {
  private categoryRepository: CategoryRepository;
  constructor() {
    this.categoryRepository = new CategoriesRepositoryPrisma();
  }

  async create({  name, parentId, }: CategoryCreate) {
    // const verifyIfExistsCategory =
    //   await this.categoryRepository.findByParentId(parentId);

    // if (verifyIfExistsCategory) {
    //   throw new Error('Category already exists');
    // }

    const category = await this.categoryRepository.create({
      name,
      parentId,
    });

    return category;
  }

  async listAllCategories() {

    const categories = await this.categoryRepository.findAllCategories();

    return categories;
  }
  
  async updateCategory({ id, name, parentId }: Category) {
    const data = await this.categoryRepository.updateCategory({
      id,
      name,
      parentId,
    });

    return data;
  }
  
  async delete(id: string) {
    const data = await this.categoryRepository.delete(id);

    return data;
  }
}

export { CategoryUseCase };
