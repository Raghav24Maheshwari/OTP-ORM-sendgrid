/* eslint-disable prettier/prettier */

import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty } from 'class-validator';

export class CreateOtpDto {
  @ApiProperty({ example: 'user123', description: 'The ID of the user' })
  @IsString()
  @IsNotEmpty()
  userId: number

  @ApiProperty({ example: 'dmnf@gmail.com', description: 'The email address of the user' })
  @IsString()
  @IsNotEmpty()
  email: string;

  @ApiProperty({ example: 'df', description: 'The username of the user' })
  @IsString()
  @IsNotEmpty()
  username: string;
}
