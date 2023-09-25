import React from "react";

import styles from "./slider.module.scss";

const Slider = ({children, is_show = false, onClose = () => {}}) => {

    if(is_show){
        return(
            <div className={`${styles.slider}`} onClick={onClose}>
                    <div className={`${styles.content}`}>
                        {children}
                    </div>
                <div className={styles.overlay} onClick={onClose}></div>
            </div>
        )
    }

}

export default Slider;