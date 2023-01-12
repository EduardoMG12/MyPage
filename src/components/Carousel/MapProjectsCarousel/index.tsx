import React, { ReactNode } from 'react'
import { CarouselItem } from '../ItemCarousel'
import api from '../../../services/api/api'
import projects from '../../../services/api/api'
import { ContainerStyle } from './style'

interface IMapCarousel extends React.Component<typeof CarouselItem> {
}

const Root: React.FC<IMapCarousel> = () => {
    console.log(api)
    const carouselMap: any[] = Object.entries(projects).map(([tittle, projects]) => {
        return projects.map((projects) => {
            console.log(projects.iconTecnologics)
            return <>
                <CarouselItem.URL LinkHref={projects.codeAndDeploy.code}>
                    <CarouselItem.Root>
                        <CarouselItem.Image imgHref={projects.image} imgAlt={projects.image} />
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
                    </CarouselItem.Root>
                </CarouselItem.URL>

            </>;
        }
        )
    })
    return (
        <ContainerStyle>
            {carouselMap}
        </ContainerStyle>
    )
}

Root.displayName = "MapCarousel.Root"

export const MapCarousel = {
    Root
}