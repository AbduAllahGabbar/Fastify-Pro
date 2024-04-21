"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productsRoutes = void 0;
const product_usecase_1 = require("../usecases/product.usecase");
async function productsRoutes(fastify) {
    const productUseCase = new product_usecase_1.ProductUseCase();
    fastify.post("/", async (req, reply) => {
        const { name, categoryId } = req.body;
        try {
            const data = await productUseCase.create({
                name,
                categoryId,
            });
            return reply.send(data);
        }
        catch (error) {
            reply.send(error);
        }
    });
    fastify.get("/", async (req, reply) => {
        try {
            const data = await productUseCase.listAllProducts();
            return reply.send(data);
        }
        catch (error) {
            reply.send(error);
        }
    });
    fastify.put("/:id", async (req, reply) => {
        const { id } = req.params;
        const { name, categoryId } = req.body;
        try {
            const data = await productUseCase.updateProduct({
                id,
                name,
                categoryId,
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
            const data = await productUseCase.delete(id);
            return reply.send(data);
        }
        catch (error) {
            reply.send(error);
        }
    });
}
exports.productsRoutes = productsRoutes;
//# sourceMappingURL=product.routes.js.map