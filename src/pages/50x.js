import { useEffect, useState } from "react";
import { AmountChange, AddAmount } from './../utilities/Bet';

import Background from '../components/Background';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import Chat from '../components/Chat';
import BetPlayer from '../components/BetPlayer';

import pfp from '../images/profile-pics/example.png'; //Example Profile Picture
import img_50x from '../images/icons/gray/50x.svg';
import person_yellow from '../images/icons/person-yellow.svg';
import person_gray from '../images/icons/person-gray.svg';
import person_blue from '../images/icons/person-blue.svg';
import person_green from '../images/icons/person-green.svg';

import './css/50x.scss';

export default function _50x() {

    const [betBalance, setBetBalance] = useState(0);

    return (
        <div>
            <Background />
            <Header title={<><img src={img_50x} /><span>50X</span></>} />
            <Navigation activePage="50x" />
            { /* <Chat /> */ }

            <main className="_50x-game">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-4">
                            <div className="custom-bet-placement">
                                <div className="top-bar">
                                    <button onClick={() => AddAmount("clear", betBalance, setBetBalance)}>Clear</button>
                                    <button onClick={() => AddAmount(0.1, betBalance, setBetBalance)}>+0.1</button>
                                    <button onClick={() => AddAmount(1, betBalance, setBetBalance)}>+1</button>
                                    <button onClick={() => AddAmount(10, betBalance, setBetBalance)}>+10</button>
                                    <button onClick={() => AddAmount(100, betBalance, setBetBalance)}>+100</button>
                                    <button onClick={() => AddAmount("1/2", betBalance, setBetBalance)}>1/2</button>
                                    <button onClick={() => AddAmount("2x", betBalance, setBetBalance)}>2x</button>
                                    <button onClick={() => AddAmount("max", betBalance, setBetBalance)}>Max</button>
                                </div>
                                <div className="bottom-bar">
                                    <span>$</span>
                                    <input value={betBalance} type="number" onChange={(event) => AmountChange(event, setBetBalance)} />
                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="game-screen">
                                INSERT 50X GAME SCRIPT HERE!
                            </div>
                        </div>
                        <div className="col-4"></div>
                    </div>
                    <div className="row bet-history">
                        <div className="col-3 _2x-container">
                            <div className="multiplier-title">2x</div>
                            <div className="info-box">
                                <p><img src={person_yellow} /> 22 Players</p>
                                <p><span>TOTAL</span> $420.69</p>
                            </div>
                            
                            <div className="bet-players">
                                <BetPlayer avatar={pfp} name={"Anunnaki"} amount={62.25} />
                                <BetPlayer avatar={pfp} name={"Anunnaki"} amount={62.25} />
                                <BetPlayer avatar={pfp} name={"Anunnaki"} amount={62.25} />
                            </div>
                        </div>
                        <div className="col-3 _3x-container">
                            <div className="multiplier-title">3x</div>
                            <div className="info-box">
                                <p><img src={person_gray} /> 22 Players</p>
                                <p><span>TOTAL</span> $420.69</p>
                            </div>
                            
                            <div className="bet-players">
                                <BetPlayer avatar={pfp} name={"Anunnaki"} amount={62.25} />
                                <BetPlayer avatar={pfp} name={"Anunnaki"} amount={62.25} />
                                <BetPlayer avatar={pfp} name={"Anunnaki"} amount={62.25} />
                            </div>
                        </div>
                        <div className="col-3 _5x-container">
                            <div className="multiplier-title">5x</div>
                            <div className="info-box">
                                <p><img src={person_blue} /> 22 Players</p>
                                <p><span>TOTAL</span> $420.69</p>
                            </div>
                            
                            <div className="bet-players">
                                <BetPlayer avatar={pfp} name={"Anunnaki"} amount={62.25} />
                                <BetPlayer avatar={pfp} name={"Anunnaki"} amount={62.25} />
                                <BetPlayer avatar={pfp} name={"Anunnaki"} amount={62.25} />
                            </div>
                        </div>
                        <div className="col-3 _50x-container">
                            <div className="multiplier-title">50x</div>
                            <div className="info-box">
                                <p><img src={person_green} /> 22 Players</p>
                                <p><span>TOTAL</span> $420.69</p>
                            </div>
                            
                            <div className="bet-players">
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