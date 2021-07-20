import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';

export class UpDto {
  @ApiProperty({
    type: Number,
    description: 'PoC DTO: user_id',
    default: 3000,
  })
  @IsNumber()
  user_id: number;
}
