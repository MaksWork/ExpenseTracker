import React from "react";

import styles from "./App.module.css";

const App = () => {
    return (
        <div className={styles.mainContainer}>
            <h2>Expense tracker</h2>
            <div className={styles.mainInfo}>
                <div className={styles.balance}>
                    <h3>Your balance</h3>
                    <h1>$ 180.00</h1>
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
                        <button id={styles.btn}>X</button>
                        <span className={styles.trans_name}>Book</span>
                        <span>-$ 120.00</span>
                    </div>
                    <div></div>
                    <div className={`${styles.trans_list_item} ${styles.trans_income}`}>
                        <button id={styles.btn}>X</button>
                        <span className={styles.trans_name}>Cash</span>
                        <span>+$ 300.00</span>
                    </div>
                    <div className={`${styles.trans_list_item} ${styles.trans_expense}`}>
                        <button id={styles.btn}>X</button>
                        <span className={styles.trans_name}>Book</span>
                        <span>-$ 120.00</span>
                    </div>

                </div>
            </div>
            <h3 id={styles.block_title}>Add new transaction</h3>
            <div className={styles.addTransaction}>
                <div className={styles.text_cont}>
                    <span>Text</span>
                    <input placeholder="Enter text..."></input>
                </div>
                <div className={styles.amount_cont}>
                    <span>Amount
                    <h4>(negative - expense;positive - income)</h4></span>
                    <input placeholder="Enter amount..."></input>
                </div>
                <div className={styles.btn_cont}>
                    <button>Add transaction</button>
                </div>
            </div>
        </div>
    );
};

export default App;
