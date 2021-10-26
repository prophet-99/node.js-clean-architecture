import { inject, injectable } from 'inversify';
import InversifyTypes from '../../../main/config/InversifyTypes';
import 'reflect-metadata';

import Product from '../../entities/Product';
import { IProductRepository } from '../../repositories/IProductRepository';
import { IBaseUseCase } from '../IBaseUseCase';
/* eslint-disable no-unused-vars */
@injectable()
class FindAll implements IBaseUseCase {
  constructor(
    @inject(InversifyTypes.PRODUCT_REP)
    private readonly productRepository: IProductRepository,
  ) {}

  public async execute(): Promise<Product[]> {
    const dataRepository = await this.productRepository.findAll();
    return dataRepository;
  }
}

export default FindAll;
