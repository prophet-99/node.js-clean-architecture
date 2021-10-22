export interface IBaseUseCase {
  execute: () => Promise<Object>;
}
