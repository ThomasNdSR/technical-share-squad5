import User from "../models/User.js";

const users = [
  new User({
    _id: "624f2477d07fa608ca7e8a68",
    name: "João",
    email: "joao@fcamara.com",
    password: "$2b$12$nZdUfXZVZyfgh7rvP4j0W.d3MQl8pC5MahTn0o8A3C/Lvx7zCVZru",
    role: "Ux/UI Designer",
    skill: ["624f2e515a8df8256170adc9"],
    project:["Laranja Mecânica BOT","Anjaro","LasTech","Programa de formação"],
  }),
  new User({
    _id: "624f249ed07fa608ca7e8a6b",
    name: "Ana Julia",
    email: "ana.julia@fcamara.com",
    password: "$2b$12$PFWsE6FnhKoIg33lbtmYMuM6z3dXwQm/UfEXhCASNmgoU.gDALN6S",
    role: "Ux/UI Designer",
    skill: [
      "624f2e515a8df8256170adc9",
      "624f2e515a8df8256170adca",
      "624f2e515a8df8256170adcc",
    ],
    project:["Aloha","Blu Tor"],
    available: [
      {
        week: [
          {
            weekday: 1,
            timeHour: [7, 10, 11, 12],
          },
          {
            weekday: 3,
            timeHour: [10],
          },
          {
            weekday: 5,
            timeHour: [8, 9, 10],
          },
        ],
      },
    ],
    img: "6251c7e9b16517af733f2a8e",
  }),
  new User({
    _id: "624f24b4d07fa608ca7e8a6e",
    name: "Jéssica Cunha",
    email: "jessica.cunha@fcamara.com",
    password: "$2b$12$PFWsE6FnhKoIg33lbtmYMuM6z3dXwQm/UfEXhCASNmgoU.gDALN6S",
    role: "Ux/UI Designer",
    skill: ["624f2e515a8df8256170adca", "624f2e515a8df8256170adcc"],
    project:["Anjaro"],
    available: [
      {
        week: [
          {
            weekday: 1,
            timeHour: [16, 17, 18, 19],
          },
        ],
      },
    ],
    img: "6251c5269ed28b7b27b20b46",
  }),
  new User({
    _id: "624f24cdd07fa608ca7e8a71",
    name: "Pedro Macedo",
    email: "pedro.macedo@fcamara.com",
    password: "$2b$12$ARaKNy3NUjOf3LuK4tBk/epgNLcqFRTcEQBTUvc3QnFarEeOw3VWW",
    role: "Fullstack Developer",
    skill: ["624f2e515a8df8256170adb7", "624f2e515a8df8256170adb8"],
    project:["Laranja Mecânica BOT","LasTech"],
    available: [
      {
        week: [
          {
            weekday: 5,
            timeHour: [7, 8, 9],
          },
          {
            weekday: 6,
            timeHour: [10, 11],
          },
        ],
      },
    ],
    img: "6251c4a409f76b69a4ad3c37",
  }),
  new User({
    _id: "624f24e6d07fa608ca7e8a74",
    name: "Ana Furtado",
    email: "ana.furtado@fcamara.com",
    password: "$2b$12$auhCSLCD93eNLi4PxZGvBu8QAqL86WUpaJyw.9B7hVWSfPGAJ5jt.",
    role: "Quality Assurance",
    skill: ["624f2e515a8df8256170adb9", "624f2e515a8df8256170adba"],
    project:["SquadBank","Programa de formação"],
    available: [
      {
        week: [
          {
            weekday: 1,
            timeHour: [7, 10, 11, 12],
          },
          {
            weekday: 2,
            timeHour: [10],
          },
          {
            weekday: 3,
            timeHour: [8, 9, 10],
          },
        ],
      },
    ],
    img: "6251c58e54837ecb533e2f8b",
  }),
  new User({
    _id: "624f250bd07fa608ca7e8a77",
    name: "Maria Rodrigues",
    email: "maria.rodrigues@fcamara.com",
    role: "Ux/UI Designer",
    password: "$2b$12$Tq3nK2nqPJLUwYIwkAcw3ux6aof0.TjcRJSmu2brNI7p74wqNKcYq",
    skill: [
      "624f2e515a8df8256170adc9",
      "624f2e515a8df8256170adca",
      "624f2e515a8df8256170adcc",
    ],
    project:["Laranja Mecânica BOT","SquadBank","Anjaro"],
    available: [
      {
        week: [
          {
            weekday: 3,
            timeHour: [12, 13, 14, 15],
          },
          {
            weekday: 4,
            timeHour: [10, 11, 12],
          },
          {
            weekday: 5,
            timeHour: [8, 9],
          },
        ],
      },
    ],
    img: "6251cddd6f3fed45c57b7f38",
  }),
  new User({
    _id: "624f251fd07fa608ca7e8a7a",
    name: "Caique Colombo",
    email: "caique.colombo@fcamara.com",
    role: "Ux/UI Designer",
    password: "$2b$12$2s6v4eg7sKszw5V2A1jWauGQMvnHCVI2nfYF/veDQq8tt7xl9pnR.",
    skill: [
      "624f2e515a8df8256170adc9",
      "624f2e515a8df8256170adca",
      "624f2e515a8df8256170adcc",
      "624f2e515a8df8256170adcd",
    ],
    project:[],
    available: [
      {
        week: [
          {
            weekday: 1,
            timeHour: [7, 10],
          },
          {
            weekday: 3,
            timeHour: [10],
          },
          {
            weekday: 6,
            timeHour: [8, 9, 10],
          },
        ],
      },
    ],
    img: "6251ced7a2ccc4bc62a54494",
  }),
  new User({
    _id: "624f252dd07fa608ca7e8a7d",
    name: "Lucas Nogueira",
    email: "lucas.nogueira@fcamara.com",
    role: "Ux/UI Designer",
    password: "$2b$12$eYJHJi5PZB767YEBPVO9g.l/YudqELMeue0wmy2EqrgZVE4ITj.2W",
    skill: ["624f2e515a8df8256170adc9"],
    project:["SquadBank","Blu Tor","Programa de formação"],
    available: [
      {
        week: [
          {
            weekday: 3,
            timeHour: [10, 11, 12],
          },
          {
            weekday: 4,
            timeHour: [10, 11, 12],
          },
        ],
      },
    ],
    img: "6251cddd6f3fed45c57b7f38",
  }),
  new User({
    _id: "624f2544d07fa608ca7e8a80",
    name: "Matheus Santos",
    email: "matheus.santos@fcamara.com",
    role: "Ux/UI Designer",
    password: "$2b$12$H/zBajiSFEj3zOR6/vh8hOf7./.2Vdtf/QMgBppw/78rTi9phEfz6",
    skill: ["624f2e515a8df8256170adc9"],
    project:["Blu Tor","Águia Azul"],
    available: [
      {
        week: [
          {
            weekday: 1,
            timeHour: [7, 10, 11, 12],
          },
          {
            weekday: 2,
            timeHour: [10],
          },
          {
            weekday: 3,
            timeHour: [8, 9, 10],
          },
        ],
      },
    ],
    img: "6251d0cb86252a0148c6d53a",
  }),
  new User({
    _id: "624f2552d07fa608ca7e8a83",
    name: "Isabela Alves",
    email: "isabela.alves@fcamara.com",
    role: "Fullstack Developer",
    password: "$2b$12$elbwB/yLpOdTEJmOJLY5L.G6CDKZVNrZ7s71XcKp6LVg78/oRf8vG",
    skill: [
      "624f2e515a8df8256170adb8",
      "624f2e515a8df8256170adb7",
      "624f2e515a8df8256170adb9",
    ],
    project:["Laranja Mecânica BOT","Blu Tor","Águia Azul"],
    available: [
      {
        week: [
          {
            weekday: 2,
            timeHour: [12],
          },
          {
            weekday: 3,
            timeHour: [10],
          },
          {
            weekday: 4,
            timeHour: [8, 9, 10],
          },
        ],
      },
    ],
    img: "6251d22c474ce0bf30def781",
  }),
  new User({
    _id: "624f2562d07fa608ca7e8a86",
    name: "Milena Guimarães",
    email: "milena.guimaraes@fcamara.com",
    role: "Fullstack Developer",
    password: "$2b$12$JgC/zePF3looS/XlL22n6ekuSLF5XbDMtk1/iTzKAJIUcn3v2Oa6S",
    skill: ["624f2e515a8df8256170adb8"],
    project:["SquadBank","Anjaro"],
    available: [
      {
        week: [
          {
            weekday: 3,
            timeHour: [7, 10, 11, 12],
          },
          {
            weekday: 4,
            timeHour: [10],
          },
          {
            weekday: 5,
            timeHour: [8, 9, 10],
          },
        ],
      },
    ],
    img: "6251d2ea10c90e65372c946b",
  }),
  new User({
    _id: "624f256fd07fa608ca7e8a89",
    name: "Pedro Silva",
    email: "pedro.silva@fcamara.com",
    role: "Fullstack Developer",
    password: "$2b$12$L54t9UXNfcFiB45AjQpRRefd3MWwfDbG9tDk3OD8SvwA5huyV8JX.",
    skill: ["624f2e515a8df8256170adb7"],
    project:["Blu Tor","Águia Azul","Aloha","Cosmosfera"],
    available: [
      {
        week: [
          {
            weekday: 5,
            timeHour: [7, 10, 11, 12],
          },
          {
            weekday: 6,
            timeHour: [10],
          },
          {
            weekday: 0,
            timeHour: [8, 9, 10],
          },
        ],
      },
    ],
    img: "6251d38f1f5f5f40d34c4407",
  }),
  new User({
    _id: "624f257cd07fa608ca7e8a8c",
    name: "Luiza Oliveira",
    email: "luiza.oliveira@fcamara.com",
    role: "Fullstack Developer",
    password: "$2b$12$iQFuxDEetopFRiwGvWK08.Yhbyrj.FZwkRKZAvZjintQ3KakGu9HS",
    skill: ["624f2e515a8df8256170adbc", "624f2e515a8df8256170adb8"],
    project:["Laranja Mecânica BOT","Aloha","Cosmosfera"],
    available: [
      {
        week: [
          {
            weekday: 0,
            timeHour: [7, 10, 11, 12],
          },
          {
            weekday: 1,
            timeHour: [10, 11, 12],
          },
          {
            weekday: 2,
            timeHour: [8, 9, 10],
          },
        ],
      },
    ],
    img: "6251d47841248284b71d9db3",
  }),
  new User({
    _id: "624f2593d07fa608ca7e8a8f",
    name: "Gabriel Pires",
    email: "gabriel.pires@fcamara.com",
    role: "Fullstack Developer",
    password: "$2b$12$YoHtmyia.0L0Ru0v6XRZ2O7d5DLUgJ3ss2UKXr6B3tR0s5YxYuJx6",
    skill: ["624f2e515a8df8256170adbc", "624f2e515a8df8256170adb8"],
    project:["Aloha","Cosmosfera","Programa de formação"],
    available: [
      {
        week: [
          {
            weekday: 2,
            timeHour: [7, 10, 11, 12],
          },
          {
            weekday: 3,
            timeHour: [10],
          },
          {
            weekday: 4,
            timeHour: [8, 9, 10],
          },
        ],
      },
    ],
    img: "6251d51c2caf012668513c60",
  }),
  new User({
    _id: "624f25a2d07fa608ca7e8a92",
    name: "Giovana Ramos",
    email: "giovana.ramos@fcamara.com",
    role: "Fullstack Developer",
    password: "$2b$12$NCTME5s6gpAKF3bpfvRwDutkD9Bm7HRcln4HNlXYpfSyKQElUjeYi",
    skill: ["624f2e515a8df8256170adb7", "624f2e515a8df8256170adb8"],
    project:["SquadBank"],
    available: [
      {
        week: [
          {
            weekday: 1,
            timeHour: [7, 10, 11, 12],
          },
          {
            weekday: 3,
            timeHour: [10],
          },
          {
            weekday: 5,
            timeHour: [8, 9, 10],
          },
        ],
      },
    ],
    img: "6251d5cbdfe714a0b1881a2d",
  }),
  new User({
    _id: "624f25b2d07fa608ca7e8a95",
    name: "Bruno Costa",
    email: "bruno.costa@fcamara.com",
    role: "Fullstack Developer",
    password: "$2b$12$fpTezvbjG676OUnEAGPUgewtgMY.bY6lrzbXZgExtNewqfXHwfAvi",
    skill: ["624f2e515a8df8256170adb7", "624f2e515a8df8256170adb8"],
    project:["Verano"],
    available: [
      {
        week: [
          {
            weekday: 2,
            timeHour: [7, 10, 11, 12],
          },
          {
            weekday: 4,
            timeHour: [10],
          },
          {
            weekday: 6,
            timeHour: [8, 9, 10],
          },
        ],
      },
    ],
    img: "6251d67414655eb6b123d7b1",
  }),
  new User({
    _id: "6251dcb4f337ade139be2a7f",
    name: "Israel Ferreira",
    email: "israel.ferreira@fcamara.com",
    role: "Quality Assurance",
    password: "$2b$12$.3mYnFuoZ0vv41riOJIZtulXhWwdjBCFA3uI4iEW6soK1W8rzcFHy",
    skill: [
      "624f2e515a8df8256170adba",
      "624f2e515a8df8256170adbb",
      "624f2e515a8df8256170adbd",
    ],
    project:["Laranja Mecânica BOT","LasTech"],
    available: [
      {
        week: [
          {
            weekday: 2,
            timeHour: [7, 10, 11, 12],
          },
          {
            weekday: 3,
            timeHour: [10],
          },
          {
            weekday: 4,
            timeHour: [8, 9, 10],
          },
          {
            weekday: 5,
            timeHour: [8, 9, 10],
          },
        ],
      },
    ],
    img: "6251dddd5567722dd80d0348",
  }),
  new User({
    _id: "6251de52f473ea6170b0c630",
    name: "Leonardo Ribeiro",
    email: "leonardo.ribeiro@fcamara.com",
    role: "Quality Assurance",
    password: "$2b$12$4j87Bw6JZH7c/ZBUUwTaueshB6qlLskIua/uUaxGO2NVC9gfms5Nm",
    skill: [
      "624f2e515a8df8256170adba",
      "624f2e515a8df8256170adbb",
      "624f2e515a8df8256170adbd",
    ],
    project:["Laranja Mecânica BOT","Anjaro","Aloha"],
    available: [
      {
        week: [
          {
            weekday: 2,
            timeHour: [7, 10, 11, 12],
          },
          {
            weekday: 3,
            timeHour: [10],
          },
          {
            weekday: 4,
            timeHour: [8, 9, 10],
          },
          {
            weekday: 5,
            timeHour: [8, 9, 10],
          },
        ],
      },
    ],
    img: "6251de82f473ea6170b0c633",
  }),
];

export default users;
