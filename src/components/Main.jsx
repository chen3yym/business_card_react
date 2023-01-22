import React from "react";
import Photo  from '../images/self_photo.jpg'
import ContactButton from "./ContactButton";
import Footer from "./Footer";
export default function Main() {
    return (
        <main className="main--layout">
            <img src={Photo} className="main--photo" />
            <div className="main-intro" >

                <h1 className="main--name">Min Chen</h1>
                <h2 className="main--position">Software Developer</h2>
                <h2 className="main-pofolio"></h2>
            </div>
            <ContactButton />
          
            <h1 className="about--title"> About</h1>
            <h3>
                I am a frontend Developer with particular interest in
                 making things simple and automating daily tasks. I try
                  to keep up with security and best practice, and am always looking for new things to learn.
            </h3>
            <h1 className="interests--title">Interests</h1>
            <h3>
                Coffee fanatic. Reader. Piano player. Music scholar. 
            </h3> 
            <Footer />
        </main>
    )
}