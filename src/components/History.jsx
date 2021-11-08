import React from "react";

import styles from "./History.module.css";

const History = () => {
    return (
        <div className={styles.history}>
            <div className={styles.trans_list}>
                <div
                    className={`${styles.trans_list_item} ${styles.trans_expense}`}>
                    <button id={styles.btn}>X</button>
                    <span className={styles.trans_name}>Book</span>
                    <span>-$ 120.00</span>
                </div>
                <div></div>
                <div
                    className={`${styles.trans_list_item} ${styles.trans_income}`}>
                    <button id={styles.btn}>X</button>
                    <span className={styles.trans_name}>Cash</span>
                    <span>+$ 300.00</span>
                </div>
                <div
                    className={`${styles.trans_list_item} ${styles.trans_expense}`}>
                    <button id={styles.btn}>X</button>
                    <span className={styles.trans_name}>Book</span>
                    <span>-$ 120.00</span>
                </div>
            </div>
        </div>
    );
};

export default History;
