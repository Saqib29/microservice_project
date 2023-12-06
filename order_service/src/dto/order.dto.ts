import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export default class UserDto {
  @IsNotEmpty()
  @IsString()
  product: string;

  @IsNotEmpty()
  @IsNumber()
  quantity: number;

  @IsNotEmpty()
  @IsString()
  orderedBy: string;
}
