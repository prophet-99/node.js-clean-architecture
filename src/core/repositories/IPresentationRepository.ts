import { IPresentationResource } from '../resources/presentation/IPresentationResource';

export interface IPresentationRepository {
  findAll: () => Promise<IPresentationResource[]>;
  save: () => Promise<IPresentationResource>;
}
