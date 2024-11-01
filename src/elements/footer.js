import React from "react";
import {useState} from 'react';
import '../css/footer.css';
import {FacebookBlack} from "../assets/icons/facebook.tsx";
import InstagramIcon from "../assets/icons/instagram.tsx";
import TiktokIcon from "../assets/icons/tiktok.tsx";
import PhoneIcon from "../assets/icons/phone-icon.tsx";
import EmailIcon from "../assets/icons/email-icon.tsx";
import EmailOpen from "../assets/icons/open-email.tsx";

export function Footer(){

        const [hoveredIcons, setHoveredIcons] = useState({
            facebook: true,
            instagram: true,
            tiktok: true,
        });

        const handleMouseEnter = (icon) => {
            setHoveredIcons((prev) => ({...prev, [icon]: false}));
        };

        const handleMouseLeave = (icon) => {
            setHoveredIcons((prev) => ({...prev, [icon]:true}));
        };

        const [hoveredContact, setHoveredContact] = useState({
            phone: 'contact_phone',
            email: true,
        });

        const handleMouseEnterEmail = (icon) => {
            setHoveredContact((prev) => ({...prev, [icon]:false}));
        };

        const handleMouseLeaveEmail = (icon) => {
            setHoveredContact((prev) => ({...prev, [icon]:true}));
        };

        const handleMouseEnterPhone = (icon) => {
            setHoveredContact((prev) => ({...prev, [icon]: 'contact_phone-active'}));
        };

        const handleMouseLeavePhone = (icon) => {
            setHoveredContact((prev) => ({...prev, [icon]: 'contact_phone'}));
        };

    return(
        <>
            <div className="footer_social">
                <h3>Social</h3>
                <div className="social_wrapp">
                    <span className="facebook_thumb" onMouseEnter={() => handleMouseEnter('facebook')} onMouseLeave={() => handleMouseLeave('facebook')}>
                        {hoveredIcons.facebook ? (<FacebookBlack color={"black"} size={45}/>):(<FacebookBlack color={"#556b2f"} size={45}/>)}
                    </span>
                    <span className="instagram_thumb" onMouseEnter={() => handleMouseEnter('instagram')} onMouseLeave={() => handleMouseLeave('instagram')}>
                        {hoveredIcons.instagram ? (<InstagramIcon color={"black"} size={45} />):(<InstagramIcon color={"#556b2f"} size={45} />)}
                    </span>
                    <span className="tiktok_thumb" onMouseEnter={() => handleMouseEnter('tiktok')} onMouseLeave={() => handleMouseLeave('tiktok')}>
                    {hoveredIcons.tiktok ? (<TiktokIcon color={"black"} size={45} />):(<TiktokIcon color={"#556b2f"} size={45} />)}
                    </span>
                </div>
            </div>
            <div className="footer_contact">
                <div className="phone">
                    <span onMouseEnter= {() => handleMouseEnterPhone('phone')} onMouseLeave= {() => handleMouseLeavePhone('phone')} className={hoveredContact.phone}><PhoneIcon color={"black"} size={30}/></span><strong>317-4048898</strong>
                </div>
                <div className="mail">
                    <span onMouseEnter={() => handleMouseEnterEmail('email')} onMouseLeave={() => handleMouseLeaveEmail('email')} className='contact-email'>
                        {hoveredContact.email ? (<EmailIcon color={"black"} size={30}/>):(<EmailOpen color={"black"} size={30}/>)}
                    </span>
                    <strong>coffeeshop@contact.com</strong>
                </div>
            </div>
            <div className="footer_copy">
                <p>Copyright 2020</p>
            </div>
        </>
    )
};

