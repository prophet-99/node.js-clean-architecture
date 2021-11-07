import { inject, injectable } from 'inversify';
import InversifyTypes from '../../../main/config/InversifyTypes';
import 'reflect-metadata';

import Product from '../../entities/Product';
import { IProductRepository } from '../../repositories/IProductRepository';
import { IBaseUseCase } from '../IBaseUseCase';
import { IPaginationRequest } from '../../../controllers/product/requests/IPaginationRequest';
/* eslint-disable no-unused-vars */
@injectable()
class FindAll implements IBaseUseCase {
  constructor(
    @inject(InversifyTypes.PRODUCT_REP)
    private readonly productRepository: IProductRepository,
  ) {}

  public async execute(paginationRequest: IPaginationRequest): Promise<Product[]> {
    const dataRepository = await this.productRepository.findAll();
    const dataWithPagination = await this.productRepository.findAllWithPagination(
      paginationRequest,
    );
    return dataRepository;
  }
}

export default FindAll;
