import React from "react";

function ContactItemImage ({ imageUrl }){
    return(
        <div className="contact-item__image">
            <img src={imageUrl} />
        </div>
    );
}

export default ContactItemImage;