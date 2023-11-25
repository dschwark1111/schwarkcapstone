export default function HomeSection() {
    return (
        <section id="homeSection" className="home--section">
            <div className="home--section--content--box">
                <div className="home--section--content">
                    <p className="section--title">
                        Hi, I'm Dorothy
                    </p>
                    <h1 className="home--section--title">
                        <span className="home--section-title--color">UX/UI</span>{" "}
                        <br />
                        Designer
                    </h1>
                    <p className="home--section-description"> Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                        <br />
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque voluptate officia odio cumque vero.</p>
                </div>
                <button className="btn btn-primary">Let's Connect!</button>
            </div>
            <div className="home--section--img">
                <img src="/img/aboutme2.png" alt="Home Section" />
            </div>
        </section>
    )
}
