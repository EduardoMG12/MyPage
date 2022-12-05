import axios from 'axios'
import React, { useEffect, useState } from 'react'
import api from '../../services/api'
import { Container, Image, Tittle, LegendShort } from './style'

interface IProjects {
    "id": number,
    "tittle": string,
    "image": string,
    "sinopseShort": string,
    "sinopseLong": string,
    "tecnologics"?: ITecnologics,

};
interface ITecnologics {
    "tecnologics1": string,
    "tecnologics2": string,
    "tecnologics3": string,
    "tecnologics4": string,
    "tecnologics5": string,
    "tecnologics6": string,
    "tecnologics7": string

}



export default function CarouselProjects() {
    const [projects, setProjects] = useState<IProjects[]>([])

    useEffect(() => {
        api.get("/projects").then((response) => {
            setProjects(response.data)
        }).catch((error) => console.log(error))
    }, [])


    const projectMap = projects.map((projects) => {
        return (
            <Container key={projects.id}>
                <Image style={{ backgroundImage: `url(${projects.image ? projects.image : 'https://images.unsplash.com/photo-1572177812156-58036aae439c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'})` }} />
                <div>
                    <Tittle>{projects.tittle}</Tittle>
                    <LegendShort>{projects.sinopseShort}</LegendShort>


                </div>


            </Container>
        )
    })
    return projectMap
}
