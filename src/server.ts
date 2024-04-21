import Fastify from 'fastify';
import { categoriesRoutes } from './routes/category.routes';
import { productsRoutes } from './routes/product.routes';

const app = Fastify();

app.register(productsRoutes, {
  prefix: '/products',
});
app.register(categoriesRoutes, {
  prefix: '/categories',
});


app.listen({ port: 3100 }, () => {
  console.log('Server listening on port 3100');
});
