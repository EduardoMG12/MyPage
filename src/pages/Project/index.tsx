import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import projetos, { IProjects } from '../../services/api/api';
import { Container, ExternalLink, ImageBgd, TextContent } from './style';
import githubLogo from '/githubLogo.svg';
import vercelLogo from '/vercelLogo.svg';
import vercelLogoText from '/vercelLogoText.svg'

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
            <TextContent>
                <h2>{project.title}</h2>
                <div>{project.descriptionInteger?.length == 0 ?
                    <p>{project.descriptionInteger}</p>
                    :
                    <p>{project.descriptionLong}</p>
                }
                    {project.codeAndDeploy.deploy.length == 0 ?
                        <ExternalLink>
                            <a href={project.codeAndDeploy.code} target="_blank">
                                <img className="githubLogo" src={githubLogo} />
                            </a>
                        </ExternalLink>
                        :
                        <div>
                            <ExternalLink>
                                <a href={project.codeAndDeploy.code} target="_blank">
                                    <img className="githubLogo" src={githubLogo} />
                                </a>
                            </ExternalLink>
                            <ExternalLink>
                                <a href={project.codeAndDeploy.deploy} target="_blank">
                                    <img className="vercelLogo1" src={vercelLogoText} alt="" />
                                </a>
                            </ExternalLink>
                        </div>}
                </div>
            </TextContent>
            <ul>
                {project.iconTecnologics.map((item, index) => {
                    return (
                        <li key={index}>
                            <i className={item.className} color={item.color}></i>
                        </li>
                    );
                })}
            </ul>


        </Container >
    )
}

export default Project;
