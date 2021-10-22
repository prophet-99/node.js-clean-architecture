import { Request, Response } from 'express';

import injectionContainer from '../../main/config/inversify.config';
import { IBaseUseCase } from '../../core/useCases/IBaseUseCase';
import InversifyTypes from '../../main/config/InversifyTypes';

const getAllProducts = async (req: Request, res: Response) => {
  const findAllUseCase = injectionContainer.get<IBaseUseCase>(InversifyTypes.PRODUCT_FIND_ALL);
  const products = await findAllUseCase.execute();
  res.json(products);
};

const getProductById = (req: Request, res: Response) => {

};

export {
  getAllProducts,
  getProductById,
};
