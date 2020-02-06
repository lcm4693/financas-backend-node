import { Despesa } from './entity/despesa';
import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('/api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/retornaDespesas')
  getDespesas(): Despesa[] {
    return this.appService.getDespesas();
  }
}
