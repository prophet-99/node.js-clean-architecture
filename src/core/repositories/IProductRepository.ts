import Product from '../entities/Product';
import ProductSelectDTO from '../dtos/product/ProductSelectDTO';
import { IPaginationRequest } from '../../controllers/product/requests/IPaginationRequest';
/* eslint-disable no-unused-vars */
export interface IProductRepository {
  findAll: () => Promise<Product[]>;
  findAllWithPagination: (paginationRequest: IPaginationRequest) => Promise<Product[]>;
  finAllForSelect: () => Promise<ProductSelectDTO[]>;
  save: () => Promise<Product>;
}
