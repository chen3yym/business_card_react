import React from "react";
import FacebookLogo from "../images/facebook-icon.svg"
import LinkedinLogo from "../images/linkedin-icon.svg"
import InsLogo from "../images/ins-icon.svg"
import GitLogo from "../images/git-icon.svg"

export default function Footer() {
    return (
        <nav>
            <div>
                <a href="https://www.facebook.com/malanie.chan/"><img src={FacebookLogo} /></a>
                <a href="https://www.instagram.com/min_chen_2/"><img src={InsLogo} /></a>
                <a href="https://www.linkedin.com/in/min-chen-2289a8b8/"><img src={LinkedinLogo} /></a>
                <a href="https://github.com/chen3yym/"><img src={GitLogo} /></a>  
            </div>     
        </nav>
    )
}