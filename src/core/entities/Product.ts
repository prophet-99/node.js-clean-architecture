/* eslint-disable no-unused-vars */
class Product {
  constructor(
    public code: string,
    public name: string,
    public description: string,
    public quantity: number,
    public createdAt: Date,
  ) {}

  public static getMaxQuantity(): number {
    return 500;
  }

  public getDenomination(): string {
    return `${this.name} - ${this.code}`;
  }
}

export default Product;
