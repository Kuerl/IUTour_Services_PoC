import { Length, IsString } from 'class-validator';

export class PoCDto {
  @IsString()
  @Length(6, 40, { message: 'Invalid Input' })
  username: string;

  @IsString()
  status: string;
}
