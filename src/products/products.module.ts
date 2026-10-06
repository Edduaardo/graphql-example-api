import { Module } from "@nestjs/common";
import { ProductsResolver } from "./products.resolver.js"
import { ProductService } from "./product.service.js";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Product } from "./model/product.model.js";

@Module({
  imports: [
    TypeOrmModule.forFeature([Product])
  ],
  providers: [
    ProductsResolver,
    ProductService
  ]
})

export class ProductsModule {}
