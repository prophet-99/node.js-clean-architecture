import Product from '../../../core/entities/Product';
import { IBaseResponse } from '../../IBaseResponse';

export interface IProductsResponse extends IBaseResponse{
  products: Product[];
}
