import Link from "next/link";

export default function BlogLayout({ children }) {
    return (
        <>
            <nav className="h3 mv2 flex justify-between dark-gray w-100 tr items-center">
                <Link href="/blogs">
                    <h1 className="Staat f3 ttu ph3 pointer">Blogs</h1>
                </Link>
                <Link href="/">
                    <h1 className="Staat f3 ttu ph3 pointer">Home</h1>
                </Link>
            </nav>
            <div className=" w-70-l w-100 center">{children}</div>
        </>
    )
}