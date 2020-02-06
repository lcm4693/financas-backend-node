import { Despesa } from '../entity/despesa';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class DespesaService {
  private despesas: Despesa[] = [];

  constructor(@InjectModel('Despesa') private readonly despesaModel: Model<Despesa>) {}

  async getDespesas(): Promise<Despesa[]> {
    return this.despesaModel.find().exec();
  }

  async save(despesaParam: Despesa): Promise<Despesa> {
    const despesaManaged = new this.despesaModel(despesaParam);
    return despesaManaged.save();
  }
}
