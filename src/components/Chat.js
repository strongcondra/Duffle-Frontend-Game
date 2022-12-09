import './css/Chat.scss';
import Message from './Message.js';

//Image imports
import pfp from '../images/profile-pics/example.png'; //Example Profile Picture
//Icons
import settings from '../images/icons/three-dots.svg';
import gif_icon from '../images/icons/gif-icon.svg';

export default function Chat() {
    return (
        <div className="chat-container">
            <p className="chat-online-count">500 Online</p>
            <hr />
            <div className="chat-text-container">
                <Message img={pfp} name={"oynozan"}>Hi</Message>
                <Message img={pfp} name={"Anunnaki"}>Hello</Message>
                <Message img={pfp} name={"Anunnaki"}>Hi</Message>
                <Message img={pfp} name={"Anunnaki"}>Hi</Message>
                <Message img={pfp} name={"Anunnaki"}>Hi</Message>
                <Message img={pfp} name={"Anunnaki"}>Hi</Message>
                <Message img={pfp} name={"oynozan"}>Hi</Message>
                <Message img={pfp} name={"Anunnaki"}>HelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHello</Message>
                <Message img={pfp} name={"Anunnaki"}>Hi</Message>
                <Message img={pfp} name={"Anunnaki"}>Hi</Message>
                <Message img={pfp} name={"Anunnaki"}>Hi</Message>
                <Message img={pfp} name={"Anunnaki"}>Hi</Message>
                <Message img={pfp} name={"oynozan"}>Hi</Message>
                <Message img={pfp} name={"Anunnaki"}>Hello</Message>
                <Message img={pfp} name={"Anunnaki"}>Hi</Message>
                <Message img={pfp} name={"Anunnaki"}>Hi</Message>
                <Message img={pfp} name={"Anunnaki"}>Hi</Message>
                <Message img={pfp} name={"Anunnaki"}>Hi</Message>
            </div>
            <div className="enter-message-container">
                <input placeholder="Type Message..." />
                <div className="enter-message-icons">
                    <img src={gif_icon} />
                    <img src={settings} />
                </div>
            </div>
        </div>
    )
}