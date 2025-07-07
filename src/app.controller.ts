import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(@Res() res: Response): void {
    const html = this.appService.getThankYouHTML();
    res.setHeader('Content-Type', 'text/html');
    res.send(html);
  }
}
