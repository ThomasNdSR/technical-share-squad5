# <h1 align="center">
  Technical Share - API
</h1>

<p align = "center">
Este é o backend da aplicação Technical Share. O objetivo dessa aplicação é ser o servidor do front-end, conectando com o banco de dados e controlando as informações. 
</p>

## **Endpoints**

A API tem um total de 25 endpoints, podendo cadastrar o perfil, validar o perfil, editar os dados pessoais do usuário, como skills, projetos, área de função, imagem de perfil e disponibilidade, agendamento de mentoria entre os usuários e o cancelamento da mentoria. <br/>

<h2 align ='center'> Populando o banco de dados (Docker) </h2>

Ao utilizar o docker será necessário popular o banco do contêiner:

`GET /localhost:8000/seed -  FORMATO DA RESPOSTA - STATUS 201`
```json
{
    "message": "Banco Populado com sucesso!"
}
```
Caso necessite limpar o banco do docker, pode realizar da seguinte maneira:

`DELETE /localhost:8000/seed -  FORMATO DA RESPOSTA - STATUS 201`
```json
{
    "message": "Dados limpados com sucesso!"
}
```

<h2 align ='center'> Listando usuários </h2>

Nessa aplicação, o usuário, após fazer login, pode ver os usuários já cadastrados na plataforma. Na API podemos acessar a lista dessa forma:

`GET /localhost:8000/user -  FORMATO DA RESPOSTA - STATUS 200`
```json
[
    {
        "_id": "624f2552d07fa608ca7e8a83",
        "name": "Isabela Alves",
        "role": "Fullstack Developer",
        "img": {
            "_id": "6251d22c474ce0bf30def781",
            "originalName": "modelo09.png",
            "path": "public/img/1649529388674-modelo09.png",
            "__v": 0
        },
        "skill": [
            {
                "_id": "624f2e515a8df8256170adb8",
                "name": "Back-end",
                "__v": 0
            },
            {
                "_id": "624f2e515a8df8256170adb7",
                "name": "Front-end",
                "__v": 0
            },
            {
                "_id": "624f2e515a8df8256170adb9",
                "name": "Acessibilidade",
                "__v": 0
            }
        ],
        "project": [
            "Laranja Mecânica BOT",
            "Blu Tor",
            "Águia Azul"
        ],
        "available": [
            {
                "week": [
                    {
                        "weekday": 2,
                        "timeHour": [
                            12
                        ],
                        "_id": "62544ffd864ae8eb2f0d7b1b"
                    },
                    {
                        "weekday": 3,
                        "timeHour": [
                            10
                        ],
                        "_id": "62544ffd864ae8eb2f0d7b1c"
                    },
                    {
                        "weekday": 4,
                        "timeHour": [
                            8,
                            9,
                            10
                        ],
                        "_id": "62544ffd864ae8eb2f0d7b1d"
                    }
                ],
                "_id": "62544ffd864ae8eb2f0d7b1a"
            }
        ]
    },
    {
        "_id": "624f2477d07fa608ca7e8a68",
        "name": "João",
        "role": "Ux/UI Designer",
        "skill": [
            {
                "_id": "624f2e515a8df8256170adc9",
                "name": "UI Design",
                "__v": 0
            }
        ],
        "project": [
            "Laranja Mecânica BOT",
            "Anjaro",
            "LasTech",
            "Programa de formação"
        ],
        "available": []
    },
```

<h2 align ='center'> Retornando perfil do usuário </h2>

Os dados pessoais de cada perfil, serão acessados utilizando como parâmetro o id do usuário:

`GET localhost:8000/user/:id -  FORMATO DA RESPOSTA - STATUS 200`
```json
{
    "_id": "624f249ed07fa608ca7e8a6b",
    "name": "Ana Julia",
    "email": "ana.julia@fcamara.com",
    "role": "Ux/UI Designer",
    "img": {
        "_id": "6251c7e9b16517af733f2a8e",
        "originalName": "modelo13.png",
        "path": "public/img/1649526761408-modelo13.png",
        "__v": 0
    },
    "skill": [
        {
            "_id": "624f2e515a8df8256170adc9",
            "name": "UI Design",
            "__v": 0
        },
        {
            "_id": "624f2e515a8df8256170adca",
            "name": "UX Design",
            "__v": 0
        },
        {
            "_id": "624f2e515a8df8256170adcc",
            "name": "UX Research",
            "__v": 0
        }
    ],
    "project": [
        "Aloha",
        "Blu Tor"
    ],
    "available": [
        {
            "week": [
                {
                    "weekday": 1,
                    "timeHour": [
                        7,
                        10,
                        11,
                        12
                    ],
                    "_id": "62599fa44296e9902c6d3cf5"
                },
                {
                    "weekday": 3,
                    "timeHour": [
                        10
                    ],
                    "_id": "62599fa44296e9902c6d3cf6"
                },
                {
                    "weekday": 5,
                    "timeHour": [
                        8,
                        9,
                        10
                    ],
                    "_id": "62599fa44296e9902c6d3cf7"
                }
            ],
            "_id": "62599fa44296e9902c6d3cf4"
        }
    ],
    "favorite": []
}
```

<h2 align ='center'> Validação de acesso do usuário cadastrado </h2>

Será feita uma validação de login para verificação se o usuário contém o cadastro feito na plataforma, os dados de envio no corpo da requisição serão:

`POST /user -  FORMATO DA REQUISIÇÃO`
```json
{
    "email":"ana.julia@fcamara.com",
    "password":"teste"
}
```

Resposta de sucesso:

`POST /user -  FORMATO DA RESPOSTA - STATUS 200`
```json
{
    "id": "624f249ed07fa608ca7e8a6b",
    "name": "Ana Julia",
    "email": "ana.julia@fcamara.com"
}
```

<h2 align ='center'> Criação de perfil do usuário </h2>

Será necessário enviar para a criação no corpo da requisição os seguintes dados.

`POST localhost:8000/user/create -  FORMATO DA REQUISIÇÃO`
```json
{
    "name":"Alan",
    "email":"alan@fcamara.com",
    "password":"teste"
}
```

Resposta de sucesso:

`POST localhost:8000/user/create -  FORMATO DA RESPOSTA - STATUS 201`
```json
{
    "message": "Usuario cadastrado com Sucesso"
}
```


<h2 align ='center'> Listar skills cadastradas </h2>

Será realizada uma requisição que retorna as skills que tem o cadastro no banco de dados, sendo acessado da seguinte forma:

`GET localhost:8000/skill -  FORMATO DA RESPOSTA - STATUS 201`
```json
[
    {
        "_id": "624f2e515a8df8256170adb7",
        "name": "Front-end",
        "__v": 0
    },
    {
        "_id": "624f2e515a8df8256170adb8",
        "name": "Back-end",
        "__v": 0
    },
    {
        "_id": "624f2e515a8df8256170adb9",
        "name": "Acessibilidade",
        "__v": 0
    },
]
```

<h2 align ='center'> Criar nova skill </h2>

Para a criação de novas skills é preciso enviar os seguintes dados no corpo da requisição:

`POST /localhost:8000/seed -  FORMATO DA REQUISIÇÃO `
```json
{
    "name":"teste"
}
```

Resposta de sucesso:

`POST localhost:8000/skill -  FORMATO DA RESPOSTA - STATUS 201`
```json
{
    "name": "teste",
    "_id": "6259a3f44296e9902c6d3d6d",
    "__v": 0
}
```

<h2 align ='center'> Atualizar skill registrada </h2>

Envie o id do usuário que deseja vincular a skill como parâmetro da requisição. No corpo da requisição deve ser enviado um array com os id das skills:

`PUT /localhost:8000/skill/:id -  FORMATO DA REQUISIÇÃO `
```json
{
    "name":"teste 2"
}
```

Resposta de sucesso:

`POST /localhost:8000/skill/:id -  FORMATO DA RESPOSTA - STATUS 201`
```json
{
    "message": "Atualizado com sucesso"
}
```

<h2 align ='center'> Remover Skill registrada </h2>

Envie o id da skill que deseja remover como parâmetro da requisição:

`DELETE /localhost:8000/skill/:id -  FORMATO DA RESPOSTA - STATUS 200` `
```json
{
    "message": "Removido com sucesso"
}
```

<h2 align ='center'> Atualizar skill do usuário </h2>

Envie o id do usuario que deseja vincular a skill como parâmetro da requisição. No corpo da requisição deve ser enviado um array com os id das skills:

`PUT /localhost:8000/user/skill/:id -  FORMATO DA REQUISIÇÃO` `
```json
[
    "624f2e515a8df8256170adb7"
]
```

resposta de sucesso

`PUT /localhost:8000/user/skill/:id -  FORMATO DA RESPOSTA - STATUS 201`
```json
{
    "_id": "624f249ed07fa608ca7e8a6b",
    "skill": [
        {
            "_id": "624f2e515a8df8256170adb7",
            "name": "Front-end",
            "__v": 0
        }
    ]
}
```

<h2 align ='center'> Incluir foto do perfil do usuário </h2>

Envie o id do usuário que deseja atualizar a foto como parâmetro. No corpo da requisição deve ser enviado um form-data com a key profile-image:

`POST /localhost:8000/image/:id -  FORMATO DA REQUISIÇÃO` `
```json
key:profile-image
value:{endereço do local da imagem}
```

Resposta de sucesso:

`POST /localhost:8000/image/:id  -  FORMATO DA RESPOSTA - STATUS 200`
```json
{
    "message": "Imagem inclusa com sucesso"
}
```

<h2 align ='center'> Registrar disponibilidade do usuário </h2>

Envie o id do usuário que esta registrando a disponibilidade. No corpo da requisição deve ser enviado os dados do dia e horários:

`POST /localhost:8000/user/available/:id -  FORMATO DA REQUISIÇÃO` `
```json
{
    "week":[
        {
            "weekday":0,
            "timeHour":[8,9,10]
        }
    ]
}
```

Resposta de sucesso:

`POST /localhost:8000/user/available/:id -  FORMATO DA RESPOSTA - STATUS 200`
```json
{
    "_id": "624f249ed07fa608ca7e8a6b",
    "name": "Ana Julia",
    "email": "ana.julia@fcamara.com",
    "password": "$2b$12$PFWsE6FnhKoIg33lbtmYMuM6z3dXwQm/UfEXhCASNmgoU.gDALN6S",
    "role": "Ux/UI Designer",
    "img": "6259a74e4296e9902c6d3d75",
    "skill": [
        "624f2e515a8df8256170adb7"
    ],
    "project": [
        "Aloha",
        "Blu Tor"
    ],
    "available": [
        {
            "week": [
                {
                    "weekday": 0,
                    "timeHour": [
                        8,
                        9,
                        10
                    ],
                    "_id": "6259a7ff4296e9902c6d3d7a"
                }
            ],
            "_id": "6259a7ff4296e9902c6d3d79"
        }
    ],
    "favorite": [],
    "__v": 2
}
```

<h2 align ='center'> Criação de agendamentos do usuário </h2>

Envie o id do usuário que está criando o agendamento como parâmetro da requisição. No corpo da requisição deve ser enviado os dados do user com o id que criou o agendamento e o id do mentor que deseja realizar o agendamento.

`POST localhost:8000/user/appointment/:id -  FORMATO DA REQUISIÇÃO` `
```json
{
    "user":"624f249ed07fa608ca7e8a6b",
    "date":"2022/05/20",
    "time":"13:00",
    "place":"local",
    "mentor":"624f249ed07fa608ca7e8a6b",
    "status":"1"

}
```

Resposta de sucesso:

`POST localhost:8000/user/appointment/:id -  FORMATO DA RESPOSTA - STATUS 201`
```json
{
    "user": "624f249ed07fa608ca7e8a6b",
    "date": "2022-05-20T00:00:00.000Z",
    "time": "13:00",
    "place": "local",
    "mentor": "624f249ed07fa608ca7e8a6b",
    "status": true,
    "_id": "6259a96e4296e9902c6d3d82",
    "createdAt": "2022-04-15T17:20:46.831Z",
    "__v": 0
}
```


<h2 align ='center'> Consulta dos agendamentos do usuário </h2>

Envie o id do usuário que esta logado como parâmetro da requisição, a resposta será de todos os agendamentos daquele usuário:

`GET localhost:8000/user/appointment/:id - FORMATO DA RESPOSTA - STATUS 20` `
```json
[
    {
        "_id": "6259a96e4296e9902c6d3d82",
        "user": "624f249ed07fa608ca7e8a6b",
        "date": "2022-05-20T00:00:00.000Z",
        "time": "13:00",
        "place": "local",
        "mentor": {
            "_id": "624f249ed07fa608ca7e8a6b",
            "name": "Ana Julia",
            "email": "ana.julia@fcamara.com",
            "password": "$2b$12$PFWsE6FnhKoIg33lbtmYMuM6z3dXwQm/UfEXhCASNmgoU.gDALN6S",
            "role": "Ux/UI Designer",
            "img": {
                "_id": "6259a74e4296e9902c6d3d75",
                "originalName": "modelo14.png",
                "path": "public/img/1650042702110-modelo14.png",
                "__v": 0
            },
            "skill": [
                "624f2e515a8df8256170adb7"
            ],
            "project": [
                "Aloha",
                "Blu Tor"
            ],
            "available": [
                {
                    "week": [
                        {
                            "weekday": 0,
                            "timeHour": [
                                8,
                                9,
                                10
                            ],
                            "_id": "6259a7ff4296e9902c6d3d7a"
                        }
                    ],
                    "_id": "6259a7ff4296e9902c6d3d79"
                }
            ],
            "favorite": [],
            "__v": 2
        },
        "status": true,
        "createdAt": "2022-04-15T17:20:46.831Z",
        "__v": 0
    },
    {
        "_id": "6259ab014296e9902c6d3d84",
        "user": "624f249ed07fa608ca7e8a6b",
        "date": "2022-05-20T00:00:00.000Z",
        "time": "13:00",
        "place": "local",
        "mentor": {
            "_id": "624f249ed07fa608ca7e8a6b",
            "name": "Ana Julia",
            "email": "ana.julia@fcamara.com",
            "password": "$2b$12$PFWsE6FnhKoIg33lbtmYMuM6z3dXwQm/UfEXhCASNmgoU.gDALN6S",
            "role": "Ux/UI Designer",
            "img": {
                "_id": "6259a74e4296e9902c6d3d75",
                "originalName": "modelo14.png",
                "path": "public/img/1650042702110-modelo14.png",
                "__v": 0
            },
            "skill": [
                "624f2e515a8df8256170adb7"
            ],
            "project": [
                "Aloha",
                "Blu Tor"
            ],
            "available": [
                {
                    "week": [
                        {
                            "weekday": 0,
                            "timeHour": [
                                8,
                                9,
                                10
                            ],
                            "_id": "6259a7ff4296e9902c6d3d7a"
                        }
                    ],
                    "_id": "6259a7ff4296e9902c6d3d79"
                }
            ],
            "favorite": [],
            "__v": 2
        },
        "status": true,
        "createdAt": "2022-04-15T17:27:29.091Z",
        "__v": 0
    }
]
```

<h2 align ='center'> Consulta dos agendamentos do usuário como mentor</h2>

Envie o id do usuário que esta logado como parâmetro da requisição. A resposta será de todos os agendamentos daquele usuario como mentor:

`GET /localhost:8000/user/appointment/mentor/:id -  FORMATO DA RESPOSTA - STATUS 200`
```json
[
    {
        "_id": "6259a96e4296e9902c6d3d82",
        "user": {
            "_id": "624f249ed07fa608ca7e8a6b",
            "name": "Ana Julia",
            "email": "ana.julia@fcamara.com",
            "role": "Ux/UI Designer",
            "img": {
                "_id": "6259a74e4296e9902c6d3d75",
                "originalName": "modelo14.png",
                "path": "public/img/1650042702110-modelo14.png",
                "__v": 0
            }
        },
        "date": "2022-05-20T00:00:00.000Z",
        "time": "13:00",
        "place": "local",
        "mentor": "624f249ed07fa608ca7e8a6b",
        "status": true,
        "createdAt": "2022-04-15T17:20:46.831Z",
        "__v": 0
    },
    {
        "_id": "6259ab014296e9902c6d3d84",
        "user": {
            "_id": "624f249ed07fa608ca7e8a6b",
            "name": "Ana Julia",
            "email": "ana.julia@fcamara.com",
            "role": "Ux/UI Designer",
            "img": {
                "_id": "6259a74e4296e9902c6d3d75",
                "originalName": "modelo14.png",
                "path": "public/img/1650042702110-modelo14.png",
                "__v": 0
            }
        },
        "date": "2022-05-20T00:00:00.000Z",
        "time": "13:00",
        "place": "local",
        "mentor": "624f249ed07fa608ca7e8a6b",
        "status": true,
        "createdAt": "2022-04-15T17:27:29.091Z",
        "__v": 0
    }
]
```

<h2 align ='center'> Remover o agendamento</h2>

Envie o id do agendamento como parâmetro da requisição.

`DELETE /localhost:8000/user/appointment/:id -  FORMATO DA RESPOSTA - STATUS 200`
```json
{
    "message": "Removido com sucesso"
}
```

<h2 align ='center'> Remover o agendamento</h2>

Envie o id do agendamento como parametro da requisição:

`DELETE /localhost:8000/user/appointment/:id -  FORMATO DA RESPOSTA - STATUS 200`
```json
{
    "message": "Removido com sucesso"
}
```

<h2 align ='center'> Atualizar Bio do usuário</h2>

Envie o id do usuário como parâmetro da requisição, e no corpo da requisição a alteração a ser realizada:

`PUT /localhost:8000/user/bio/:id -  FORMATO DA REQUISIÇÃO` `
```json
{
    "bio":"testando bio"
}
```

Resposta de sucesso:

`PUT /localhost:8000/user/bio/:id  -  FORMATO DA RESPOSTA - STATUS 201`
```json
{
    "message": "Atualizado com sucesso"
}
```


<h2 align ='center'> Atualizar projetos do usuário</h2>

Envie o id do usuário como parâmetro da requisição e no corpo da requisição os projetos a serem atualizados:

`PUT /localhost:8000/user/project/:id -  FORMATO DA REQUISIÇÃO` `
```json
{
   "name":"modelo 1"
}
```

Resposta de sucesso:

`PUT /localhost:8000/user/project/:id  -  FORMATO DA RESPOSTA - STATUS 201`
```json
{
    "message": "Atualizado com sucesso"
}
```

<h2 align ='center'> Atualizar função do usuário</h2>

Envie o id do usuário como parâmetro da requisição e no corpo da requisição a nova função do usuário:

`PUT /localhost:8000/user/role/:id -  FORMATO DA REQUISIÇÃO` `
```json
{
    "role":"teste"
}
```

Resposta de sucesso:

`PUT /localhost:8000/user/role/:id  -  FORMATO DA RESPOSTA - STATUS 201`
```json
{
    "message": "Atualizado com sucesso"
}
```

<h2 align ='center'> Filtrar usuário retornando os disponíveis no dia</h2>

Envie após o search o parametro skill que deseja pesquisar:

`GET /localhost:8000/user/search?skill=(valor a ser buscado)  -  FORMATO DA RESPOSTA - STATUS 201`
```json
[
    {
        "_id": "624f24cdd07fa608ca7e8a71",
        "name": "Pedro Macedo",
        "img": {
            "_id": "6251c4a409f76b69a4ad3c37",
            "originalName": "modelo14.png",
            "path": "public/img/1649525923999-modelo14.png",
            "__v": 0
        },
        "skill": [
            {
                "_id": "624f2e515a8df8256170adb7",
                "name": "Front-end",
                "__v": 0
            },
            {
                "_id": "624f2e515a8df8256170adb8",
                "name": "Back-end",
                "__v": 0
            }
        ],
        "available": [
            {
                "week": [
                    {
                        "weekday": 5,
                        "timeHour": [
                            7,
                            8,
                            9
                        ],
                        "_id": "62599fa44296e9902c6d3cfd"
                    },
                    {
                        "weekday": 6,
                        "timeHour": [
                            10,
                            11
                        ],
                        "_id": "62599fa44296e9902c6d3cfe"
                    }
                ],
                "_id": "62599fa44296e9902c6d3cfc"
            }
        ]
    },
    {
        "_id": "624f256fd07fa608ca7e8a89",
        "name": "Pedro Silva",
        "img": {
            "_id": "6251d38f1f5f5f40d34c4407",
            "originalName": "modelo04.png",
            "path": "public/img/1649529743935-modelo04.png",
            "__v": 0
        },
        "skill": [
            {
                "_id": "624f2e515a8df8256170adb7",
                "name": "Front-end",
                "__v": 0
            }
        ],
        "available": [
            {
                "week": [
                    {
                        "weekday": 5,
                        "timeHour": [
                            7,
                            10,
                            11,
                            12
                        ],
                        "_id": "62599fa44296e9902c6d3d23"
                    },
                    {
                        "weekday": 6,
                        "timeHour": [
                            10
                        ],
                        "_id": "62599fa44296e9902c6d3d24"
                    },
                    {
                        "weekday": 0,
                        "timeHour": [
                            8,
                            9,
                            10
                        ],
                        "_id": "62599fa44296e9902c6d3d25"
                    }
                ],
                "_id": "62599fa44296e9902c6d3d22"
            }
        ]
    }
]
```

<h2 align ='center'> Adicionar favorito</h2>

Envie como primeiro parâmetro o id do usuário logado e como segundo parâmetro o id do usuário que será favoritado:

`POST localhost:8000/user/:id/favorite/:id -  FORMATO DA RESPOSTA - STATUS 201` `
```json
{
    "message": "favorito incluso com sucesso"
}
```



<h2 align ='center'> Remover favorito do usuário</h2>

Envie como primeiro parâmetro o id do usuário logado e como segundo parâmetro o id do usuário que deixara de ser favoritado.

`DELETE localhost:8000/user/:id/favorite/:id  -  FORMATO DA RESPOSTA - STATUS 201`
```json
{
    "message": "favorito removido com sucesso"
}
```
