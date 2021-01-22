export default function ProjectCard({ project }) {
    return (
        <div className="w-40-l w-80 segoe center white bg-dark-gray br2 pa3 mb3" >
            <h3 className="f3">
                {project.name}
            </h3>
            <p>
                {project.intro}
            </p>
        </div>
    )
}