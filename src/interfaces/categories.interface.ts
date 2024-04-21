export interface Category {
  id: string;
  name: string;
  parentId: string;

}

export interface CategoryCreate {
  name: string;
  parentId: string;
}
export interface CategoryCreateData {
  name: string;
  parentId: string;
}
export interface CategoryRepository {
  create({ name, parentId }: CategoryCreateData): Promise<Category>;
  findByParentId( parentId: string): Promise<Category | null>;
  findById( id: string): Promise<Category | null>;
  findAllCategories(): Promise<Category[]>;
  updateCategory({ id, name, parentId }: Category): Promise<Category>;
  delete(id: string): Promise<boolean>;
}
