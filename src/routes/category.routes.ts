import { FastifyInstance } from "fastify";
import { Category, CategoryCreate } from "../interfaces/categories.interface";
import { CategoryUseCase } from "../usecases/category.usecase";

export async function categoriesRoutes(fastify: FastifyInstance) {
  
  const categoryUseCase = new CategoryUseCase();

  fastify.post<{ Body: CategoryCreate }>("/", async (req, reply) => {

    const { name, parentId } = req.body;

    try {
      const data = await categoryUseCase.create({
        name,
        parentId,
      });
      return reply.send(data);
    } catch (error) {      
      reply.send(error);
    }
  });

  fastify.get("/", async (req, reply) => {
    try {
      const data = await categoryUseCase.listAllCategories();

      return reply.send(data);
    } catch (error) {
      reply.send(error);
    }
  });

  fastify.put<{ Body: Category; Params: { id: string } }>(
    "/:id",
    async (req, reply) => {
      const { id } = req.params;
      const { name, parentId } = req.body;
      
      try {
        const data = await categoryUseCase.updateCategory({
          id,
          name,
          parentId,
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
      const data = await categoryUseCase.delete(id);
      return reply.send(data);
    } catch (error) {
      reply.send(error);
    }
  });

}