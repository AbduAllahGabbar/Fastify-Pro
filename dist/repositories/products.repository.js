"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsRepositoryPrisma = void 0;
const prisma_client_1 = require("../database/prisma-client");
class ProductsRepositoryPrisma {
    async create(data) {
        const result = await prisma_client_1.prisma.products.create({
            data: {
                name: data.name,
                categoryId: data.categoryId,
            },
        });
        return result;
    }
    async findByCategoryId(categoryId) {
        const result = await prisma_client_1.prisma.products.findFirst({
            where: {
                OR: [
                    { categoryId },
                ],
            },
        });
        return result || null;
    }
    async findAllProducts() {
        const result = await prisma_client_1.prisma.products.findMany({});
        return result;
    }
    async updateProduct({ id, name, categoryId }) {
        const result = await prisma_client_1.prisma.products.update({
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
    async delete(id) {
        const result = await prisma_client_1.prisma.products.delete({
            where: {
                id,
            },
        });
        return result ? true : false;
    }
}
exports.ProductsRepositoryPrisma = ProductsRepositoryPrisma;
//# sourceMappingURL=products.repository.js.map