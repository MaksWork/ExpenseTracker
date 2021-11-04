import React from "react";

import styles from "./App.module.css";

const App = () => {
    return (
        <div className={styles.mainContainer}>
            <h2>Expense tracker</h2>
            <div className={styles.mainInfo}>
                <div className={styles.balance}>
                    <h3 id={styles.balance_title}>Your balance</h3>
                    <h1 id={styles.balance_title}>$ 180.00</h1>
                </div>
                <div className={styles.income_expense}>
                    <div className={`${styles.income_cont} ${styles.col}`}>
                        <span className={styles.trans_title}>INCOME</span>
                        <span className={styles.income}>$ 300.00</span>
                    </div>
                    <div className={styles.vl}></div>
                    <div className={`${styles.expense_cont} ${styles.col}`}>
                        <span className={styles.trans_title}>EXPENSE</span>
                        <span className={styles.expense}>$ 200.00</span>
                    </div>
                </div>
            </div>
            <h3 id={styles.block_title}>History</h3>
            <div className={styles.history}>
                <div className={styles.trans_list}>
                    <div className={`${styles.trans_list_item} ${styles.trans_expense}`}>
                        <span className={styles.trans_name}>Book</span>
                        <span className={styles.trans_price}>-$ 120.00</span>
                    </div>
                    <div className={`${styles.trans_list_item} ${styles.trans_income}`}>
                        <span className={styles.trans_name}>Cash</span>
                        <span className={styles.trans_price}>+$ 300.00</span>
                    </div>
                    <div className={`${styles.trans_list_item} ${styles.trans_expense}`}>
                        <span className={styles.trans_name}>Book</span>
                        <span className={styles.trans_price}>-$ 120.00</span>
                    </div>

                </div>
            </div>
            <h3 id={styles.block_title}>Add new transaction</h3>
            <div className={styles.addTransaction}></div>
        </div>
    );
};

export default App;
