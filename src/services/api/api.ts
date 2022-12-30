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
            "image": "projectsImages/orangeJuice.png",
            "sinopseShort": "Um hackthon desenvolvido para uma entrevista de emprego...",
            "sinopseLong": "Hackthon para empresa FCâmara após duas etapas para filtrar competidores(uma prova e uma entrevista) veio o projeto que teve como objetivo que nós fizessemos um site para OrangeJuice(empresa da Fcamara) seguindo certas regras assim testando nosso conhecimento e tendo o mesmo como portifolio, aonde eu, dois Desenvolvedores e uma UX Design, passamos quinze dias desenvolvendo um site que tinha como objetivo ter login de úsuarios e admins, 3 trilhas principais, entrando nas mesmas teriam vários cursos. O objetivo principal era entregar um crud, 3 páginas prontas responsivas. Sou muito grato por esse projeto, mesmo o mesmo não sendo concluido por falta de tempo e organização pois a maioria nunca tinha feito um projeto em equipe, senti ter ganho muito conhecimento e aprendizado nesses dias pois foi muito puxado nunca tinha me dedicado tanto a um projeto em tão pouco tempo, acho que ocorreu um grande desenvolvimento desde trabalho em grupo, sistema de branchs, react, insomnina...",
            "iconTecnologics": {
                "JavaScript": {
                    "class": "fa-brands fa-js",
                    "color": "#EAD41C"
                },
                "TypeScript": {
                    "class": "devicon-typescript-plain",
                    "color": "#2C9FD8"
                },
                "Next": {
                    "class": "devicon-nextjs-original",
                    "color": "black"
                },
                "React": {
                    "class": "fa-brands fa-react",
                    "color": "#2C9FD8"
                },
                "NODE": {
                    "class": "fa-brands fa-node-js",
                    "color": "orange"
                },
                "Mongo": {
                    "class": "devicon-mongodb-plain",
                    "color": "green"
                }
            },
            "codeAndDeploy": {
                "code": "https://github.com/orgs/orange-squad28/repositories",
                "deploy": ""
            }
        },
        {
            "id": 3,
            "tittle": "Landing Page",
            "image": "projectsImages/landingPage.png",
            "sinopseShort": "landing page com uma breve historia sobre eu e aprensetaçao",
            "sinopseLong": "Um projeto que fiz com o objetivo de treinar/testar meus conhecimentos de html css e js, um projeto simples porem funcional, que tem como premissa ser uma página contando um pouco da minha hístoria e me apresentando, mostrando minhas midias profissionais.",
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
                "code": "https://github.com/EduardoMG12/landing-page-basic-all-black",
                "deploy": "https://landing-page-basic-all-black-3beceh95r-eduardomg12.vercel.app"
            }
        },
        {
            "id": 4,
            "tittle": "Calculadora",
            "image": "projectsImages/calculator.png",
            "sinopseShort": "Calculadora feita em js com factory function",
            "sinopseLong": "Um exercicio de um curso que fiz, que é um projeto feito em facroty function, fiz quando estava pegando a base do js o mesmo foi feito primeiramente em constructor function e depois refatorado para factory function, fiz uns updates da calculadora que não estava no projeto final, que foi a responsividade, o led em cima da calculadora o som que a calculadora faz e o aviso de erro.",
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
            "id": 5,
            "tittle": "To-do List",
            "image": "projectsImages/toDoList.png",
            "sinopseShort": "Uma lista de a fazeres que guarda dados em LocalStorage",
            "sinopseLong": "O projeto ajuda a organizar as ideias o objetivo é ser uma lista de a fazeres aonde você mesmo consegue colocar e deletar itens, a mesma tem a função de deletar os a fazeres apertando no botão e de adicionar apertando no botão ou apertando enter. A página é completamente responsivel.",
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
            "id": 6,
            "tittle": "Timer",
            "image": "projectsImages/timer.png",
            "sinopseShort": "Cronômetro funcional",
            "sinopseLong": "Um projeto simples porem funcional de um timer com três botões, reset para zerar o timer, pause para parar e init para começar a contar ou continuar, o projeto sendo funcional e responsivo.",
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

    ]

export default projects;