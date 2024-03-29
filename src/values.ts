export const valuesByDay = [
  {
    confirmados: 21822,
    suspeitos: 13413,
    descartados: 1486,
    mortes: 360,
    confirmadosM: 13172,
    confirmadosF: 8650,
    date: new Date(),
  },
  {
    confirmados: 21888,
    suspeitos: 13459,
    descartados: 1486,
    mortes: 360,
    confirmadosM: 13222,
    confirmadosF: 8666,
    date: new Date(new Date().setDate(new Date().getDate()-1)),
  },
  {
    confirmados: 21938,
    suspeitos: 13506,
    descartados: 1486,
    mortes: 360,
    confirmadosM: 13249,
    confirmadosF: 8689,
    date: new Date(new Date().setDate(new Date().getDate()-2)),
  },
  {
    confirmados: 22009,
    suspeitos: 13543,
    descartados: 1486,
    mortes: 360,
    confirmadosM: 13303,
    confirmadosF: 8706,
    date: new Date(new Date().setDate(new Date().getDate()-3)),
  },
  {
    confirmados: 22075,
    suspeitos: 13561,
    descartados: 1486,
    mortes: 360,
    confirmadosM: 13343,
    confirmadosF: 8732,
    date: new Date(new Date().setDate(new Date().getDate()-4)),
  },
  {
    confirmados: 22121,
    suspeitos: 13609,
    descartados: 1486,
    mortes: 360,
    confirmadosM: 13375,
    confirmadosF: 8746,
    date: new Date(new Date().setDate(new Date().getDate()-5)),
  },
  {
    confirmados: 22134,
    suspeitos: 13609,
    descartados: 1486,
    mortes: 360,
    confirmadosM: 13386,
    confirmadosF: 8748,
    date: new Date(new Date().setDate(new Date().getDate()-6)),
  },
  {
    confirmados: 22137,
    suspeitos: 13607,
    descartados: 1486,
    mortes: 360,
    confirmadosM: 13387,
    confirmadosF: 8750,
    date: new Date(new Date().setDate(new Date().getDate()-7)),
  },
];

export const valuesToday = {
  today: {
    confirmados: 22137,
    suspeitos: 13607,
    descartados: 1486,
    confirmadosM: 13387,
    confirmadosF: 8750,
    confirmadosInternacoes: 1211,
    suspeitosInternacoes: 176,
    descartadosInternacoes: 197,
  },
  lastWeek: {
    confirmados: 21822,
    suspeitos: 13413,
    descartados: 1486,
    confirmadosM: 13172,
    confirmadosF: 8650,
  },
  taxas: {
    confirmado: 1.4434973879571074,
    suspeito: 1.4463580108849623,
    descartado: 0,
  },
};
