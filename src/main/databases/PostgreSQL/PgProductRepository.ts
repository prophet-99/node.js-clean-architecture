import { injectable } from 'inversify';
import 'reflect-metadata';

import PgConnection from './connection/PgConnection';
import { IProductRepository } from '../../../core/repositories/IProductRepository';
import Product from '../../../core/entities/Product';
import ProductSelectDTO from '../../../core/dtos/product/ProductSelectDTO';
import ProductResource from '../../../core/resources/ProductResource';
import EnumResourceType from '../../../helpers/EnumResourceType';
import BaseErrorResource from '../../../core/resources/base/BaseErrorResource';
import EnumPostgresErrorCode from '../../../helpers/EnumPostgresErrorCode';
import getEnumKeyByValue from '../../../helpers/getEnumKeyByValue';
import getPgErrorMessage from '../../../helpers/getPgErrorMessage';

@injectable()
class PgProductRepository implements IProductRepository {
  private pgConnection = new PgConnection();

  public async findAll(): Promise<Product[]> {
    try {
      const { pool } = this.pgConnection;
      const rawData = await pool.query('select * from products');
      const parsedData = rawData.rows as Product[];
      return new ProductResource(parsedData, EnumResourceType.LIST).get() as Product[];
    } catch (err: any) {
      throw new BaseErrorResource({
        message: getPgErrorMessage(err.stack),
        errorCode: `${err.code} | ${getEnumKeyByValue(err.code, EnumPostgresErrorCode)}`,
      });
    }
  }

  // eslint-disable-next-line class-methods-use-this
  public finAllForSelect(): Promise<ProductSelectDTO[]> {
    return new Promise((resolve) => resolve([
      {
        code: 'AAAAAA',
        name: 'Leche',
      },
    ]));
  }

  // eslint-disable-next-line class-methods-use-this
  public save(): Promise<Product> {
    return new Promise((resolve) => resolve(
      {
        code: 'AAAA',
        createdAt: new Date(),
        description: 'description',
        name: 'New Leche',
        quantity: 50,
        getDenomination: () => '',
      },
    ));
  }
}

export default PgProductRepository;
