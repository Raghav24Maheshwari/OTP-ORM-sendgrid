/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';

export class verifyOtpDto {
  @ApiProperty({ example: 'user123', description: 'The ID of the user' })
  userId: number;
}
