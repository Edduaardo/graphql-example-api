import { Args, Resolver, Mutation, Query } from "@nestjs/graphql";
import { Product } from "./model/product.model.js";
import { ProductService } from "./product.service.js";
import { NewProductInput } from "./dto/new-product.input.js";
import { EditProductInput } from "./dto/edit-product.input.js";

@Resolver(() => Product)
export class ProductsResolver {
  constructor(private readonly productService: ProductService) {}

  @Query(returns => Product, { nullable: true })
  async product(
    @Args('id') id: number
  ): Promise<Product | null> {
    return this.productService.findById(id);
  }

  @Query(returns => [Product])
  async products(): Promise<Product[]> {
    return await this.productService.findAll();
  }

  @Mutation(returns => Product)
  async addProduct(
    @Args('newProductData') newProductData: NewProductInput
  ): Promise<Product> {
    return this.productService.create(newProductData as Product)
  }

  @Mutation(returns => Product)
  async editProduct(
    @Args('editProductInput') editProductInput: EditProductInput
  ): Promise<Product> {
    return this.productService.update(editProductInput as Product)
  }
}
