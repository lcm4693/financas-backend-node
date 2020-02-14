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

  async deletarDespesa(despesa: Despesa) {
    const objetoJaExiste = await this.verificarExistenciaObjeto(despesa);
    if (objetoJaExiste === true) {
      const retorno = await this.despesaModel.deleteOne({ _id: despesa._id }).exec();
    } else {
      throw new HttpException('Despesa não encontrada na base de dados', 403);
    }
  }

  async verificarExistenciaObjeto(despesa: Despesa): Promise<boolean> {
    const objeto: Despesa = await this.despesaModel.findOne(despesa).exec();
    if (objeto) {
      return true;
    } else {
      return false;
    }
  }

  async save(despesaParam: Despesa): Promise<Despesa> {
    // const objetoJaExiste = await this.verificarExistenciaObjeto(despesaParam);
    // if (objetoJaExiste === true) {
    //   throw new HttpException('Esse cara ja existe', 403);
    // }

    const despesaManaged = new this.despesaModel(despesaParam);
    return despesaManaged.save();
  }
}
