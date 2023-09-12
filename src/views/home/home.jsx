/* React */
import React from "react";

/* Components */
import HomeHeader from "./components/home_header.component";

/* CSS */
import styles from "./home.module.scss";

const Home = () => {
    return (
        <div id={styles.home}>
            <HomeHeader />
        </div>
    )
}

export default Home;