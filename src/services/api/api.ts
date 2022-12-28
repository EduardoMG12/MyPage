interface IProjects {
    "id": number,
    "tittle": string,
    "image": string,
    "sinopseShort": string,
    "sinopseLong": string,
    "iconTecnologics": Record<string, { class: string, color: string }>,
    "codeAndDeploy": Record<string, string>
};

const projects: IProjects[] =
    [
        {
            "id": 1,
            "tittle": "Projeto Orange Juice",
            "image": "",
            "sinopseShort": "Um hackthon desenvolvido para uma entrevista de emprego...",
            "sinopseLong": "Hackthon para empresa FCâmara após duas etapas para filtrar competidores(uma prova e uma entrevista) veio o projeto que teve como objetivo que nós fizessemos um site para OrangeJuice(empresa da Fcamara) seguindo certas regras assim testando nosso conhecimento e tendo o mesmo como portifolio, aonde eu, dois Desenvolvedores e uma UX Design, passamos quinze dias desenvolvendo, sou muito grato por esse projeto, mesmo o mesmo não sendo concluido por nos mesmo, ganhei muito conhecimento e aprendizado nesses dias desde trabalho em grupo, sistema de branchs, react, insomnina...",
            "iconTecnologics": {
                "JavaScript": {
                    "class": "fa-brands fa-js",
                    "color": "#EAD41C"
                },
                "HTML": {
                    "class": "fa-brands fa-html5",
                    "color": "orange"
                },
                "CSS": {
                    "class": "fa-brands fa-css3-alt",
                    "color": "#2C9FD8"
                },
            },
            "codeAndDeploy": {
                "code": "https://github.com/orgs/orange-squad28/repositories",
                "deploy": ""
            }
        },
        {
            "id": 2,
            "tittle": "Calculadora",
            "image": "projectsImages/calculator.png",
            "sinopseShort": "Calculadora feita em js com factory function",
            "sinopseLong": "Um projeto que fiz em contructor function quando estava pegando a base do js fiz o mesmo com constructor function e depois refatorei o memo para factory function No gênero dissertativo-argumentativo, o projeto ajuda a organizar as ideias, garantir a progressão textual e colaborar na construção de uma argumentação consistente em defesa de um ponto de vista, explica Fabiana Gomes de Camargo, professora de Redação e coordenadora da Área de Linguagens do Colégio Oficina do Estudante de Campinas (SP) Segundo a cartilha de correção de redação do Enem, o projeto de texto é um esquema geral da estrutura de um texto, no qual se estabelecem os principais pontos pelos quais deve passar a argumentação a ser desenvolvida, isto é, um planejamento prévio que se deixa perceber pela organização dos argumentos presentes no texto final.",
            "iconTecnologics": {
                "JavaScript": {
                    "class": "fa-brands fa-js",
                    "color": "#EAD41C"
                },
                "HTML": {
                    "class": "fa-brands fa-html5",
                    "color": "#E56027"
                },
                "CSS": {
                    "class": "fa-brands fa-css3-alt",
                    "color": "#2C9FD8"
                },
            },
            "codeAndDeploy": {
                "code": "https://github.com/EduardoMG12/calculator-constructor-function",
                "deploy": "https://calculator-constructor-function-charles-eduardo-97rkm37x4.vercel.app"
            }
        },
        {
            "id": 3,
            "tittle": "To-do List",
            "image": "projectsImages/toDoList.png",
            "sinopseShort": "Calculadora feita em js com factory function",
            "sinopseLong": "",
            "iconTecnologics": {
                "JavaScript": {
                    "class": "fa-brands fa-js",
                    "color": "#EAD41C"
                },
                "HTML": {
                    "class": "fa-brands fa-html5",
                    "color": "#E56027"
                },
                "CSS": {
                    "class": "fa-brands fa-css3-alt",
                    "color": "#2C9FD8"
                },
            },
            "codeAndDeploy": {
                "code": "https://github.com/EduardoMG12/to-do-list",
                "deploy": "https://to-do-list-q2mht4ni7-eduardomg12.vercel.app"
            }
        },
        {
            "id": 4,
            "tittle": "Timer",
            "image": "projectsImages/Timer.png",
            "sinopseShort": "Calculadora feita em js com factory function",
            "sinopseLong": "",
            "iconTecnologics": {
                "JavaScript": {
                    "class": "fa-brands fa-js",
                    "color": "#EAD41C"
                },
                "HTML": {
                    "class": "fa-brands fa-html5",
                    "color": "#E56027"
                },
                "CSS": {
                    "class": "fa-brands fa-css3-alt",
                    "color": "#2C9FD8"
                },

            },
            "codeAndDeploy": {
                "code": "",
                "deploy": ""
            }
        },
        {
            "id": 5,
            "tittle": "Timer",
            "image": "",
            "sinopseShort": "Calculadora feita em js com factory function",
            "sinopseLong": "",
            "iconTecnologics": {
                "JavaScript": {
                    "class": "fa-brands fa-js",
                    "color": "#EAD41C"
                },
                "HTML": {
                    "class": "fa-brands fa-html5",
                    "color": "#E56027"
                },
                "CSS": {
                    "class": "fa-brands fa-css3-alt",
                    "color": "#2C9FD8"
                },
            },
            "codeAndDeploy": {
                "code": "",
                "deploy": ""
            }
        }
    ]

export default projects;