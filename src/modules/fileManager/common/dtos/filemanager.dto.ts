import { ApiProperty } from '@nestjs/swagger';

export class UpDto {
  @ApiProperty({
    type: Number,
    description: 'PoC DTO: UserId',
    default: 3000,
  })
  user_id: number;
}
