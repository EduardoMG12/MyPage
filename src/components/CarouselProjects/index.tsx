import axios from 'axios'
import React, { useEffect, useState } from 'react'
import api from '../../services/api'
import { Container, Image, Tittle, LegendShort } from './style'

interface IProjects {
    "id": number,
    "tittle": string,
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


    return projects.map((projects) => {
        return (
            <Container key={projects.id}>
                <Image />
                <div>
                    <Tittle></Tittle>
                    <LegendShort></LegendShort>

                </div>


            </Container>

        )
    })

}
