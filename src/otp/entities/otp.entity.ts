/* eslint-disable prettier/prettier */
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('otp')
export class userOtp {
  @PrimaryGeneratedColumn()
  userId: number;

  @Column()
  email: string;

  @Column()
  username: string;

  @Column()
  otp: string;

  @Column('bigint')
  timestamp: number;
}