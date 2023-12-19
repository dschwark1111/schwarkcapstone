import React from "react";
import { Link } from "react-scroll";


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
                    <p className="home--section-description"> I'm a UX/UI Designer with a background in Digital Marketing and business, which gives me a unique edge in improving user experience through design while also maximizing a businesses conversion rate. 
                        <br />
                        <br />
                        My research experience has refined my problem-solving skills and user insights. I'm constantly seeking new ways to learn and grow through real-world experiences.</p>
                </div>
                <br />
                <br />
                
                <a href="https://www.linkedin.com/in/dorothy-schwark/" >
                    
                <button className="btn btn-primary">Let's Connect!</button>
                </a>
           
                
            </div>
            <div className="home--section--img">
                <img src="/img/aboutme2.png" alt="Home Section" />
            </div>
        </section>
    )
}
