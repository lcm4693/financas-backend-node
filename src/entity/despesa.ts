export class Despesa {
  constructor(
    public _id: string,
    public descricao: string,
    public data: Date,
    public valor: number,
  ) {}
}
