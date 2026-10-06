import { Injectable } from "@nestjs/common";
import { Product } from "./model/product.model.js";
import { BaseService } from "../generics/base.service.js";
import { InjectDataSource } from "@nestjs/typeorm";
import { DataSource } from "typeorm";

@Injectable()
export class ProductService extends BaseService<Product> {
  constructor(
    @InjectDataSource() private dataSource: DataSource
  ) {
    super(dataSource.getRepository(Product))
  }
}
