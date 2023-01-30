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
                    <p>{project.descriptionInteger}</p>
                </div>

            </TextContent>

            {project.codeAndDeploy.deploy.length == 0 ?
                <ExternalLink>
                    <a href={project.codeAndDeploy.code} target="_blank">
                        <img className="githubLogo" src={githubLogo} width="10rem" />
                    </a>
                </ExternalLink>
                :
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-around", maxWidth: "100vw", width: "40%", flexWrap: "wrap" }}>
                    <ExternalLink>
                        <a href={project.codeAndDeploy.code} target="_blank" style={{}}>
                            <img className="githubLogo" src={githubLogo} width="100rem" />
                        </a>
                    </ExternalLink>
                    <ExternalLink style={{ height: "50%", borderRadius: "0 0 6rem 0", }}>
                        <a href={project.codeAndDeploy.deploy} target="_blank" style={{ display: "flex", }}>
                            <img className="vercelLogo1" src={vercelLogoText} alt="" width="150rem" />

                        </a>
                    </ExternalLink>
                </div>}

        </Container>
    )
}

export default Project;
