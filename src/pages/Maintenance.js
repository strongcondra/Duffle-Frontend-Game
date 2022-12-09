import './css/Maintenance.scss';

//Component Imports
import Background from '../components/Background';
import Header from '../components/Header';
import Navigation from '../components/Navigation';

//Image imports
import img_logo from '../images/logo-with-text.svg';
import m1 from '../images/icons/maintenance-1.png';
import m2 from '../images/icons/maintenance-2.png';
import m3 from '../images/icons/maintenance-3.png';

export default function Maintenance() {
  return (
    <div>
        <Background />
        <Header title=""/>
        <Navigation />

        <main className="yellow-polygon-background">
            <div className="row other-container">
                <div>
                    <img className="main-image" src={img_logo} />
                    <div className="maintenance-images">
                        <div><img src={m1} /></div>
                        <div><img src={m2} /></div>
                        <div><img src={m3} /></div>
                    </div>
                    <h1 className="maintenance-title">Under Maintenance</h1>
                </div>
            </div>
        </main>
    </div>
  );
}
