import { Field, ID, ObjectType } from "@nestjs/graphql";

@ObjectType({ description: 'recipe' })
export class Product {
  @Field(type => ID)
  id: string;

  @Field(type => [String])
  name: string;

  @Field({ nullable: true })
  description?: string;

  @Field()
  unitValue: number;
}
