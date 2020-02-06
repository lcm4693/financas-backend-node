import { Test, TestingModule } from '@nestjs/testing';
import { DespesaController } from './despesa.controller';
import { DespesaService } from '../service/despesa.service';

describe('AppController', () => {
  let despesaController: DespesaController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [DespesaController],
      providers: [DespesaService],
    }).compile();

    despesaController = app.get<DespesaController>(DespesaController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(despesaController.getDespesas()).toBe(despesaController.getDespesas());
    });
  });
});
