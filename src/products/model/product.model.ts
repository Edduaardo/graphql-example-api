import { Field, ObjectType } from "@nestjs/graphql";
import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@ObjectType({ description: 'product' })
@Entity()
export class Product {
  @Field(type => Number)
  @PrimaryGeneratedColumn()
  id: number;

  @Field(type => String)
  @Column({ type: 'varchar' })
  name: string;

  @Field({ nullable: true })
  @Column({ type: 'varchar' })
  description?: string;

  @Field()
  @Column({ type: 'real' })
  unitValue: number;
}
