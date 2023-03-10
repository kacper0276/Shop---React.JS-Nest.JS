import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export default class ProductsType {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}
