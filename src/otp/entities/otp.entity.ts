import { IsEmail } from 'class-validator';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('otp')
export class userOtp {
  @PrimaryGeneratedColumn()
  userId: number;

  @Column()
  @IsEmail()
  email: string;

  @Column()
  username: string;

  @Column()
  otp: string;

  @Column('bigint')
  timestamp: number;
}