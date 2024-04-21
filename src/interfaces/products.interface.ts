export interface Product {
    id: string;
    name: string;
    categoryId : string
  }
  
  export interface ProductCreate {
    name: string;
    categoryId: string;
  }
  export interface ProductCreateData {
    name: string;
    categoryId : string
  }
  export interface ProductRepository {
    create({ name, categoryId, }: ProductCreateData): Promise<Product>;
    findByCategoryId( categoryId: string): Promise<Product | null>;
    findAllProducts(): Promise<Product[]>;
    updateProduct({ id, name, categoryId }: Product): Promise<Product>;
    delete(id: string): Promise<boolean>;
  }
  