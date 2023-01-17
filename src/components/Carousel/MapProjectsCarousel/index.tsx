import React, { useEffect, useState } from 'react'
import { Card } from '../../Card'
import projects from '../../../services/api/api'
import { ContainerStyle } from './style'
import { ContainerCarousel } from '../ContainerCarousel'

const Root: React.FC = () => {
    const carouselMap: any[] = Object.entries(projects).map(([tittle, projects]) => {
        return projects.map((projects) => {
            return <>
                <Card.Link LinkHref={projects.codeAndDeploy.code} key={projects.id}>
                    <Card.Root>
                        <Card.Image imgHref={projects.image} imgAlt={projects.image} />
                        <div>
                            <Card.Title children={projects.title} />
                            <Card.Description children={projects.descriptionShort} />
                            <Card.List >
                                <>
                                    {projects.iconTecnologics.map((item, index) => {
                                        return (
                                            <Card.ItemList key={index}>
                                                <i className={item.className} color={item.color}></i>
                                            </Card.ItemList>
                                        );
                                    })}
                                </>
                            </Card.List>
                        </div>
                    </Card.Root>
                </Card.Link>

            </>;
        }
        )
    })

    const [currentItem, setCurrentItem] = useState<number>(0)

    const maxItems = 5;
    useEffect(() => {
        console.log(currentItem)
    }, [])


    return (
        <ContainerCarousel.Root>
            <ContainerCarousel.ArrowLeft onClick={() => setCurrentItem(currentItem > 0 ? currentItem - 1 : maxItems)} className="fa-solid fa-chevron-left" color='var(--pages-color)' />
            <ContainerCarousel.Wrapper>
                <ContainerCarousel.ContainerItems>
                    <ContainerStyle>
                        {carouselMap}
                    </ContainerStyle>
                </ContainerCarousel.ContainerItems>
            </ContainerCarousel.Wrapper>
            <ContainerCarousel.ArrowRight onClick={() => setCurrentItem(currentItem)} className="fa-solid fa-chevron-right" color='var(--pages-color)' />
        </ContainerCarousel.Root>
    )
}

Root.displayName = "MapCarousel.Root"

export const MapCarousel = {
    Root
}