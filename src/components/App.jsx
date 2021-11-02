import React from "react";

import styles from "./App.module.css";

const App = () => {
	return(
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
			<div className={styles.history}></div>
			<div className={styles.addTransaction}></div>
		</div>
	)
}

export default App;