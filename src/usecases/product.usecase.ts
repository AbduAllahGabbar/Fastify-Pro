import {
    Product,
    ProductCreate,
    ProductRepository,
  } from '../interfaces/products.interface';
  import { ProductsRepositoryPrisma } from '../repositories/products.repository';
  import { CategoryRepository } from '../interfaces/categories.interface';
  import { CategoriesRepositoryPrisma } from '../repositories/categories.repository';
  class ProductUseCase {
    private categoryRepository: CategoryRepository;
    private productRepository: ProductRepository;
    constructor() {
      this.productRepository = new ProductsRepositoryPrisma();
      this.categoryRepository = new CategoriesRepositoryPrisma();
    }
  
    async create({  name, categoryId, }: ProductCreate) {
      const category = await this.categoryRepository.findById(categoryId);

      if (!category) {
        throw new Error('Category not found');
      }
      const product = await this.productRepository.create({
        name,
        categoryId,
      });
  
      return product;
    }
    async listAllProducts() {
  
  
      const products = await this.productRepository.findAllProducts();
  
      return products;
    }
    async updateProduct({ id, name, categoryId }: Product) {
      const data = await this.productRepository.updateProduct({
        id,
        name,
        categoryId,
      });
  
      return data;
    }
    async delete(id: string) {
      const data = await this.productRepository.delete(id);
  
      return data;
    }
  }
  
  export { ProductUseCase };
  