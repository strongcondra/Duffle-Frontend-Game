import { useState, useEffect } from 'react';
import './css/Referral.scss';

//Component Imports
import Background from '../components/Background';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import Table from '../components/Table';

export default function Profile() {

    const [referralThead, setReferralThead] = useState(["Username", "Date/Time", "Total Deposited", "Payout"]);

    //These datas will be received from backend (probably) so I'm using useState hook
    //I would put placeholders temporary but this will make everything much easier especially while integrating backend with frontend
    const [referralTableDatas, setReferralTableDatas] = useState([]);

    useEffect(() => {
        setReferralTableDatas([
            ["Anunnaki", "14/09/2021", "$100.00", "$5.00"],
            ["Anunnaki", "14/09/2021", "$100.00", "$5.00"],
            ["Anunnaki", "14/09/2021", "$100.00", "$5.00"],
            ["Anunnaki", "14/09/2021", "$100.00", "$5.00"],
            ["Anunnaki", "14/09/2021", "$100.00", "$5.00"],
            ["Anunnaki", "14/09/2021", "$100.00", "$5.00"],
            ["Anunnaki", "14/09/2021", "$100.00", "$5.00"],
            ["Anunnaki", "14/09/2021", "$100.00", "$5.00"],
            ["Anunnaki", "14/09/2021", "$100.00", "$5.00"],
            ["Anunnaki", "14/09/2021", "$100.00", "$5.00"],
            ["Anunnaki", "14/09/2021", "$100.00", "$5.00"],
        ]);
    }, []);

    return (
        <div>
            <Background />
            <Header title="Referral" />
            <Navigation />
            
            <main className="referral-page-main">
                <div className="container-fluid d-flex justify-content-center max-width-1920">
                    <div className="row align-self-center justify-content-center">
                        <div className="col-xxl-2"></div>
                        <div className="col-12 col-xxl-8 referral-column">
                            <div className="referral-header">
                                <p>CODE: <span>Anu</span></p>
                                <p>TOTAL REFFERALS: <span>144</span></p>
                                <p>TOTAL COMMISION: <span>0.44 	&#40;5%	&#41;</span></p>
                            </div>
                            <div className="referral-table">
                                <Table 
                                    theadArray = {referralThead}
                                    dataArray = {referralTableDatas}
                                />
                            </div>
                        </div>
                        <div className="col-xxl-2"></div>
                    </div>
                </div>
            </main>
        </div>
    );
}
