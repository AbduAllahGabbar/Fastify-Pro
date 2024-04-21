"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoriesRepositoryPrisma = void 0;
const prisma_client_1 = require("../database/prisma-client");
class CategoriesRepositoryPrisma {
    async create(data) {
        const result = await prisma_client_1.prisma.categories.create({
            data: {
                name: data.name,
                parentId: data.parentId,
            },
        });
        return result;
    }
    async findByParentId(parentId) {
        const result = await prisma_client_1.prisma.categories.findFirst({
            where: {
                OR: [
                    { parentId },
                ],
            },
        });
        return result || null;
    }
    async findById(id) {
        const result = await prisma_client_1.prisma.categories.findFirst({
            where: {
                id
            },
        });
        return result || null;
    }
    includeNestedCategories(maximumLevel) {
        if (maximumLevel === 1) {
            return true;
        }
        return {
            include: {
                nestedCategories: this.includeNestedCategories(maximumLevel - 1),
            },
        };
    }
    async findAllCategories() {
        const result = await prisma_client_1.prisma.categories.findMany({
            include: {
                _count: {
                    select: {
                        products: true
                    }
                },
                nestedCategories: true,
                parentCategory: true
            }
        });
        return result;
    }
    async updateCategory({ id, name, parentId }) {
        const result = await prisma_client_1.prisma.categories.update({
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
    async delete(id) {
        const result = await prisma_client_1.prisma.categories.delete({
            where: {
                id,
            },
        });
        return result ? true : false;
    }
}
exports.CategoriesRepositoryPrisma = CategoriesRepositoryPrisma;
//# sourceMappingURL=categories.repository.js.map