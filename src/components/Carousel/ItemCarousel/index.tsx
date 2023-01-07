import React from 'react'
import { CardItemCarousel, Image } from './style'
import api, { IProjects, ProjectsType } from '../../../services/api/api'

type TICarousel = {
    bgColor?: string,
}

const ICarousel: React.FC<TICarousel> = ({ bgColor }) => {

    const projectsMap: any = api.Projetos.map((projects: IProjects) => {
        console.log(projects, "slaaa")
        return (
            <CardItemCarousel style={{ backgroundColor: `${bgColor ?? ''}` }} key={projects.id}>
                <Image />
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