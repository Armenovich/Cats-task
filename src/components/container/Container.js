import React from "react";
import Borad from "../board/Board"
import Sidebar from "../sidebar/Sidebar";
import styles from "./Container.module.scss"


const Container = () => (
    <div className={styles.container}>
        <Sidebar />
        <Borad />       
    </div>
)


export default Container