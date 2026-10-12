import type {Project } from '../data/projects'
import {View} from '../hooks/view'

interface ProjectCardProps {
    project: Project
    index: number
}

const ProjectCard = ({project, index}: ProjectCardProps) => {
    const {ref, inView} = View<HTMLDivElement>()
    return (
        <div ref={ref} data-reveal data-inview={inView}>
            <article>
            <p className='hud'>
                PROJECT_{String(index + 1).padStart(2, '0')} / Status /{''}
                {project.status === 'in-progress' ? 'IN PROGRESS' : 'COMPLETED'}
            </p>
            <h3>{project.title}</h3>
            </article>
        </div>


    )
}

export default ProjectCard