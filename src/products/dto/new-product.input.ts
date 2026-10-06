import { Field, InputType } from "@nestjs/graphql";
import { IsOptional, Length } from "class-validator";

@InputType()
export class NewProductInput {
    @Field(type => String)
    name: string;

    @Field({ nullable: true })
    @IsOptional()
    @Length(0, 200)
    description?: string;

    @Field()
    unitValue: number;
}
