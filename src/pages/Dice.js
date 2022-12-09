import { useEffect, useState } from "react";
import { AmountChange, AddAmount } from './../utilities/Bet';

import Background from '../components/Background';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import Chat from '../components/Chat';
import Table from '../components/Table';
import BetPlacement from '../components/BetPlacement';
import GameInfo from '../components/GameInfo';

import img_dice from '../images/icons/gray/dice.svg';
import random_icon from '../images/icons/random-icon.svg';

import './css/Dice.scss';

export default function _50x() {

    const [betBalance, setBetBalance] = useState(0);
    const [rolledDice, setRolledDice] = useState(50);

    function setRandomDice() {
        setRolledDice(Math.floor(Math.random() * 100) + 1);
    }

    function diceBetEntry(e) {
        if (+e.target.value > 0 && +e.target.value < 100) setRolledDice(e.target.value);
    }

    return (
        <div>
            <Background />
            <Header title={<><img src={img_dice} /><span>Dice</span></>} />
            <Navigation activePage="dice" />
            <Chat />

            <main className="dice-game">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-6">
                            <div className="row top-container">
                                <div className="col-5">
                                    <div className="custom-bet-placement">
                                        <div className="roll-under">
                                            <p>Roll Under</p>
                                            <input type="number" min="1" max="100" value={rolledDice} onChange={(event) => diceBetEntry(event)} />
                                            <button onClick={setRandomDice}><img src={random_icon} /></button>
                                        </div>
                                        <div className="bet-entry">
                                            <p>Bet Amount</p>
                                            <span>$</span>
                                            <input value={betBalance} type="number" onChange={(event) => AmountChange(event, setBetBalance)} />
                                            <div className="button-container">
                                                <button onClick={() => AddAmount("1/2", betBalance, setBetBalance)}><p>1/2</p></button>
                                                <button onClick={() => AddAmount("2x", betBalance, setBetBalance)}><p>2x</p></button>
                                                <button onClick={() => AddAmount("min", betBalance, setBetBalance)}><p>Min</p></button>
                                                <button onClick={() => AddAmount("max", betBalance, setBetBalance)}><p>Max</p></button>
                                            </div>
                                        </div>
                                        <button className="roll-button">ROLL</button>
                                    </div>
                                </div>
                                <div className="col-7">
                                    <div className="game-screen">
                                        INSERT DICE SCRIPT HERE
                                    </div>
                                </div>
                            </div>
                            <div className="row bottom-container"></div> {/* Empty */}
                        </div>
                        <div className="col-4">
                            <div className="bet-history">
                                <div className="top-bar">
                                    <button>MY BETS</button>
                                    <button className="active">ALL BETS</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}