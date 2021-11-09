import React from "react";

import styles from "./History.module.css";

const History = (props) => {
    const list = props.historyList;
    const elementList = list.map((el, i) => {
        let mark;
        let color;
        let amountStr;

        if(el.amount > 0){
            mark = "+";
            color = styles.trans_income;
            amountStr = `${mark}$ ${el.amount}.00`;
        }
        else{
            mark = "-";
            color = styles.trans_expense;
            amountStr = `${mark}$ ${Math.abs(el.amount)}.00`
        }
        
        return(
            <div className={`${styles.trans_list_item} ${color}`} key={i}>
                <button onClick={() => props.deleteMethod(i)} id={styles.btn}>X</button>
                <span className={styles.trans_name}>{el.text}</span>
                <span>{amountStr}</span>
            </div>
        );
    });

    
    
    return (
        <div className={styles.history}>
            <div className={styles.trans_list}>
                {elementList}
            </div>
        </div>
    );
};

export default History;
