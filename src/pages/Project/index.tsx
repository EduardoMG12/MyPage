import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import projetos from '../../services/api/api';

function Project() {
    const { id } = useParams();
    const [project, setProject] = useState(null);

    useEffect(() => {
        console.log(projetos)
        const currentProject = projetos.prototype.find(project => project.id === id);
        setProject(currentProject)
    }, [id]);

    if (!project) {
        return <div>Loading...</div>;
    }
    return (
        <>
        </>
    )
}

export default Project;