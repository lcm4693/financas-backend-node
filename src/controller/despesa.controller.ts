import { Despesa } from '../entity/despesa';
import { Controller, Get } from '@nestjs/common';
import { DespesaService } from '../service/despesa.service';

@Controller('/api')
export class DespesaController {
  constructor(private readonly appService: DespesaService) {}

  @Get('/retornaDespesas')
  getDespesas(): Despesa[] {
    return this.appService.getDespesas();
  }
}
