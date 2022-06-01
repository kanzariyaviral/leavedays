import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { AppService } from './app.service';
import { countLeaveDayDto } from './countLeaveDay.Dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('getleave')
  @UsePipes(ValidationPipe)
  getleave(@Body() data: countLeaveDayDto) {
    return this.appService.getLeave(data);
  }
  @Post('getleavess')
  getholiday(@Body() data: any) {
    const { startDate, holidays } = data;
    return this.appService.checkHoliday(holidays, startDate);
  }
}
