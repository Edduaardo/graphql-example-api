import { Field, InputType } from "@nestjs/graphql";
import { NewProductInput } from "./new-product.input.js";

@InputType()
export class EditProductInput extends NewProductInput {
    @Field(type => Number)
    id: number;
}
