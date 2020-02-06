import { DespesaModule } from './despesa.module';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [DespesaModule, MongooseModule.forRoot('mongodb://localhost/nest')],
  controllers: [],
  providers: [],
})
export class AppModule {}
