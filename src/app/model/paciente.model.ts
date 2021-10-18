export class Paciente {
  public id: number;
  public nome: string;
  public genero: string;
  public dataNasc: string;
  public profissionalSaude: false;
  public profissionalSeguranca: false;
  public contato: string;
  public bairro: string;
  public dataNotificacao: string;
  public outrosFatores: string;
  public vinculoEpidemiologico: string;
  public fatoresRisco: Array<string>;
  public internacoes: Array<any>;
  public testes: Array<any>;
  public outrosTestes: Array<any>;
  public status: Array<any> | undefined;

  constructor(
    id?: number,
    nome?: string,
    genero?: string,
    dataNasc?: string,
    profissionalSaude?: false,
    profissionalSeguranca?: false,
    contato?: string,
    bairro?: string,
    dataNotificacao?: string,
    outrosFatores?: string,
    vinculoEpidemiologico?: string,
    fatoresRisco?: Array<string>,
    internacoes?: Array<any>,
    testes?: Array<any>,
    outrosTestes?: Array<any>,
    status?: Array<any> | undefined
  ) {
    this.id = id ?? 0;
    this.nome = nome ?? '';
    this.genero = genero ?? '';
    this.dataNasc = dataNasc ?? '';
    this.profissionalSaude = profissionalSaude ?? false;
    this.profissionalSeguranca = profissionalSeguranca ?? false;
    this.contato = contato ?? '';
    this.bairro = bairro ?? '';
    this.dataNotificacao = dataNotificacao ?? '';
    this.outrosFatores = outrosFatores ?? '';
    this.vinculoEpidemiologico = vinculoEpidemiologico ?? '';
    this.fatoresRisco = fatoresRisco ?? [];
    this.internacoes = internacoes ?? [];
    this.testes = testes ?? [];
    this.outrosTestes = outrosTestes ?? [];
    this.status = status ?? [];
  }
};
