import { FastifyInstance } from "fastify";
import { Product, ProductCreate } from "../interfaces/products.interface";
import { ProductUseCase } from "../usecases/product.usecase";

export async function productsRoutes(fastify: FastifyInstance) {
  
  const productUseCase = new ProductUseCase();

  fastify.post<{ Body: ProductCreate }>("/", async (req, reply) => {

    const { name, categoryId } = req.body;


    try {
      const data = await productUseCase.create({
        name,
        categoryId,
      });
      return reply.send(data);
    } catch (error) {      
      reply.send(error);
    }
  });

  fastify.get("/", async (req, reply) => {
    try {
      const data = await productUseCase.listAllProducts();

      return reply.send(data);
    } catch (error) {
      reply.send(error);
    }
  });

  fastify.put<{ Body: Product; Params: { id: string } }>(
    "/:id",
    async (req, reply) => {
      const { id } = req.params;
      const { name, categoryId } = req.body;
      try {
        const data = await productUseCase.updateProduct({
          id,
          name,
          categoryId,
        });
        return reply.send(data);
      } catch (error) {
        reply.send(error);
      }
    }
  );

  fastify.delete<{ Params: { id: string } }>("/:id", async (req, reply) => {
    const { id } = req.params;
    try {
      const data = await productUseCase.delete(id);
      return reply.send(data);
    } catch (error) {
      reply.send(error);
    }
  });

}