"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoriesRoutes = void 0;
const category_usecase_1 = require("../usecases/category.usecase");
async function categoriesRoutes(fastify) {
    const categoryUseCase = new category_usecase_1.CategoryUseCase();
    fastify.post("/", async (req, reply) => {
        const { name, parentId } = req.body;
        try {
            const data = await categoryUseCase.create({
                name,
                parentId,
            });
            return reply.send(data);
        }
        catch (error) {
            reply.send(error);
        }
    });
    fastify.get("/", async (req, reply) => {
        try {
            const data = await categoryUseCase.listAllCategories();
            return reply.send(data);
        }
        catch (error) {
            reply.send(error);
        }
    });
    fastify.put("/:id", async (req, reply) => {
        const { id } = req.params;
        const { name, parentId } = req.body;
        try {
            const data = await categoryUseCase.updateCategory({
                id,
                name,
                parentId,
            });
            return reply.send(data);
        }
        catch (error) {
            reply.send(error);
        }
    });
    fastify.delete("/:id", async (req, reply) => {
        const { id } = req.params;
        try {
            const data = await categoryUseCase.delete(id);
            return reply.send(data);
        }
        catch (error) {
            reply.send(error);
        }
    });
}
exports.categoriesRoutes = categoriesRoutes;
//# sourceMappingURL=category.routes.js.map