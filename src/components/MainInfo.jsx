import React from "react";

import styles from "./MainInfo.module.css";

const MainInfo = (props) => {
    return (
        <div className={styles.mainInfo}>
            <div className={styles.balance}>
                <h3>Your balance</h3>
                <h1>{`$ ${props.money}.00`}</h1>
            </div>
            <div className={styles.income_expense}>
                <div className={`${styles.income_cont} ${styles.col}`}>
                    <span className={styles.trans_title}>INCOME</span>
                    <span className={styles.income}>{`$ ${props.income}.00`}</span>
                </div>
                <div className={styles.vl}></div>
                <div className={`${styles.expense_cont} ${styles.col}`}>
                    <span className={styles.trans_title}>EXPENSE</span>
                    <span className={styles.expense}>{`$ ${props.expense}.00`}</span>
                </div>
            </div>
        </div>
    );
};

export default MainInfo;
