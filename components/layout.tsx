import Navbar from './navbar'
import Footer from './footer'

type Props = {
    children: React.ReactNode
}

export default function Layout({ children }: Props) {
    return (
        <>
            <div className="w-screen h-screen flex-col">
                <Navbar />
                    <main>{children}</main>
                <Footer />
            </div>
        </>
    )
}