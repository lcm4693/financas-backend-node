import { DespesaService } from './service/despesa.service';
import { DespesaController } from './controller/despesa.controller';
import { DespesaSchema } from './schema/despesa.schema';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Despesa', schema: DespesaSchema }])],
  controllers: [DespesaController],
  providers: [DespesaService],
})
export class DespesaModule {}
