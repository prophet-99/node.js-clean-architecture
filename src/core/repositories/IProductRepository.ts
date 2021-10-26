import Product from '../entities/Product';
import ProductSelectDTO from '../dtos/product/ProductSelectDTO';

export interface IProductRepository {
  findAll: () => Promise<Product[]>;
  finAllForSelect: () => Promise<ProductSelectDTO[]>;
  save: () => Promise<Product>;
}
