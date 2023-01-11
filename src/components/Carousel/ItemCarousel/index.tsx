import React from 'react'
import { CardItemCarousel, Image } from './style'
import api, { IProjects, ProjectsType } from '../../../services/api/api'

export type IItemCarousel = {
    bgColor?: string,
    widthHeight?: string,
    bgImage?: string,
}

const ICarousel: React.FC<IItemCarousel> = ({ bgColor, widthHeight }) => {

    const projectsMap: any = api.JavaScript.map((projects: IProjects) => {
        return (
            <CardItemCarousel bgColor={bgColor} widthHeight={widthHeight}
                key={projects.id}
                className={api.JavaScript[0] === projects ? "carouselItem currentItem" : "carouselItem"}
            >
                <Image bgImage={projects.image} />
                <div className="content">
                    <h2 className='tittleContent'>{projects.tittle}</h2>
                    <p className='tittleTools'>Principais Ferramentas</p>
                    <ul className='toolsProjects'>

                    </ul>
                </div>
            </CardItemCarousel>
        )
    })
    return (
        <>
            {projectsMap}
        </>
    )
}

export default ICarousel;