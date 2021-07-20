import { ApiProperty } from '@nestjs/swagger';
import { Length, IsString } from 'class-validator';

export class PoCDto {
  @ApiProperty({
    type: String,
    description: 'PoC DTO: Username',
    default: 'NEED TO CHANGE',
  })
  @IsString()
  @Length(6, 40, { message: 'Invalid Input' })
  username: string;

  @ApiProperty({
    type: String,
    description: 'PoC DTO: Status',
    default: 'active',
  })
  @IsString()
  status: string;
}
