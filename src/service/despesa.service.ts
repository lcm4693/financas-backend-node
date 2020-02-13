import { Despesa } from './../entity/despesa';
import { Injectable, HttpException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class DespesaService {
  private despesas: Despesa[] = [];

  constructor(@InjectModel('Despesa') private readonly despesaModel: Model<Despesa>) {}

  async getDespesas(): Promise<Despesa[]> {
    return this.despesaModel.find().exec();
  }

  async verificarExistenciaObjeto(despesa: Despesa): Promise<boolean> {
    const objeto = await this.despesaModel.findOne({ id: despesa.id }).exec();
    if (objeto) {
      return true;
    } else {
      return false;
    }
  }

  async save(despesaParam: Despesa): Promise<Despesa> {
    const objetoJaExiste = await this.verificarExistenciaObjeto(despesaParam);
    if (objetoJaExiste === true) {
      throw new HttpException('Esse cara ja existe', 403);
    }
    const despesaManaged = new this.despesaModel(despesaParam);
    return despesaManaged.save();
  }
}
