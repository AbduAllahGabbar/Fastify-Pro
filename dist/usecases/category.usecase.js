"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryUseCase = void 0;
const categories_repository_1 = require("../repositories/categories.repository");
class CategoryUseCase {
    constructor() {
        this.categoryRepository = new categories_repository_1.CategoriesRepositoryPrisma();
    }
    async create({ name, parentId, }) {
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
    async updateCategory({ id, name, parentId }) {
        const data = await this.categoryRepository.updateCategory({
            id,
            name,
            parentId,
        });
        return data;
    }
    async delete(id) {
        const data = await this.categoryRepository.delete(id);
        return data;
    }
}
exports.CategoryUseCase = CategoryUseCase;
//# sourceMappingURL=category.usecase.js.map