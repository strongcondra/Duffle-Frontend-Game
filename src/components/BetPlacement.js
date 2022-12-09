import { useState } from "react";
import { AmountChange, AddAmount } from './../utilities/Bet';

import './css/BetPlacement.scss';

export default function BetPlacement() {

    const[betAmount, setBetAmount] = useState(0);
    const[cashoutAmount, setCashoutAmount] = useState(0);

    return (
        <div className="bet-placement">
            <div className="left-container">
                <div className="bet-amount-container">
                    <div className="top-text">Bet Amount</div>
                    <div className="amount-buttons">
                        <input type="number" onChange={(event) => {AmountChange(event, setBetAmount)}} value={betAmount} />
                        <button onClick={() => AddAmount(0.1, betAmount, setBetAmount)}>+0.1</button>
                        <button onClick={() => AddAmount(0.5, betAmount, setBetAmount)}>+0.5</button>
                        <button onClick={() => AddAmount(1, betAmount, setBetAmount)}>+1</button>
                        <button onClick={() => AddAmount(5, betAmount, setBetAmount)}>+5</button>
                        <button onClick={() => AddAmount(10, betAmount, setBetAmount)}>+10</button>
                    </div>
                </div>
                <div className="cashout-container">
                    <div className="top-text">Cashout</div>
                    <div className="amount-buttons">
                        <input type="number" onChange={(event) => {AmountChange(event, setCashoutAmount)}} value={cashoutAmount} />
                        <button onClick={() => AddAmount("2x", cashoutAmount, setCashoutAmount)}>2x</button>
                        <button onClick={() => AddAmount("max", cashoutAmount, setCashoutAmount)}>MAX</button>
                    </div>
                </div>
            </div>
            <div className="right-container">
                <button>PLACE BET</button>
            </div>
        </div>
    )
}