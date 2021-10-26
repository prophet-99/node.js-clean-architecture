import { Request, Response } from 'express';

import injectionContainer from '../../main/config/inversify.config';
import InversifyTypes from '../../main/config/InversifyTypes';

import { IBaseUseCase } from '../../core/useCases/IBaseUseCase';
import Product from '../../core/entities/Product';
import BaseErrorResource from '../../core/resources/base/BaseErrorResource';
import { IProductsResponse } from './responses/IProductsResponse';
import { IBaseErrorResponse } from '../IBaseErrorResponse';
import EnumHttpStatusCode from '../../helpers/EnumHttpStatusCode';

const getAllProducts = async (req: Request, res: Response) => {
  const findAllUseCase = injectionContainer.get<IBaseUseCase>(InversifyTypes.PRODUCT_FIND_ALL);
  try {
    const products = await findAllUseCase.execute() as Product[];
    const response: IProductsResponse = {
      sucess: true,
      products,
    };
    res.status(EnumHttpStatusCode.OK).json(response);
  } catch (err) {
    const parsedError = err as BaseErrorResource;
    const response: IBaseErrorResponse = {
      sucess: false,
      ...parsedError.getCause(),
    };
    res.status(EnumHttpStatusCode.INTERNAL_SERVER_ERROR).json(response);
  }
};

const getProductById = (req: Request, res: Response) => {

};

export {
  getAllProducts,
  getProductById,
};
