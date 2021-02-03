import ProjectCard from './projectCard';

const projects = [
    {
        name: "Artificial Intelligence Professor Bot",
        intro: "We are developing a chatbot that guides discussion and keeps learners discussing the subject material contained in the textbook it is supporting."
    },
    {
        name: "Manual Classifier for Data Training Sets",
        intro: "This is an upload and storage platform to be used by humans doing manual classification of training sets to be used for computer machine learning."
    },
    {
        name: "Document Classify Subject Matter Detection System",
        intro: "This will be a classification system that will determine what subject is the object of whatever content is being classified."
    }
]

export default function Project() {
    return (
        <div className="tc bg-dark-gray white pv3">
            <a id="projects"><h2 className="Staat f2">Projects</h2></a>
            <p className="w-40-l w-80 fw4 center segoe">
                We have come together through volunteer matching sites to build an automated professor along with
                automation software to generate textbooks and provide support for learners of every topic available. These below are our current projects:
            </p>
            {projects.map((project, index) =>
                <ProjectCard project={project} key={index} />)}
        </div>
    )
}