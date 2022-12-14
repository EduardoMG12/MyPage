import React, { useEffect, useState } from 'react'
import api from '../../services/api';
import { Content, ContentProject, Image, Project } from './style';

interface IProjects {
    "id": number,
    "tittle": string,
    "image": string,
    "sinopseShort": string,
    "sinopseLong": string,
    "iconTecnologics": Record<string, string>,

};

export default function ProjectsContent() {

    const [projects, setProjects] = useState<IProjects[]>([])

    useEffect(() => {
        api.get("/projects").then((response) => {
            setProjects(response.data)
        }).catch((error) => { console.log(error) });

    }, [])

    const projectsMap: any[] = projects.map((projects) => {
        return (
            <Project key={projects.id}>
                <Image style={{ backgroundImage: `url(${projects.image ? projects.image : 'https://images.unsplash.com/photo-1572177812156-58036aae439c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'})` }} />
                <ContentProject>
                    <h2 className='tittleContent'>{projects.tittle}</h2>
                    <p className='legendShort'>Principais Ferramentas</p>
                    <ul className='toolsProjects'>
                        {Object.values(projects.iconTecnologics).map((tecnologic, i) => <li key={i} style={{ backgroundImage: `url(${tecnologic})` }}></li>)}
                    </ul>
                </ContentProject>
            </Project>
        )
    })

    return (
        <Content>
            {projectsMap}
        </Content>

    )
}