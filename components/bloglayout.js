import Link from "next/link";

export default function BlogLayout({ children }) {
    return (
        <>
            <nav className="h3 mv2 flex justify-start dark-gray w-100 tr items-center">
                <Link href="/">
                    <p className="Staat f3 ttu ph3 pointer">Home</p>
                </Link>
                <Link href="/blogs">
                    <p className="Staat f3 ttu ph3 pointer underline">Blogs</p>
                </Link>
            </nav>
            <div className=" w-70-l w-100 center">{children}</div>
        </>
    )
}