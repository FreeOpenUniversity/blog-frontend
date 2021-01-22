import Nav from './nav';

export default function Layout({ children }) {
    return (
        <>
            <Nav />
            <div className="">{children}</div>
        </>
    )
}