import './css/Message.scss';

export default function Message(props) {
    return (
        <div className="chat-message">
            <div className="message-img">
                <img src={props.img} />
            </div>
            <div className="message-text">
                <p className="message-name">
                    {props.name}
                </p>
                <div className="message-content">
                    <span>{props.children}</span>
                </div>
            </div>
        </div>
    )
}