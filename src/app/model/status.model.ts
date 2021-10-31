export class Status {
    public id: number;
    public paciente: string;
    public sintomas: Array<string>;
    public dataStatus: string;
    public inicioSintomas: string;
    public previsaoColeta: string;
    public outrosSintomas: string;
    public situacao: string;
    public assintomatico: boolean;
    public createdAt: string;
    public updatedAt: string;
  
    constructor(
        id: number,
        paciente: string,
        sintomas: Array<string>,
        dataStatus: string,
        inicioSintomas: string,
        previsaoColeta: string,
        outrosSintomas: string,
        situacao: string,
        assintomatico: boolean,
        createdAt: string,
        updatedAt: string,
    ) {
      this.id = id ?? 0;
      this.paciente = paciente ?? '';
      this.sintomas = sintomas ?? [];
      this.dataStatus = dataStatus ?? '';
      this.inicioSintomas = inicioSintomas ?? '';
      this.previsaoColeta = previsaoColeta ?? '';
      this.outrosSintomas = outrosSintomas ?? '';
      this.situacao = situacao ?? '';
      this.assintomatico = assintomatico ?? false;
      this.createdAt = createdAt ?? '';
      this.updatedAt = updatedAt ?? '';
    }
  };
  