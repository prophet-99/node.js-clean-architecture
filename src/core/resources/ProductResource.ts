import { IBaseResource } from './base/IBaseResource';
import Product from '../entities/Product';
import ProductSelectDTO from '../dtos/product/ProductSelectDTO';
import EnumResourceType from '../../helpers/EnumResourceType';

type ValidTypes = Product | Product[] | ProductSelectDTO[];

class ProductResource implements IBaseResource {
  private resourceRef!: ValidTypes;

  /**
   * @param resource - Product | Product[] | ProductSelectDTO[]
   * @param format - EnumResourceType
  */
  constructor(resource: ValidTypes, format = EnumResourceType.DEFAULT) {
    if (format === EnumResourceType.DEFAULT) {
      const parsedResource = <Product>resource;
      const {
        code, name, description, quantity, createdAt,
      } = parsedResource;
      this.resourceRef = new Product(
        code, name, description, quantity, createdAt,
      );
    }
    if (format === EnumResourceType.LIST) {
      const parsedResource = <Product[]>resource;
      this.resourceRef = parsedResource.map((resourceItem) => {
        const {
          code, name, description, quantity, createdAt,
        } = resourceItem;
        return new Product(
          code, name, description, quantity, createdAt,
        );
      });
    }
    if (format === EnumResourceType.SELECT) {
      const parsedResource = <ProductSelectDTO[]>resource;
      this.resourceRef = parsedResource.map((resourceItem) => {
        const {
          code, name,
        } = resourceItem;
        return new ProductSelectDTO(
          code, name,
        );
      });
    }
  }

  /**
   * @returns Product | Product[] | ProductSelectDTO[]
  */
  public get(): ValidTypes {
    return this.resourceRef;
  }
}

export default ProductResource;
