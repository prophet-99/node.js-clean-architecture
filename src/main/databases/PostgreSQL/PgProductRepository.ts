import { injectable } from 'inversify';
import 'reflect-metadata';

import { IProductRepository } from '../../../core/repositories/IProductRepository';
import { IProductResource } from '../../../core/resources/product/IProductResource';
import { IProductSelectResource } from '../../../core/resources/product/IProductSelectResource';

@injectable()
class PgProductRepository implements IProductRepository {
  // eslint-disable-next-line class-methods-use-this
  public findAll(): Promise<IProductResource[]> {
    return new Promise((resolve) => resolve([
      {
        code: 'AAAA',
        createdAt: new Date(),
        description: 'description',
        name: 'Leche',
        quantity: 50,
      },
    ]));
  }

  // eslint-disable-next-line class-methods-use-this
  public finAllForSelect(): Promise<IProductSelectResource[]> {
    return new Promise((resolve) => resolve([
      {
        code: 'AAAAAA',
        name: 'Leche',
      },
    ]));
  }

  // eslint-disable-next-line class-methods-use-this
  public save(): Promise<IProductResource> {
    return new Promise((resolve) => resolve(
      {
        code: 'AAAA',
        createdAt: new Date(),
        description: 'description',
        name: 'New Leche',
        quantity: 50,
      },
    ));
  }
}

export default PgProductRepository;
