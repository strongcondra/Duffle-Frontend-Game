import { useEffect, useState } from "react";

import Background from '../components/Background';
import Header from '../components/Header';
import Navigation from '../components/Navigation';

import WithdrawItem from '../components/Item';

import './css/Withdraw.scss';

export default function Withdraw() {
    return (
        <div>
            <Background />
            <Header title="Withdraw" />
            <Navigation />
            
            <main className="withdraw-page-main">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 col-md-2 left-side-container">
                            <div className="bottom-menu">
                                <div className="selected-items">
                                    <div className="selected-item">1x Alien Red - 200.00$</div>
                                    <div className="selected-item">1x Alien Red - 200.00$</div>
                                    <div className="selected-item">1x Alien Red - 200.00$</div>
                                    <div className="selected-item">1x Alien Red - 200.00$</div>
                                    <div className="selected-item">1x Alien Red - 200.00$</div>
                                    {/**
                                     * TODO:
                                     * Add scrollbar to selected items
                                     */}
                                </div>
                                <div className="withdraw-button">
                                    <a href="#">WITHDRAW</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-10 col-xxl-8 right-side-container">
                            <div className="items-container">
                                <WithdrawItem></WithdrawItem>
                                <WithdrawItem></WithdrawItem>
                                <WithdrawItem></WithdrawItem>
                                <WithdrawItem></WithdrawItem>
                                <WithdrawItem></WithdrawItem>
                                <WithdrawItem></WithdrawItem>
                                <WithdrawItem></WithdrawItem>
                                <WithdrawItem></WithdrawItem>
                                <WithdrawItem></WithdrawItem>
                                <WithdrawItem></WithdrawItem>
                                <WithdrawItem></WithdrawItem>
                                <WithdrawItem></WithdrawItem>
                                <WithdrawItem></WithdrawItem>
                                <WithdrawItem></WithdrawItem>
                                <WithdrawItem></WithdrawItem>
                                <WithdrawItem></WithdrawItem>
                                <WithdrawItem></WithdrawItem>
                            </div>
                        </div>
                        <div className="col-12 col-xxl-2"></div>
                    </div>
                </div>
            </main>
        </div>
    );
}