import * as React from "react"
import "../assets/about.scss"
import Nav from '../navbar/nav'
import Parallax from "../parallax/parallax.js"
import Overview from '../overview.js'
import { Link } from "gatsby"
import abouthead from '../images/aboutimg/ps9.jpg'
import aboutmid1 from '../images/aboutimg/ps3.jpg'
import aboutmid2 from '../images/aboutimg/ps2.jpg'
import Connectwithus from '../footer/connectwithus'
import Footer from '../footer/footer.js'
import Values from '../values.js'
import ValuePicture from "../images/aboutimg/values.png"


const AboutPage = () => {
    return (

        <main>
            <Nav />
            <Parallax image={abouthead} caption={"About"} height={250}> </Parallax>
            <Overview />
            <Parallax image={aboutmid1} height={200}> </Parallax>
            <Values image={ValuePicture}> </Values>
            <Parallax image={aboutmid2} height={200}> </Parallax>
            <Footer />
            <Connectwithus />
        </main>
    )
}
export default AboutPage