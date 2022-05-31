import { IsString, IsNotEmpty, IsNumber, IsBoolean } from 'class-validator';
export class countLeaveDayDto {
  @IsNotEmpty()
  @IsNumber()
  noOfLeaves: number;

  @IsNotEmpty()
  @IsString()
  startDate: string;

  @IsNotEmpty()
  @IsBoolean()
  isSateurdayHoliday: boolean;

  @IsNotEmpty()
  @IsBoolean()
  isSundayHoliday: boolean;
}
