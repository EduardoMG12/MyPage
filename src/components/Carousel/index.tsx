import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import projects from '../../services/api/api'
import Carousel from 'react-elastic-carousel'
import { Container, Content, Image } from './style'

interface IProjects {
    "id": number,
    "tittle": string,
    "image": string,
    "sinopseShort": string,
    "sinopseLong": string,
    "iconTecnologics": Record<string, string>,

};

export default () => {

    const breakPoints = [
        { width: 2, itemToShow: 1 },
        { width: 550, itemToShow: 2, itemToScroll: 2 },
        { width: 768, itemToShow: 3 },
        { width: 1200, itemToShow: 4 },
    ]

    const itemShow = () => {
        const largura = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        if (largura > 2000) {
            return 3;
        };
        if (largura > 1350) {
            return 2;
        };
        if (largura) {
            return 1;
        };
    };

    const projectsFavorites = projects.slice(0, 5)

    const projectsMap: any[] = projectsFavorites.map((projects) => {
        return (
            <Container key={projects.id}>
                <Image style={{ backgroundImage: `url(${projects.image ? projects.image : 'https://images.unsplash.com/photo-1572177812156-58036aae439c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'})` }} />
                <Content>
                    <h2 className='tittleContent'>{projects.tittle}</h2>
                    <p className='legendShort'>Principais Ferramentas</p>
                    <ul className='toolsProjects'>
                        {Object.values(projects.iconTecnologics).map((tecnologic, i) => <li key={i} style={{ backgroundImage: `url(${tecnologic})` }}></li>)}
                    </ul>
                </Content>
            </Container>
        )
    })
    return (
        //@ts-ignore
        <Carousel isRTL showArrows={false} initialActiveIndex={1} disableArrowsOnEnd={false} breakPoints={breakPoints} itemsToShow={itemShow()}>
            {projectsMap}
        </Carousel>
    )
};