import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Users {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  isActive: boolean = false;

  @Column()
  linkExpired: string;

  @Column()
  userType: string;

  @Column()
  userImg: string;
}
