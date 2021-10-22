import { Container } from 'inversify';
import InversifyTypes from './InversifyTypes';
// USE CASE INTERFACE
import { IBaseUseCase } from '../../core/useCases/IBaseUseCase';
// USE CASES IMPLEMENTATIONS
import FindAllProducts from '../../core/useCases/product/FindAll';
// REPOSITORY INTERFACES
import { IProductRepository } from '../../core/repositories/IProductRepository';
// PostgreSQL - REPOSITORY IMPLEMENTATIONS
import PgProductRepository from '../databases/PostgreSQL/PgProductRepository';

const container = new Container();
// PRODUCTS
container.bind<IProductRepository>(InversifyTypes.PRODUCT_REP).to(PgProductRepository);
container.bind<IBaseUseCase>(InversifyTypes.PRODUCT_FIND_ALL).to(FindAllProducts);
// STUDENTS

export default container;
