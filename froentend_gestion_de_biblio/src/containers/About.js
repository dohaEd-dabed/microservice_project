import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

const About = (props) => {
    return (
        <div className="container-fluid">
            <Header />
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h2>À propos de nous</h2>
                        <p className="title text-justify my-4">
                       BookHub: Système de gestion des bibliothéques <br>
                       dohaeddabed01@gmail.com
                       </br>
                        </p>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default About