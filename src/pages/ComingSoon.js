import './css/ComingSoon.scss';

//Component Imports
import Background from '../components/Background';
import Header from '../components/Header';
import Navigation from '../components/Navigation';

//Image imports
import img_logo from '../images/logo-with-text.svg';

export default function ComingSoon() {
  return (
    <div>
        <Background />
        <Header title=""/>
        <Navigation />

        <main className="yellow-polygon-background">
            <div className="row other-container">
                <div>
                    <img className="main-image" src={img_logo} />
                    <h1>Coming Soon</h1>
                    <p>Will come with performance in design</p>
                    <input type="text" placeholder="Notify Me" />
                </div>
            </div>
        </main>
    </div>
  );
}
