import React from "react";
import "./side_nav.scss";

const SideNav = () => {
    return (
        <aside className="side-nav">
            <div className="side-nav__logo">
                <img 
                    src="/images/logo.svg" 
                    alt="Logo of invoice app" 
                />
            </div>

            <button type="button" className="side-nav__theme-btn">
                <img src="/images/icon-moon.svg" alt="Moon icon" />
            </button>

            <button type="button" className="side-nav__user">
                <img src="/images/image-avatar.jpg" alt="profile picture of user" />
            </button>
        </aside>
  )
}

export default SideNav