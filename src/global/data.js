/* eslint-disable import/no-anonymous-default-export */

export default [
  {
    id: "1",
    lvl: "1",
    subordinateTo: [],
    subordinates: ["2", "3", "4", "5", "12"],
    data: {
      name: "PAULO ROBERTO",
      function: "Presidente",
      area: "Presidência",
      email: "@email.com",
      telefone: " 9999 9999",
      ramal: "5",
      celular: "83 9 9999 9999",
      data_de_nascimento: "06/09/1997",
    },
    style: {
      display: "flex",
      padding: 0,
      width: 100,
      height: 100,
      alignItems: "center",
      borderRadius: "50%",
      background: "#e1e1e1",
      border: "15px solid #6badf0",

      cursor: "pointer",
      boxShadow: "1px 3px 6px 1px gray",
    },
    position: { x: 100, y: 200 },
    isHidden: false,
  },
  {
    id: "2",
    lvl: "2",
    subordinateTo: ["1"],
    subordinates: ["6", "7", "17"],
    data: {
      name: "Lisa Murkowsk",
      function: "Diretor",
      area: "Diretor de Vendas",
      email: "@email.com",
      telefone: " 9999 9999",
      ramal: "5",
      celular: "83 9 9999 9999",
      data_de_nascimento: "06/09/1997",
    },
    style: {
      display: "flex",
      padding: 0,
      width: 100,
      height: 100,
      alignItems: "center",
      borderRadius: "50%",
      background: "#e1e1e1",
      border: "15px solid #1e279a",
      cursor: "pointer",
      boxShadow: "1px 3px 6px 1px gray",
    },
    position: { x: 300, y: 200 },
    isHidden: false,
  },
  {
    id: "3",
    lvl: "2",
    subordinateTo: ["1"],
    subordinates: [],
    data: {
      name: "Dan Sullivan",
      function: "Diretor",
      area: "Diretor de Vendas",
      email: "@email.com",
      telefone: " 9999 9999",
      ramal: "5",
      celular: "83 9 9999 9999",
      data_de_nascimento: "06/09/1997",
    },
    style: {
      display: "flex",
      padding: 0,
      width: 100,
      height: 100,
      alignItems: "center",
      borderRadius: "50%",
      background: "#e1e1e1",
      border: "15px solid #1e279a",

      cursor: "pointer",
      boxShadow: "1px 3px 6px 1px gray",
    },
    position: { x: 100, y: 400 },
    isHidden: false,
  },
  {
    id: "4",
    lvl: "2",
    subordinateTo: ["1"],
    subordinates: [],
    data: {
      name: "Richard Shelby",
      function: "Diretor",
      area: "Diretor de Vendas",
      email: "@email.com",
      telefone: " 9999 9999",
      ramal: "5",
      celular: "83 9 9999 9999",
      data_de_nascimento: "06/09/1997",
    },
    style: {
      display: "flex",
      padding: 0,
      width: 100,
      height: 100,
      alignItems: "center",
      borderRadius: "50%",
      background: "#e1e1e1",
      border: "15px solid #1e279a",

      cursor: "pointer",
      boxShadow: "1px 3px 6px 1px gray",
    },
    position: { x: -100, y: 200 },
    isHidden: false,
  },
  {
    id: "5",
    lvl: "2",
    subordinateTo: ["1"],
    subordinates: [],
    data: {
      name: "SHEYLA ANGELOTTI",
      function: "Diretor",
      area: "Diretor de Vendas",
      email: "@email.com",
      telefone: " 9999 9999",
      ramal: "5",
      celular: "83 9 9999 9999",
      data_de_nascimento: "06/09/1997",
    },
    style: {
      display: "flex",
      padding: 0,
      width: 100,
      height: 100,
      alignItems: "center",
      borderRadius: "50%",
      background: "#e1e1e1",
      border: "15px solid #1e279a",

      cursor: "pointer",
      boxShadow: "1px 3px 6px 1px gray",
    },
    position: { x: 100, y: -0 },
    isHidden: false,
  },
  {
    id: "6",
    lvl: "3",
    subordinateTo: ["2"],
    subordinates: ["8", "9", "10"],
    data: {
      name: "WAGNER LELLIS",
      function: "Superintendente",
      area: "Vendas",
      email: "@email.com",
      telefone: " 9999 9999",
      ramal: "5",
      celular: "83 9 9999 9999",
      data_de_nascimento: "06/09/1997",
    },
    style: {
      display: "flex",
      padding: 0,
      width: 100,
      height: 100,
      alignItems: "center",
      borderRadius: "50%",
      background: "#e1e1e1",
      border: "15px solid  #9172a6",

      cursor: "pointer",
      boxShadow: "1px 3px 6px 1px gray",
    },
    position: { x: 500, y: 200 },
    isHidden: false,
  },
  {
    id: "7",
    lvl: "3",
    subordinateTo: ["2"],
    subordinates: [],
    data: {
      name: "Mark Kelly",
      function: "Superintendente",
      area: "RH",
      email: "@email.com",
      telefone: " 9999 9999",
      ramal: "5",
      celular: "83 9 9999 9999",
      data_de_nascimento: "06/09/1997",
    },
    style: {
      display: "flex",
      padding: 0,
      width: 100,
      height: 100,
      alignItems: "center",
      borderRadius: "50%",
      background: "#e1e1e1",
      border: "15px solid  #9172a6",

      cursor: "pointer",
      boxShadow: "1px 3px 6px 1px gray",
    },
    position: { x: 400, y: 450 },
    isHidden: false,
  },
  {
    id: "8",
    lvl: "4",
    subordinateTo: ["6"],
    subordinates: ["14"],
    data: {
      name: "Elizabeth Warren",
      function: "Gerente",
      area: "Gerente de Vendas",
      email: "@email.com",
      telefone: " 9999 9999",
      ramal: "5",
      celular: "83 9 9999 9999",
      data_de_nascimento: "06/09/1997",
    },
    style: {
      display: "flex",
      padding: 0,
      width: 100,
      height: 100,
      alignItems: "center",
      borderRadius: "50%",
      background: "#e1e1e1",
      border: "15px solid  #db8a4f",

      cursor: "pointer",
      boxShadow: "1px 3px 6px 1px gray",
    },
    position: { x: 700, y: 200 },
    isHidden: false,
  },
  {
    id: "9",
    lvl: "4",
    subordinateTo: ["6"],
    subordinates: [],
    data: {
      name: "Ed Markey",
      function: "Gerente",
      area: "Gerente",
      email: "@email.com",
      telefone: " 9999 9999",
      ramal: "5",
      celular: "83 9 9999 9999",
      data_de_nascimento: "06/09/1997",
    },
    style: {
      display: "flex",
      padding: 0,
      width: 100,
      height: 100,
      alignItems: "center",
      borderRadius: "50%",
      background: "#e1e1e1",
      border: "15px solid  #db8a4f",

      cursor: "pointer",
      boxShadow: "1px 3px 6px 1px gray",
    },
    position: { x: 680, y: 400 },
    isHidden: false,
  },
  {
    id: "10",
    lvl: "5",
    subordinateTo: [6],
    subordinates: [],
    data: {
      name: "ANDRE ANTONIO ",
      function: "Coordenador",
      area: "Coordenação",
      email: "@email.com",
      telefone: " 9999 9999",
      ramal: "5",
      celular: "83 9 9999 9999",
      data_de_nascimento: "06/09/1997",
    },
    style: {
      display: "flex",
      padding: 0,
      width: 100,
      height: 100,
      alignItems: "center",
      borderRadius: "50%",
      background: "#e1e1e1",
      border: "15px solid  #c25558",

      cursor: "pointer",
      boxShadow: "1px 3px 6px 1px gray",
    },
    position: { x: 750, y: 700 },
    isHidden: false,
  },
  {
    id: "11",
    lvl: "7",
    subordinateTo: [],
    subordinates: [],
    data: {
      name: "JORGE EDUARDO ",
      function: "ASSIST COM. CRIAÇÃO E PRODUCAO II",
      email: "@email.com",
      telefone: " 9999 9999",
      ramal: "5",
      celular: "83 9 9999 9999",
      data_de_nascimento: "06/09/1997",
    },
    style: {
      display: "flex",
      width: 150,
      height: 50,
      padding: "2",
      alignItems: "center",
      borderRadius: "20px",
      background: "#e1e1e1",
      border: "none",
      cursor: "pointer",
      boxShadow: "1px 3px 6px 1px gray",
      opacity: "80%",
    },
    position: { x: 780, y: 350 },
    isHidden: false,
  },
  {
    id: "12",
    lvl: "3",
    subordinateTo: ["1"],
    subordinates: [],
    data: {
      name: "Kyrstem Sinema",
      function: "Superintendente",
      area: "Vendas",
      email: "@email.com",
      telefone: " 9999 9999",
      ramal: "5",
      celular: "83 9 9999 9999",
      data_de_nascimento: "06/09/1997",
    },
    style: {
      display: "flex",
      padding: 0,
      width: 100,
      height: 100,
      alignItems: "center",
      borderRadius: "50%",
      background: "#e1e1e1",
      border: "15px solid  #9172a6",

      cursor: "pointer",
      boxShadow: "1px 3px 6px 1px gray",
    },
    position: { x: 400, y: -50 },
    isHidden: false,
  },
  {
    id: "13",
    lvl: "7",
    subordinateTo: [],
    subordinates: [],
    data: {
      name: "LEONARDO DE PAIVA ",
      function: "CONSELHEIRO ADMINISTRATIVO",
      email: "@email.com",
      telefone: " 9999 9999",
      ramal: "5",
      celular: "83 9 9999 9999",
      data_de_nascimento: "06/09/1997",
    },
    style: {
      display: "flex",
      width: 150,
      height: 50,
      padding: "2",
      alignItems: "center",
      borderRadius: "20px",
      background: "#e1e1e1",
      border: "none",
      cursor: "pointer",
      boxShadow: "1px 3px 6px 1px gray",
      opacity: "80%",
    },
    position: { x: 350, y: 120 },
    isHidden: false,
  },
  {
    id: "14",
    lvl: "5",
    subordinateTo: [8],
    subordinates: [],
    data: {
      name: "FRANCISCO DAS CHAGAS ",
      function: "Coordenador",
      area: "Coordenação",
      email: "@email.com",
      telefone: " 9999 9999",
      ramal: "5",
      celular: "83 9 9999 9999",
      data_de_nascimento: "06/09/1997",
    },
    style: {
      display: "flex",
      padding: 0,
      width: 100,
      height: 100,
      alignItems: "center",
      borderRadius: "50%",
      background: "#e1e1e1",
      border: "15px solid  #c25558",

      cursor: "pointer",
      boxShadow: "1px 3px 6px 1px gray",
    },
    position: { x: 900, y: 200 },
    isHidden: false,
  },
  {
    id: "15",
    lvl: "7",
    subordinateTo: [],
    subordinates: [],
    data: {
      name: "THIAGO SILVA ",
      function: "ESPECIA EM CONTR INTERNOS E GEST RISCO",
      email: "@email.com",
      telefone: " 9999 9999",
      ramal: "5",
      celular: "83 9 9999 9999",
      data_de_nascimento: "06/09/1997",
    },
    style: {
      display: "flex",
      width: 150,
      height: 50,
      padding: "2",
      alignItems: "center",
      borderRadius: "20px",
      background: "#e1e1e1",
      border: "none",
      cursor: "pointer",
      boxShadow: "1px 3px 6px 1px gray",
      opacity: "80%",
    },
    position: { x: -80, y: 0 },
    isHidden: false,
  },
  {
    id: "16",
    lvl: "6",
    subordinateTo: [8],
    subordinates: [],
    data: {
      name: "WILLIAN RIBEIRO ",
      function: " ESTAGIARIO",
      area: "Coordenação",
      email: "@email.com",
      telefone: " 9999 9999",
      ramal: "5",
      celular: "83 9 9999 9999",
      data_de_nascimento: "06/09/1997",
    },
    style: {
      display: "flex",
      padding: 0,
      width: 100,
      height: 100,
      alignItems: "center",
      borderRadius: "50%",
      background: "#e1e1e1",
      border: "15px solid  #62e8e9",

      cursor: "pointer",
      boxShadow: "1px 3px 6px 1px gray",
    },
    position: { x: 1100, y: 200 },
    isHidden: false,
  },
  {
    id: "17",
    lvl: "5",
    subordinateTo: [2],
    subordinates: [],
    data: {
      name: "MARIA EUGENIA ",
      function: "Coordenador",
      area: "Coordenação",
      email: "@email.com",
      telefone: " 9999 9999",
      ramal: "5",
      celular: "83 9 9999 9999",
      data_de_nascimento: "06/09/1997",
    },
    style: {
      display: "flex",
      padding: 0,
      width: 100,
      height: 100,
      alignItems: "center",
      borderRadius: "50%",
      background: "#e1e1e1",
      border: "15px solid  #c25558",

      cursor: "pointer",
      boxShadow: "1px 3px 6px 1px gray",
    },
    position: { x: 850, y: -100 },
    isHidden: false,
  },
];
