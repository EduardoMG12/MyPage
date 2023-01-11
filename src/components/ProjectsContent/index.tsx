import React, { useEffect, useState } from 'react'
import { Items } from '../Header/styled';
import { CodeAndDeploy, Content, ContentProject, Image, ItemHover, ItemHover2, Project } from './style';
import projects from '../../services/api/api';
import githubLogo from '/githubLogo.svg';
import vercelLogo from '/vercelLogo.svg';
import vercelLogoText from '/vercelLogoText.svg'

export default function ProjectsContent() {
    const itemHoverStyleMapFirstCondition = {
        backgroundColor: "#0D0D0D",
        height: "100%",
        borderRadius: "0 6rem 6rem 0"
    }
    const itemHoverStyleMapLastCondition = {
        backgroundColor: "#0D0D0D",
        height: "50%",
        borderRadius: "0 6rem 0 0"

    }
    const projectsDB: any[] = Object.entries(projects).map(([tittle, projects]) => {
        return <>
            <h1>{tittle}</h1>
            {projects.map((projects) => {
                return (
                    <Project key={projects.id} className='project'>
                        <Image style={{ backgroundImage: `url(${projects.image ? projects.image : 'https://images.unsplash.com/photo-1572177812156-58036aae439c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'})` }} />
                        <ContentProject>
                            <h2 className='tittleContent'>{projects.tittle}</h2>
                            <p id='sinopseLong'>{projects.sinopseLong}</p>
                            <p id='legendShort'>Principais Ferramentas</p>

                            <ul className='toolsProjects'>
                                {Object.values(projects.iconTecnologics).map((tecnologic, i) => <li key={i} ><i style={{ fontSize: "5rem", color: tecnologic.color }} className={tecnologic.class}></i></li>)}
                            </ul>
                        </ContentProject>
                        <CodeAndDeploy className='divHover'>

                            {projects.codeAndDeploy.deploy.length == 0 ?
                                <ItemHover className='itemHover' style={itemHoverStyleMapFirstCondition}>
                                    <a href={projects.codeAndDeploy.code} target="_blank"><img className="githubLogo" style={{ width: "5rem" }} src={githubLogo} /></a>
                                </ItemHover> :

                                <>
                                    <ItemHover className='itemHover' style={itemHoverStyleMapLastCondition}>
                                        <a href={projects.codeAndDeploy.code} target="_blank" style={{}}>
                                            <img className="githubLogo" style={{ width: "5rem" }} src={githubLogo} />
                                        </a>
                                    </ItemHover>
                                    <ItemHover style={{ height: "50%", borderRadius: "0 0 6rem 0", }}>
                                        <a href={projects.codeAndDeploy.deploy} target="_blank" style={{ display: "flex", flexDirection: "column" }}>
                                            <img className="vercelLogo1" src={vercelLogoText} alt="" />
                                            <img className="vercelLogo2" src={vercelLogo} alt="" />
                                        </a>
                                    </ItemHover>
                                </>
                            }
                        </CodeAndDeploy>
                    </Project>
                )
            })}
        </>

    })

    return (
        <Content>
            {projectsDB}
        </Content>

    )
}
