export default function Demo() {
    return (
        <>
            <a id="demo"><h2 className="Staat f2 dark-gray tc">Development</h2></a>
            <div className="w-80 center flex flex-wrap mb5">
                <div className="w-50-l w-100 segoe dark-gray mb2">
                    <p className="segoe">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    <p>
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
                    </p>
                </div>
                <div className="w-50-l w-100 flex justify-center items-center flex-wrap mb2">
                    <div className="ph5 pv1 ph0-m">
                        <img src="/images/demo-screenshot.jpg" className="shadow-2" />
                    </div>
                    <a href="http://66.76.242.195:3000/" target="_blank" rel="noopener noreferrer">
                        <button
                            className="br-pill no-underline white f4 ph3 pv2 grow outline-0 bn pointer avenir ttu emerald"
                        >
                            Demo Development Server
                    </button>
                    </a>
                </div>
            </div>
        </>
    )
}