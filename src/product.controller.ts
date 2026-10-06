import { Controller, Get, Param } from "@nestjs/common";
import { ProductService } from "./products/product.service.js";
import { Product } from "./products/model/product.model.js";

@Controller('products')
export class ProductController {
    constructor(private readonly productService: ProductService) {}

    @Get()
    getProducts(): Promise<Product[]> {
        return this.productService.findAll();
    }

    @Get('/:id')
    getProductById(@Param() id: number): Promise<Product | null> {
        return this.productService.findById(id);
    }
}
