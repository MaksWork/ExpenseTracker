import React from "react";
import { useState } from "react";

import styles from "./App.module.css";

import MainInfo from "./MainInfo";
import History from "./History";
import AddTrans from "./AddTrans";

const App = () => {
    let [money, setMoney] = useState(160);
    let [income, setIncome] = useState(200);
    let [expense, setExpense] = useState(40);

    let [history, setHistory] = useState([
        { text: "Book", amount: -20 },
        { text: "Lunch", amount: -20 },
        { text: "Work", amount: 200 },
    ]);

    const addTransaction = (text, amount) => {
        setMoney((m) => {
            return m + parseInt(amount);
        });
        if(amount.charAt(0) === "-"){
            setExpense((e) => e - parseInt(amount));
        }
        else{
            setIncome((i) => i + parseInt(amount));
        }
        let intAmount = parseInt(amount);
        setHistory((h) => {
            h.push({text, intAmount})
        })
        console.log(history);
    };

    return (
        <div className={styles.mainContainer}>
            <h2>Expense tracker</h2>
            <MainInfo money={money} income={income} expense={expense}/>
            <h3 id={styles.block_title}>History</h3>
            <History historyList={history}/>
            <h3 id={styles.block_title}>Add new transaction</h3>
            <AddTrans addTransaction={addTransaction} />
        </div>
    );
};

export default App;
