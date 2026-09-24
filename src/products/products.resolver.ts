import { Args, Resolver, Mutation, Query } from "@nestjs/graphql";
import { Product } from "./model/product.model.js";
import { ProductService } from "./product.service.js";

@Resolver(() => Product)
export class ProductsResolver {
  constructor(private readonly productService: ProductService) {}

  @Query(returns => Product)
  async findById(
    @Args('id') id: string
  ): Promise<Product> {
    const product = await this.productService.findById(id);
    return product;
  }

  @Mutation(returns => Product)
  async addProduct(
    @Args('newProductData') newProductData: Product
  ): Promise<Product> {
    return await this.productService.create(newProductData)
  }
}
