import { inject, injectable } from 'inversify';
import InversifyTypes from '../../../main/config/InversifyTypes';
import 'reflect-metadata';

import { IProductRepository } from '../../repositories/IProductRepository';
import { IBaseErrorResource } from '../../resources/IBaseErrorResource';
import { IProductResource } from '../../resources/product/IProductResource';
import { IBaseUseCase } from '../IBaseUseCase';
/* eslint-disable no-unused-vars */
@injectable()
class FindAll implements IBaseUseCase {
  constructor(
    @inject(InversifyTypes.PRODUCT_REP)
    private readonly productRepository: IProductRepository,
  ) {}

  public async execute(): Promise<IProductResource[] | IBaseErrorResource> {
    try {
      const response = await this.productRepository.findAll();
      return response;
    } catch (err) {
      return new Promise((resolve) => resolve({ error: '' }));
    }
  }
}

export default FindAll;
