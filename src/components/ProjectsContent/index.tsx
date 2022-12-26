import React, { useEffect, useState } from 'react'
import { Items } from '../Header/styled';
import { CodeAndDeploy, Content, ContentProject, Image, ItemHover, ItemHover2, Project } from './style';
import projects from '../../services/api/api'

interface IProjects {
    "id": number,
    "tittle": string,
    "image": string,
    "sinopseShort": string,
    "sinopseLong": string,
    "iconTecnologics": Record<string, string>,
    "codeAndDeploy": Record<string, []>
};

export default function ProjectsContent() {

    const projectsDB: any[] = projects.map((projects) => {
        return (
            <Project key={projects.id} className='project'>
                <Image style={{ backgroundImage: `url(${projects.image ? projects.image : 'https://images.unsplash.com/photo-1572177812156-58036aae439c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'})` }} />
                <ContentProject>
                    <h2 className='tittleContent'>{projects.tittle}</h2>
                    <p id='sinopseLong'>{projects.sinopseLong}</p>
                    <p className='legendShort'>Principais Ferramentas</p>
                    <ul className='toolsProjects'>
                        {Object.values(projects.iconTecnologics).map((tecnologic, i) => <li key={i} style={{ backgroundImage: `url(${tecnologic})`, width: "5rem", height: "5rem" }}></li>)}
                    </ul>
                </ContentProject>
                <CodeAndDeploy className='divHover'>

                    {projects.codeAndDeploy.deploy.length == 0 ?
                        <ItemHover style={{ backgroundColor: "red", height: "100%", borderRadius: "0 6rem 6rem 0" }}>
                            <a href=""></a>
                        </ItemHover> :

                        <>
                            <ItemHover style={{ height: "50%", backgroundColor: "red", borderRadius: "0 6rem 0 0" }}>
                                <a href=""></a>
                            </ItemHover>
                            <ItemHover style={{ height: "50%", borderRadius: "0 0 6rem 0", }}>
                                <a href=""></a>
                            </ItemHover>
                        </>
                    }
                </CodeAndDeploy>
            </Project>
        )
    })

    return (
        <Content>
            {projectsDB}
        </Content>

    )
}
