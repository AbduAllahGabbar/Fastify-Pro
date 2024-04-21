"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductUseCase = void 0;
const products_repository_1 = require("../repositories/products.repository");
const categories_repository_1 = require("../repositories/categories.repository");
class ProductUseCase {
    constructor() {
        this.productRepository = new products_repository_1.ProductsRepositoryPrisma();
        this.categoryRepository = new categories_repository_1.CategoriesRepositoryPrisma();
    }
    async create({ name, categoryId, }) {
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
    async updateProduct({ id, name, categoryId }) {
        const data = await this.productRepository.updateProduct({
            id,
            name,
            categoryId,
        });
        return data;
    }
    async delete(id) {
        const data = await this.productRepository.delete(id);
        return data;
    }
}
exports.ProductUseCase = ProductUseCase;
//# sourceMappingURL=product.usecase.js.map