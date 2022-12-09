import { useEffect, useState } from "react";

import Background from '../components/Background';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import Chat from '../components/Chat';
import BetPlacement from '../components/BetPlacement';
import GameInfo from '../components/GameInfo';

import wimg_crash from '../images/icons/white/crash.svg';

import './css/Crash.scss';

export default function Crash() {

    return (
        <div>
            <Background />
            <Header title={<><img src={wimg_crash} /><span>Crash</span></>} />
            <Navigation activePage="crash" />
            <Chat />

            <main className="crash-game">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-3">
                            <GameInfo />
                        </div>
                        <div className="col-7">
                            <div className="row">
                                <div className="game-screen">
                                    INSERT CRASH GAME SCRIPT HERE!
                                </div>
                            </div>
                            <div className="row">
                                <BetPlacement />
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}