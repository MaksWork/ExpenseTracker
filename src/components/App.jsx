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

    const deleteTransaction = (id) => {
        const list = Object.assign([], history);
        
        if(list[id].amount > 0){
            setMoney(money - Math.abs(list[id].amount))
            setIncome(income - list[id].amount)
        }
        else{
            setMoney(money + Math.abs(list[id].amount))
            setExpense(expense + list[id].amount)
        }

        list.splice(id, 1);
        setHistory(list);
    }
    
    const addTransaction = (text, amountStr) => {
        setMoney((m) => {
            return m + parseInt(amountStr);
        });
        if(amountStr.charAt(0) === "-"){
            setExpense((e) => e - parseInt(amountStr));
        }
        else{
            setIncome((i) => i + parseInt(amountStr));
        }
        let amount = parseInt(amountStr);
        let object = {text: text, amount: amount};
        setHistory(h => [...h, object])
    };

    return (
        <div className={styles.mainContainer}>
            <h2>Expense tracker</h2>
            <MainInfo money={money} income={income} expense={expense}/>
            <h3 id={styles.block_title}>History</h3>
            <History historyList={history} deleteMethod={deleteTransaction}/>
            <h3 id={styles.block_title}>Add new transaction</h3>
            <AddTrans addTransaction={addTransaction} />
        </div>
    );
};

export default App;
