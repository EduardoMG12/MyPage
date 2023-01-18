import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import projetos, { IProjects } from '../../services/api/api';
import { Container, ImageBgd, TextContent } from './style';

function Project() {
    const { id } = useParams();
    const [project, setProject] = useState<IProjects>(null!);

    useEffect(() => {
        const currentProject = Object.values(projetos).flatMap(project => project).filter(project => project.id === id)
        if (currentProject) setProject(currentProject[0]);
    }, [id]);

    console.log(project)
    if (!project) {
        return <div>Loading...</div>;
    }
    return (
        <Container>

            <ImageBgd style={{ backgroundImage: `url(${project.image})` }} />
            <ul>
                {project.iconTecnologics.map((item, index) => {
                    return (
                        <li key={index}>
                            <i className={item.className} color={item.color}></i>
                        </li>
                    );
                })}
            </ul>

            <TextContent>
                <h2>{project.title}</h2>

                <div>
                    <p>{project.descriptionLong}</p>
                </div>

            </TextContent>

        </Container>
    )
}

export default Project;
