import { Despesa } from '../entity/despesa';
import { Injectable } from '@nestjs/common';

@Injectable()
export class DespesaService {
  private despesas: Despesa[] = [];

  constructor() {
    const despesa1 = new Despesa(1, 'Despesa 1 (backend)', new Date(2018, 9, 20), 1.8);
    const despesa2 = new Despesa(2, 'Despesa 2 (backend)', new Date(2019, 12, 9), 3.5);
    const despesa3 = new Despesa(3, 'Despesa 3 (backend)', new Date(2020, 1, 10), 12.8);
    const despesa4 = new Despesa(4, 'Despesa 4 (backend)', new Date(2020, 4, 28), 234.0);

    this.despesas.push(despesa1);
    this.despesas.push(despesa2);
    this.despesas.push(despesa3);
    this.despesas.push(despesa4);
  }

  getDespesas(): Despesa[] {
    return this.despesas;
  }
}
