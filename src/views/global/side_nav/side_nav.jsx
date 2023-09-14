/* React */
import React, { useState, useEffect } from "react";

/* CSS */
import "./side_nav.scss";

const SideNav = () => {

    const [dark_mode, setDarkMode] = useState(false);

    useEffect(() => {
        const dark_mode = localStorage.getItem("dark_mode");
        if(dark_mode === "true"){
            setDarkMode(true);
        }
    }, []);

    const toggleDarkMode = () => {
        if(dark_mode){
            document.body.className = "";
            localStorage.setItem("dark_mode", "false");
        }
        else{
            document.body.className = "dark_mode";
            localStorage.setItem("dark_mode", "true");
        }
        setDarkMode(!dark_mode);
    }

    return (
        <aside className="side-nav">
            <div className="side-nav__logo">
                <img 
                    src="/images/logo.svg" 
                    alt="Logo of invoice app" 
                />
            </div>

            <button type="button" className="side-nav__theme-btn" onClick={toggleDarkMode}>
                {
                    dark_mode
                        ? <img src="/images/icon-sun.svg" alt="Sun icon" />
                        : <img src="/images/icon-moon.svg" alt="Moon icon" />
                }
            </button>

            <button type="button" className="side-nav__user">
                <img src="/images/image-avatar.jpg" alt="profile picture of user" />
            </button>
        </aside>
  )
}

export default SideNav