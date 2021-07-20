import { ApiProperty } from '@nestjs/swagger';
import { Length, IsString } from 'class-validator';

export class PoCDto {
  @ApiProperty({
    type: String,
    description: 'PoC DTO: Username',
    default: '',
  })
  @IsString()
  @Length(6, 40, { message: 'Invalid Input' })
  username: string;

  @ApiProperty({
    type: String,
    description: 'PoC DTO: Status',
    default: '',
  })
  @IsString()
  status: string;
}
