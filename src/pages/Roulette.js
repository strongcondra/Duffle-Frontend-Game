import { useEffect, useState } from "react";
import { AmountChange, AddAmount } from './../utilities/Bet';

import Background from '../components/Background';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import Chat from '../components/Chat';
import BetPlayer from '../components/BetPlayer';

import img_roulette from '../images/icons/gray/roulette.svg';
import pfp from '../images/profile-pics/example.png'; //Example Profile Picture
import bet_peach from '../images/icons/bet-peach.svg';
import bet_gray from '../images/icons/bet-gray.svg';
import bet_green from '../images/icons/bet-green.svg';
import person_peach from '../images/icons/person-peach.svg';
import person_gray from '../images/icons/person-gray.svg';
import person_green from '../images/icons/person-green.svg';

import './css/Roulette.scss';

export default function _50x() {

    const [betBalance, setBetBalance] = useState(0);

    return (
        <div>
            <Background />
            <Header title={<><img src={img_roulette} /><span>Roulette</span></>} />
            <Navigation activePage="roulette" />
            {/*<Chat />*/}

            <main className="roulette-game">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <div className="game-screen">
                                INSERT ROULETTE SCRIPT HERE
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="bet-box">
                                <div className="custom-bet-placement">
                                    <span>$</span>
                                    <input type="number" value={betBalance} onChange={(event) => AmountChange(event, setBetBalance)} />
                                    <button onClick={() => AddAmount("clear", betBalance, setBetBalance)}>X</button>
                                    <button onClick={() => AddAmount(0.1, betBalance, setBetBalance)}>+0.1</button>
                                    <button onClick={() => AddAmount(1, betBalance, setBetBalance)}>+1</button>
                                    <button onClick={() => AddAmount(10, betBalance, setBetBalance)}>+10</button>
                                    <button onClick={() => AddAmount(100, betBalance, setBetBalance)}>+100</button>
                                    <button onClick={() => AddAmount("2x", betBalance, setBetBalance)}>x2</button>
                                    <button onClick={() => AddAmount("1/2", betBalance, setBetBalance)}>1/2</button>
                                    <button onClick={() => AddAmount("max", betBalance, setBetBalance)}>MAX</button>
                                </div>
                                <div className="previous-rolls">
                                    <span>Previous Rolls</span>
                                    <div>
                                        <div>1</div>
                                        <div>1</div>
                                        <div>1</div>
                                        <div>1</div>
                                        <div>1</div>
                                        <div>1</div>
                                        <div>1</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row bet-history">
                        <div className="col-4 bet-peach">
                            <div className="multiplier-title">
                                <img src={bet_peach} />
                                <span className="multiplier-color">Bet Peach</span>
                                <span className="multiplier-text">2x</span>
                            </div>
                            <div className="info-box">
                                <p><img src={person_peach} /> 22 Players</p>
                                <p><span>TOTAL</span> $420.69</p>
                            </div>
                            <div className="bet-players">
                                <BetPlayer avatar={pfp} name={"Anunnaki"} amount={62.25} />
                                <BetPlayer avatar={pfp} name={"Anunnaki"} amount={62.25} />
                                <BetPlayer avatar={pfp} name={"Anunnaki"} amount={62.25} />
                                <BetPlayer avatar={pfp} name={"Anunnaki"} amount={62.25} />
                                <BetPlayer avatar={pfp} name={"Anunnaki"} amount={62.25} />
                            </div>
                        </div>
                        <div className="col-4 bet-green">
                            <div className="multiplier-title">
                                <img src={bet_green} />
                                <span className="multiplier-color">Bet Green</span>
                                <span className="multiplier-text">14x</span>
                            </div>
                            <div className="info-box">
                                <p><img src={person_green} /> 22 Players</p>
                                <p><span>TOTAL</span> $420.69</p>
                            </div>
                            <div className="bet-players">
                                <BetPlayer avatar={pfp} name={"Anunnaki"} amount={62.25} />
                                <BetPlayer avatar={pfp} name={"Anunnaki"} amount={62.25} />
                                <BetPlayer avatar={pfp} name={"Anunnaki"} amount={62.25} />
                                <BetPlayer avatar={pfp} name={"Anunnaki"} amount={62.25} />
                                <BetPlayer avatar={pfp} name={"Anunnaki"} amount={62.25} />
                            </div>
                        </div>
                        <div className="col-4 bet-gray">
                            <div className="multiplier-title">
                                <img src={bet_gray} />
                                <span className="multiplier-color">Bet Gray</span>
                                <span className="multiplier-text">2x</span>
                            </div>
                            <div className="info-box">
                                <p><img src={person_gray} /> 22 Players</p>
                                <p><span>TOTAL</span> $420.69</p>
                            </div>
                            <div className="bet-players">
                                <BetPlayer avatar={pfp} name={"Anunnaki"} amount={62.25} />
                                <BetPlayer avatar={pfp} name={"Anunnaki"} amount={62.25} />
                                <BetPlayer avatar={pfp} name={"Anunnaki"} amount={62.25} />
                                <BetPlayer avatar={pfp} name={"Anunnaki"} amount={62.25} />
                                <BetPlayer avatar={pfp} name={"Anunnaki"} amount={62.25} />
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}