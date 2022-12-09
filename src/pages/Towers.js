import { useEffect, useState } from "react";

import Background from '../components/Background';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import Chat from '../components/Chat';
import Table from '../components/Table';
import BetPlacement from '../components/BetPlacement';
import GameInfo from '../components/GameInfo';

import img_towers from '../images/icons/gray/towers.svg';

import './css/Towers.scss';

export default function Towers() {

    const [towerDatas, setTowerDatas] = useState([
        [0,0,0], [0,0,0],
        [0,0,0], [0,0,0],
        [0,0,0], [0,0,0],
        [0,0,0], [0,0,0],
        [0,0,0], [0,0,0]
    ]);

    return (
        <div>
            <Background />
            <Header title={<><img src={img_towers} /><span>Towers</span></>} />
            <Navigation activePage="towers" />
            <Chat />

            <main className="towers-game">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-7">
                            <div className="row">
                                <div className="game-screen">
                                    <div className="game-scores">
                                        <div className="score-difficulty-tab">
                                            <p>EASY</p>
                                            <p>MEDIUM</p>
                                            <p>HARD</p>
                                        </div>
                                        <div className="score-table-wrapper">
                                            <Table 
                                                theadArray = {["EASY", "MEDIUM", "HARD"]} //Not Visible
                                                dataArray = {towerDatas}
                                            />
                                        </div>
                                        <div className="score-bottom-tab">
                                            <div><span>0</span></div>
                                            <div><span>0</span></div>
                                            <div><span>0</span></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <BetPlacement />
                            </div>
                        </div>
                        <div className="col-3">
                            <GameInfo />
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}