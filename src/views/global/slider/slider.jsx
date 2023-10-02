import React, { useEffect } from "react";

import styles from "./slider.module.scss";

const Slider = ({children, is_show = false, onClose = () => {}}) => {


    useEffect(() => {
        document.addEventListener("keydown", onEscPress);
    
        return () => {
            document.removeEventListener("keydown", onEscPress);
        };
    }, []);

    const onEscPress = (event) => {
        if(event.key === "Escape" || event.keyKode === 27){
            onClose()
        }
    }

    if(is_show){
        return(
            <div className={`${styles.slider}`}>
                <div className={`${styles.content}`}>
                    {children}
                </div>
            </div>
        )
    }
}

export default Slider;