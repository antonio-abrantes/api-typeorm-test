import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { Product } from "./Product";
import { Merchant } from "./Merchant";

@Entity()
export class Category {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  active: boolean = false;

  @Column()
  name: string;

  @Column()
  merchantId: string;

  @ManyToOne(() => Merchant, (merchant) => merchant.categories)
  @JoinColumn({ name: "merchantId" })
  merchant: Merchant;

  @OneToMany(() => Product, (product) => product.category)
  products: Product[];
}
