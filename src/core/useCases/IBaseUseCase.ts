/* eslint-disable no-unused-vars */
export interface IBaseUseCase {
  execute: (params?: any) => Promise<Object>;
}
