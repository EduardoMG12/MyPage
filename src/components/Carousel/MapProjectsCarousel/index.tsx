import React, { ReactNode } from 'react'
import { CarouselItem } from '../ItemCarousel'
import api from '../../../services/api/api'
import projects from '../../../services/api/api'
import { ContainerStyle } from './style'
import { ContainerCarousel } from '../ContainerCarousel'

const Root: React.FC = () => {
    console.log(api)
    const carouselMap: any[] = Object.entries(projects).map(([tittle, projects]) => {
        return projects.map((projects) => {
            console.log(projects.iconTecnologics)
            return <>
                <CarouselItem.Link LinkHref={projects.codeAndDeploy.code}>
                    <CarouselItem.Root>
                        <CarouselItem.Image imgHref={projects.image} imgAlt={projects.image} />
                        <div>
                            <CarouselItem.Title children={projects.title} />
                            <CarouselItem.Description children={projects.descriptionShort} />
                            <CarouselItem.List >
                                <>
                                    {projects.iconTecnologics.map((item, index) => {
                                        return (
                                            <CarouselItem.ItemList key={index}>
                                                <i className={item.className} color={item.color}></i>
                                            </CarouselItem.ItemList>
                                        );
                                    })}
                                </>
                            </CarouselItem.List>
                        </div>
                    </CarouselItem.Root>
                </CarouselItem.Link>

            </>;
        }
        )
    })
    return (
        <ContainerCarousel.Root>
            <ContainerCarousel.ArrowLeft className="fa-solid fa-chevron-left" color='var(--pages-color)' />
            <ContainerCarousel.Wrapper>
                <ContainerCarousel.ContainerItems>
                    <ContainerStyle>
                        {carouselMap}
                    </ContainerStyle>
                </ContainerCarousel.ContainerItems>
            </ContainerCarousel.Wrapper>
            <ContainerCarousel.ArrowRight className="fa-solid fa-chevron-right" color='var(--pages-color)' />
        </ContainerCarousel.Root>
    )
}

Root.displayName = "MapCarousel.Root"

export const MapCarousel = {
    Root
}