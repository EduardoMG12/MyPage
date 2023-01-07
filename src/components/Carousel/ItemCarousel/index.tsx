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
                <Image style={{
                    backgroundImage: `url(${projects.image ? projects.image : 'https://images.unsplash.com/photo-1572177812156-58036aae439c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'})`
                }} />
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