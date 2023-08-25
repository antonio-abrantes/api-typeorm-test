import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  ManyToMany,
  JoinTable,
} from "typeorm";
import { Product } from "./Product";
import { Category } from "./Category";

@Entity()
export class Merchant {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  active: boolean = false;

  @Column()
  name: string;

  @Column()
  city: string;

  @Column()
  state: string;

  @Column()
  street: string;

  @Column()
  streetNumber: string;

  @Column()
  complement: string;

  @Column()
  neighborhood: string;

  @Column()
  postalCode: string;

  @OneToMany(() => Product, (product) => product.merchant)
  products: Product[];

  @OneToMany(() => Category, (category) => category.merchant)
  categories: Category[];
}
