import { Despesa } from '../entity/despesa';
import { Controller, Get, Post, Req, Body } from '@nestjs/common';
import { DespesaService } from '../service/despesa.service';
import { Request } from 'express';

@Controller('/api')
export class DespesaController {
  constructor(private readonly despesaService: DespesaService) {}

  // const despesa1 = new Despesa(1, 'Despesa 1 (backend)', new Date(2018, 9, 20), 1.8);
  // const despesa2 = new Despesa(2, 'Despesa 2 (backend)', new Date(2019, 12, 9), 3.5);
  // const despesa3 = new Despesa(3, 'Despesa 3 (backend)', new Date(2020, 1, 10), 12.8);
  // const despesa4 = new Despesa(4, 'Despesa 4 (backend)', new Date(2020, 4, 28), 234.0);

  // this.despesas.push(despesa1);
  // this.despesas.push(despesa2);
  // this.despesas.push(despesa3);
  // this.despesas.push(despesa4);

  @Post('/incluirDespesa')
  saveDespesa(@Body() parametros: Despesa): Promise<Despesa> {
    const despesa = new Despesa(parametros._id, parametros.descricao, new Date(), parametros.valor);
    return this.despesaService.save(despesa);
  }

  @Post('/apagarDespesa')
  apagar(@Body() despesa: Despesa): void {
    this.despesaService.deletarDespesa(despesa);
  }

  @Get('/retornaDespesas')
  async getDespesas(): Promise<Despesa[]> {
    return this.despesaService.getDespesas();
  }
}
