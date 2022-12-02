import axios from 'axios'
import React, { useEffect, useState } from 'react'
import api from '../../services/api'

interface IProjects {
    "id": 1,
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
    const [projects, setProjects] = useState()

    useEffect(() => {
        api.get("/projects").then((response) => {
            setProjects(response.data)
        }).catch((error) => console.log(error))


    }, [])


    return (
        <>
        </>
    )
}
