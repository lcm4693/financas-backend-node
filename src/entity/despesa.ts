export class Despesa {
  constructor(
    public id: number,
    public descricao: string,
    public data: Date,
    public valor: number,
  ) {}
}
