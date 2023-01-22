import React from "react";
import EmailLogo from "../images/mail.svg"



export default function ContactButton() {
    return (
        <div className="div--button">  
            <button>
                <div>
                    <img src={EmailLogo} />
                    <h3 className="button--email"><a href="mailto:mchen26lsu@gmail.com" className="email--link">Email</a></h3>
                </div>
            </button>
        </div> 
    )

}