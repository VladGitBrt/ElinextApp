import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';

import { Message, User } from '@elinext/api-interfaces';

import { AppService } from './app.service';
import { parse } from 'path';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('users')
  getUsers(): User[] {
    return this.appService.getUsers();
  }
  @Post('adduser')
  addUser(@Body() body: User) {
    return this.appService.applyUser(body);
  }
}
