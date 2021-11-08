import React from "react";
import { useState } from "react";

import styles from "./AddTrans.module.css";

const AddTrans = (props) => { //начни с того что бы просто цыфарки зачеслялись на main info
    
    let [text, setText] = useState();
    let [amount, setAmount] = useState();
    
    const textUpdate = (e) =>{
        setText(e.target.value);

    }
    const amountUpdate = (e) =>{
        setAmount(e.target.value);

    }

    return (
        <div className={styles.addTransaction}>
            <div className={styles.text_cont}>
                <span>Text</span>
                <input onChange={textUpdate} placeholder='Enter text...'></input>
            </div>
            <div className={styles.amount_cont}>
                <span>
                    Amount
                    <h4>(negative - expense;positive - income)</h4>
                </span>
                <input onChange={amountUpdate} placeholder='Enter amount...'></input>
            </div>
            <div className={styles.btn_cont}>
                <button onClick={() => props.addTransaction(text, amount)}>Add transaction</button>
            </div>
        </div>
    );
};

export default AddTrans;