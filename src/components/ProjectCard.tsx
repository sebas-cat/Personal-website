import type {Project } from '../data/projects'

interface ProjectCardProps {
    project: Project
}

const ProjectCard = ({project}: ProjectCardProps) => {
    return (
        <article>
            <h3>{project.title}</h3>
        </article>


    )
}
export default ProjectCard