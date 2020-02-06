import { Module } from '@nestjs/common';
import { DespesaController } from './controller/despesa.controller';
import { DespesaService } from './service/despesa.service';

@Module({
  imports: [],
  controllers: [DespesaController],
  providers: [DespesaService],
})
export class AppModule {}
