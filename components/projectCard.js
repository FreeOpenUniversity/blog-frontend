export default function ProjectCard({ project }) {
    return (
        <div className="w-40-l w-80 segoe center dark-gray bg-white br3 pa2 mb3" >
            <h3 className="f4">
                {project.name}
            </h3>
            <p>
                {project.intro}
            </p>
        </div>
    )
}