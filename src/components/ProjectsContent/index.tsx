import React, { useEffect, useState } from 'react'
import { Items } from '../Header/styled';
import { Content, ItemHover } from './style';
import projects from '../../services/api/api';
import githubLogo from '/githubLogo.svg';
import vercelLogo from '/vercelLogo.svg';
import vercelLogoText from '/vercelLogoText.svg'
import { Card } from '../Card'

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
                    <Card.Root key={projects.id} className="project">
                        <Card.Image className="imageCard" imgAlt={`${projects.image}`} imgHref={`${projects.image ? projects.image : 'https://images.unsplash.com/photo-1572177812156-58036aae439c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'}`} />

                        <div className='contentProject'>
                            <Card.Title className='titleProject'>{projects.title}</Card.Title>
                            <Card.Description className='sinopseLong' >{projects.descriptionLong}</Card.Description>
                            <Card.Description className='titleLanguages' >Principais Ferramentas</Card.Description>

                            <Card.List className='toolsProject'>
                                {Object.values(projects.iconTecnologics).map((tecnologic, i) => <li key={i} ><i style={{ color: tecnologic.color }} className={tecnologic.className}></i></li>)}
                            </Card.List>
                        </div>
                        <Card.ConditionalComponent className='conditionalComponent'>

                            {projects.codeAndDeploy.deploy.length == 0 ?
                                <ItemHover className='itemHover' style={itemHoverStyleMapFirstCondition}>
                                    <a href={projects.codeAndDeploy.code} target="_blank">
                                        <img className="githubLogo" src={githubLogo} />
                                    </a>
                                </ItemHover>
                                :
                                <>
                                    <ItemHover className='itemHover' style={itemHoverStyleMapLastCondition}>
                                        <a href={projects.codeAndDeploy.code} target="_blank" style={{}}>
                                            <img className="githubLogo" src={githubLogo} />
                                        </a>
                                    </ItemHover>
                                    <ItemHover style={{ height: "50%", borderRadius: "0 0 6rem 0", }}>
                                        <a href={projects.codeAndDeploy.deploy} target="_blank" style={{ display: "flex", }}>
                                            <img className="vercelLogo1" src={vercelLogoText} alt="" />
                                            <img className="vercelLogo2" src={vercelLogo} alt="" />
                                        </a>
                                    </ItemHover>
                                </>
                            }
                        </Card.ConditionalComponent>
                    </Card.Root>
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
