import {
  Body,
  Controller,
  Get,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { AppService } from './app.service';
import { countLeaveDayDto } from './countLeaveDay.Dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('api')
  @UsePipes(ValidationPipe)
  getapi(@Body() data: countLeaveDayDto): string {
    return this.appService.getapi(data);
  }
  @Get('getleave')
  getleave() {
    return this.appService.getLeave();
  }
}
