import { IProductResource } from '../resources/product/IProductResource';
import { IProductSelectResource } from '../resources/product/IProductSelectResource';

export interface IProductRepository {
  findAll: () => Promise<IProductResource[]>;
  finAllForSelect: () => Promise<IProductSelectResource[]>;
  save: () => Promise<IProductResource>;
}
