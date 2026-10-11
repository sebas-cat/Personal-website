import type {Project } from '../data/projects'
import {View} from '../hooks/view'

interface ProjectCardProps {
    project: Project
}

const ProjectCard = ({project}: ProjectCardProps) => {
    const {ref, inView} = View<HTMLDivElement>()
    return (
        <div ref={ref} data-reveal data-inview={inView}>
            <article>
            <h3>{project.title}</h3>
            </article>
        </div>


    )
}

export default ProjectCard