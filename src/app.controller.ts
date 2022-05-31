import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  getHello(@Body() data: any): string {
    return this.appService.getHello();
  }
  @Get('getleave')
  getleave() {
    return this.appService.getLeave();
  }
}
