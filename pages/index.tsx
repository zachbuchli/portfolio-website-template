import Layout from "../components/layout";
import About from "../components/about";
import Projects from "../components/projects";
import Contact from "../components/contact";
import Hero from "../components/hero";

export default function Home() {
    return (
        <>
            <Layout>
                <div className="flex flex-col justify-center">
                    <Hero />
                    <About />
                    <Projects />
                    <Contact />
                </div>
            </Layout>
        </>
    );
}
