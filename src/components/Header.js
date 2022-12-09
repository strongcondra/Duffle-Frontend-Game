import './css/Header.scss';

import { useEffect, useState } from 'react';

//Image imports
import pfp from '../images/profile-pics/example.png'; //Example Profile Picture

export default function Header({title = "Title", homePage = false}) {

    const[username, setUsername] = useState();
    const [headerBackground, setHeaderBackground] = useState({backgroundColor: "transparent"});

    useEffect(() => {

        setUsername("Username"); //Username data will be received from backend
        
        //When scroll position is not 0, it is harder to read texts on header.
        //So I make header's background black when scroll Y is not 0
        function checkScroll(y) {
            if (y > 0) {
                setHeaderBackground({backgroundColor: "black"});
            } else {
                setHeaderBackground({backgroundColor: "transparent"});
            }
        }

        window.onscroll = () => {
            let scrollY = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
            checkScroll(scrollY);
        };
        
    })

    return (
        <header style={headerBackground}>
            {title &&
                <div className="container-fluid max-width-1920 header-container">
                    <div className="row">
                        <div className="col-12">
                            <h1>{title}</h1>
                        </div>
                    </div>
                </div>
            }
            <div className="balance-container">
                <div className="balance">
                    <span className="dollar-sign">$</span>
                    <span className="balance-text" style={homePage ? {"fontWeight": "700", "color": "white"} : {}}>320.00</span>
                </div>
                <div className="add-balance">
                    <a href="#" style={homePage ? {color: "white"} : {}}>+</a>
                </div>
            </div>
            <p className="username">{username}</p>
            <a href="/profile">
                <img className="profile-pic" src={pfp} />
            </a>
        </header>
    );
}
