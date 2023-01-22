import React from "react";
import FacebookLogo from "../images/facebook-icon.svg"
import LinkedinLogo from "../images/linkedin-icon.svg"
import InsLogo from "../images/ins-icon.svg"
import GitLogo from "../images/git-icon.svg"

export default function Footer() {
    return (
        <nav>
            <div>
                <img src={FacebookLogo} />
                <img src={InsLogo} />
                <img src={LinkedinLogo} />
                <img src={GitLogo} />      
            </div>     
        </nav>
    )
}