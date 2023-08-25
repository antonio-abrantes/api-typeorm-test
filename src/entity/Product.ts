import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { Merchant } from "./Merchant";
import { Category } from "./Category";

@Entity()
export class Product {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  active: boolean = false;

  @Column()
  name: string;

  @Column("decimal", { precision: 10, scale: 2 })
  price: number;

  @Column()
  description: string;

  @Column("text")
  image: string;

  @Column("decimal", { precision: 10, scale: 2 })
  promotionalPrice: number;

  @ManyToOne(() => Merchant, (merchant) => merchant.products)
  @JoinColumn({ name: "merchantId" })
  merchant: Merchant;

  @ManyToOne(() => Category, (category) => category.products)
  @JoinColumn({ name: "categoryId" })
  category: Category;
}
