import './css/BetPlayer.scss';

export default function BetPlayer(props) {
    return (
        <div className="bet-player">
            <div className="user">
                <img src={props.avatar} />
                <span>{props.name}</span>
            </div>
            <div className="amount">
                ${props.amount}
            </div>
        </div>
    )
}