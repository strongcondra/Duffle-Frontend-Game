import './css/404.scss';

//Component Imports
import Background from '../components/Background';
import Header from '../components/Header';
import Navigation from '../components/Navigation';

//Image imports
import img_logo from '../images/logo-with-text.svg';

export default function _404() {
  return (
    <div>
        <Background />
        <Header title=""/>
        <Navigation />

        <main className="yellow-polygon-background">
            <div className="row _404-container">
                <div>
                    <img src={img_logo} />
                </div>
                <div>
                    <h1>404</h1>
                    <h2>This page could not be found</h2>
                    <p>You can either stay and chill here, or go back to the beginning.</p>
                    <a href="/">BACK TO HOME</a>
                </div>
            </div>
        </main>
    </div>
  );
}
