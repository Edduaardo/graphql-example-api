import { Injectable } from "@nestjs/common";
import { Product } from "./model/product.model.js";

@Injectable()
export class ProductService {
  async create(product: Product): Promise<Product> {
    return {} as Product;
  }

  async findById(id: string): Promise<Product> {
    return {} as Product;
  }
}
