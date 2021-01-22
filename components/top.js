export default function Top() {
    return (
        <div className="bg-dark-gray vh-100 tc flex flex-column items-center justify-center white">
            <h1 className="f1 ma0 white title1" >Free Open University Project</h1>
            <p className="w-40-l w-80 f4 fw1 center segoe">
                The Free Open University Project is a team of volunteer programmers committed to making university
                education free and open to all without restriction.
            </p>
            {/* <p className="w-40-l w-80 f5 fw1 center segoe">
          We have come together through volunteer matching sites to build an automated professor along with
          automation software to generate textbooks and provide support for learners of every topic available.
            </p> */}
            <p className="h3 flex items-center justify-center mv2">
                <a href="http://66.76.242.195:3000/" target="_blank" rel="noopener noreferrer">
                    <button
                        className="br-pill no-underline white f4 ph3 pv2 grow outline-0 bn pointer avenir ttu emerald"
                    >
                        Demo Development Server
                    </button>
                </a>
            </p>
        </div>
    )
}