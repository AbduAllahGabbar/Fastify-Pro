"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = __importDefault(require("fastify"));
const category_routes_1 = require("./routes/category.routes");
const product_routes_1 = require("./routes/product.routes");
const app = (0, fastify_1.default)();
app.register(product_routes_1.productsRoutes, {
    prefix: '/products',
});
app.register(category_routes_1.categoriesRoutes, {
    prefix: '/categories',
});
app.listen({ port: 3100 }, () => {
    console.log('Server listening on port 3100');
});
//# sourceMappingURL=server.js.map