export default function About() {
    return (
        <>
            <div id="about" className="container my-24 px-6 mx-auto">
                <section className="mb-32">
                    <div className="flex flex-wrap">
                        <div className="grow-0 shrink-0 basis-auto w-full lg:w-5/12 mb-12 lg:mb-0">
                            <div className="flex lg:py-12">
                                <img
                                    src="/images/headshot.jpg"
                                    className="w-full rounded-lg shadow-lg"
                                    id="cta-img-nml-50"
                                    alt=""
                                />
                            </div>
                        </div>

                        <div className="grow-0 shrink-0 basis-auto w-full lg:w-7/12">
                            <div className="bg-blue-700 h-full rounded-lg p-6 lg:pl-12 text-white flex items-center text-center lg:text-left">
                                <div className="lg:pl-12">
                                    <h2 className="text-3xl font-bold mb-6">
                                        About Me
                                    </h2>
                                    <p className="mb-6 pb-2 lg:pb-0">
                                        Hi! &#128075; My name is Zach Buchli and
                                        I am a passionate software developer who
                                        enjoys building complex software
                                        solutions. I grew up in a small town in
                                        northern Wisconsin and recently
                                        graduated from the University of
                                        Minnesota Duluth with a B.S. in Computer
                                        Science. I am currently a Solutions
                                        Developer at Cirrus Aircraft.
                                    </p>

                                    <div className="flex flex-col md:flex-row md:justify-around xl:justify-start mb-6 mx-auto"></div>

                                    <p>
                                        At Cirrus, I have been hard at work
                                        designing and implementing an enterprise
                                        integration platform using Microsoft
                                        Azure as well as an IOT solution using
                                        AWS. Outside of work I enjoy rock
                                        climbing, mountain biking, and exploring
                                        new programing languages and frameworks.
                                        I am currently working on adding a blog
                                        to my website where I can start sharing
                                        what I have learned while building
                                        software solutions on Azure.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}
