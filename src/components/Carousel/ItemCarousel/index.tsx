import React from 'react'
import { CardItemCarousel, Image } from './style'
import api, { IProjects } from '../../../services/api/api'

type TICarousel = {
    bgColor?: string,
    widthHeight?: string
}

const ICarousel: React.FC<TICarousel> = ({ bgColor, widthHeight }) => {

    const projectsMap: any = api.JavaScript.map((projects: IProjects) => {
        return (
            <CardItemCarousel style={{ backgroundColor: `var(${bgColor ?? ''})`, width: `${widthHeight ?? '60rem'}`, height: `${widthHeight ?? '60rem'}` }} key={projects.id} className={api.JavaScript[0] === projects ? "carouselItem currentItem" : "carouselItem"}>
                <Image style={{
                    backgroundImage: `url(${projects.image.length > 1 ? projects.image : 'https //source.unsplash.com/random/300x300px?developer'})`
                }} />
                <div className="content">
                    <h2 className='tittleContent'>{projects.title}</h2>
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