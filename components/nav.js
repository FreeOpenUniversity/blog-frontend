import Link from "next/link";

export default function Nav({isBlog}) {
    return (
        <nav className="pa0 black flex items-center justify-between absolute top-0 white w-100">
            <Link href="/">
                <img className="w-20-l w5 pointer" src="/images/freeopenu_banner.png" alt="free open university banner" />
            </Link>
            <Link href="/blogs">
                <h1 className="Staat f3 ttu ph3 pointer" style={{color: isBlog ? "#333" : 'white'}}>Blogs</h1>
            </Link>
        </nav>
    )
}