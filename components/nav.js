import Link from "next/link";

const anchors = [
    { link: '#home', title: 'Home' },
    { link: '#demo', title: 'demo' },
    { link: '#projects', title: 'projects' },
    { link: '#blogs', title: 'blog' }
];

function toggleDisplay() {
    let navs = document.querySelectorAll(".nav-items")
    for (let nav of navs) {
        if (nav.style.display == 'block') {
            nav.style.display = 'none'
        } else {
            nav.style.display = 'block'
        }
    }
}


export default function Nav() {
    return (
        <nav className="pa0 black flex items-start justify-between absolute top-0 white w-100">
            <Link href="#home">
                <img className="w-20-l w5 pointer" src="/images/freeopenu_banner.png" alt="free open university banner" />
            </Link>
            <div className="flex mt3">
                {anchors.map((anchor, index) =>
                    <a href={anchor.link} key={index}>
                        <div className="f4 ttu pointer white w4 mh2 tc db-l dn pa0">{anchor.title}</div>
                    </a>)
                }
            </div>
            <div className="flex flex-column dn-l db f4 white">
                <div className="ttu pointer  w4 tc dn-l db ba pv0 f2 b " onClick={toggleDisplay}>≡</div>
                {anchors.map((anchor, index) =>
                    <a href={anchor.link} key={index}>
                        <div className="ttu pointer w4 ph2 tc dn pa0 pv2 nav-items ba">{anchor.title}</div>
                    </a>)
                }
            </div>
        </nav>
    )
}