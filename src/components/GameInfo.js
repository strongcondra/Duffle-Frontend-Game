import { useState } from "react";
import './css/GameInfo.scss';

export default function BetPlacement() {

    const [gameHash, setGameHash] = useState("258058a2071d9fded4554a62ea4a0fc8");

    return (
        <div className="data-container"> 
            {/**
             * IDK what's the purpose of that container so
             * I'll call it as "data-container" for now
            */}
            <div className="top-wrapper">
                <p>User</p>
                <p>Bet</p>
                <p>Cashout</p>
                <p>Win</p>
            </div>
            <div className="body-wrapper">
                <div className="data-item"></div>
                <div className="data-item"></div>
                <div className="data-item"></div>
                <div className="data-item"></div>
                <div className="data-item"></div>
                <div className="data-item"></div>
                <div className="data-item"></div>
                <div className="data-item"></div>
                <div className="data-item"></div>
                <div className="data-item"></div>
                <div className="data-item"></div>
                <div className="data-item"></div>
                <div className="data-item"></div>
                <div className="data-item"></div>
                <div className="data-item"></div>
            </div>
            <div className="bottom-wrapper">
                <p>HASH: {gameHash}</p>
            </div>
        </div>
    )
}