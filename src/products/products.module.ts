import { Module } from "@nestjs/common";
import { ProductsResolver } from "./products.resolver.js"
import { ProductService } from "./product.service.js";

@Module({
  providers: [ ProductsResolver, ProductService ]
})

export class ProductsModule {}
