import './css/HomePage.scss';

//Component Imports
import Background from '../components/Background';
import Header from '../components/Header';
import Navigation from '../components/Navigation';

//Image imports
import img_logo from '../images/logo-353x270.svg';

//Blog images
import img_preferred_post from '../images/blog/preferred-blog-image.png';
import img_small_post_1 from '../images/blog/small-blog-image-1.png';
import img_small_post_2 from '../images/blog/small-blog-image-2.png';
import img_small_post_3 from '../images/blog/small-blog-image-3.png';
import img_small_post_4 from '../images/blog/small-blog-image-4.png';

//White icon images
import wimg_50x from '../images/icons/white/50x.svg';
import wimg_crash_2 from '../images/icons/white/crash2.svg';
import wimg_dice from '../images/icons/white/dice.svg';
import wimg_roulette from '../images/icons/white/roulette.svg';
import wimg_towers from '../images/icons/white/towers.svg';

export default function HomePage() {
    return(
        <div>
            <Background />
            <Header title="" homePage={true} />
            <Navigation homePage={true} />
            
            <main>
                <div className="home-page-content">
                    <img className="logo" src={img_logo} />
                    <h1 className="home-page-title">Pick Your <span>Gamemode</span></h1>
                    <div className="game-modes">
                        <a href="/roulette">
                            <img src={wimg_roulette} style={{"width": "129px", "height":"129px", "marginTop":"12px"}} />
                            <p>ROULETTE</p>
                        </a>
                        <a href="/towers">
                            <img src={wimg_towers} style={{"width": "108px", "height":"108px", "marginTop":"20px"}} />
                            <p>TOWERS</p>
                        </a>
                        <a href="/crash">
                            <img src={wimg_crash_2} style={{"width": "120px", "height":"74px", "marginTop":"40px"}} />
                            <p>CRASH</p>
                        </a>
                        <a href="/dice">
                            <img src={wimg_dice} style={{"width": "124px", "height":"124px", "marginTop":"5px"}} />
                            <p>DICE</p>
                        </a>
                        <a href="/50x">
                            <img src={wimg_50x} style={{"width": "133px", "height":"127px", "marginTop":"6px"}} />
                            <p>50X</p>
                        </a>
                    </div>
                    <p className="blog-title">Check out our Blog</p>
                    <div className="container-fluid max-width-1920 blog-container">
                        <div className="row">
                            <div className="col-12 col-lg-6 col-xl-5 preferred-post-image-container">
                                <img className="preferred-post-image" src={img_preferred_post} />
                            </div>
                            <div className="col-12 col-lg-6 col-xl-4">
                                <div className="blog-tags">
                                    <span className="blog-date">03 march, 2022</span>
                                    <span>NEW</span>
                                </div>
                                <p className="blog-entry-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed explain to you how all this mistaken idea of denouncing pleasure</p>
                                <p className="blog-text">
                                    But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great.<br /><br />
                                    Explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally.<br /><br />
                                    Encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying.<br /><br />
                                    Consequences, or one who avoids a pain that produces no resultant pleasure?<br /><br />
                                </p>
                            </div>
                            <div className="col-12 col-lg-12 col-xl-3 small-blog-posts">
                                <div className="row">
                                    <div className="col-6 col-md-3 col-xl-6">
                                        <div className="small-blog-post">
                                            <img src={img_small_post_1} />
                                            <div className="blog-image-background"></div>
                                            <span className="blog-date">03 march, 2022</span>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit dolor sit amet consectetur ...</p>
                                            <button>Read</button>
                                        </div>
                                    </div>
                                    <div className="col-6 col-md-3 col-xl-6">
                                        <div className="small-blog-post">
                                            <img src={img_small_post_2} />
                                            <div className="blog-image-background"></div>
                                            <span className="blog-date">03 march, 2022</span>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit dolor sit amet consectetur ...</p>
                                            <button>Read</button>
                                        </div>
                                    </div>
                                    <div className="col-6 col-md-3 col-xl-6">
                                        <div className="small-blog-post">
                                            <img src={img_small_post_3} />
                                            <div className="blog-image-background"></div>
                                            <span className="blog-date">03 march, 2022</span>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit dolor sit amet consectetur ...</p>
                                            <button>Read</button>
                                        </div>
                                    </div>
                                    <div className="col-6 col-md-3 col-xl-6">
                                        <div className="small-blog-post">
                                            <img src={img_small_post_4} />
                                            <div className="blog-image-background"></div>
                                            <span className="blog-date">03 march, 2022</span>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit dolor sit amet consectetur ...</p>
                                            <button>Read</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}