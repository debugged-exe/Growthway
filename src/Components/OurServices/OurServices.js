import React from 'react';
import './OurServices.scss';
import Wallet from "./wallet.svg";
import {RiFundsFill} from "react-icons/ri";
import {GiTakeMyMoney} from "react-icons/gi";
import {BiBuildingHouse} from "react-icons/bi";
import {SiBitcoin} from "react-icons/si";

const OurServices = () => {
    return (
        <section className={"section-div"}>
            <div className={"image-container pa5"}>
                <img
                    src={Wallet}
                    alt={"not available"}
                    style={{object: "fit cover", width: "100%", height: "100%"}}
                />
            </div>
            <div className={"data-container"}>
                <h1 className={"data-container-heading"}>
                   We at Growthway provide following four main services.
                </h1>
                <div className={"data-box-container"}>
                    <div className={"data-row-1"}>
                        <div className={"data-row-1-col-1"}>
                            <div className={'flex justify-between items-center'}>
                                <GiTakeMyMoney size={"3rem"}/>
                                <h2 className={'pl1'}>
                                    Financial and Fund investment services
                                </h2>
                            </div>
                            <div className={'pa'}>
                                <p style={{paddingLeft: "1.5rem"}}>Financial and Fund services cover two broad categories: General Insurance (automotive, home, medical, fire, travel, etc.) and Life Insurance (term-life, money-back, unit-linked, pension plans, etc.)
                                </p>
                            </div>

                        </div>
                        <div className={"data-row-1-col-2"}>
                            <div className={'flex justify-between items-center'}>
                                <RiFundsFill size={"3rem"}/>
                                <h2 className={'pl1'}>
                                    Investment advisory and management services
                                </h2>
                            </div>
                            <div className={'pa'}>
                                <p style={{paddingLeft: "1.5rem"}}>Investment advisory and management provides a holistic solution in aspects of wealth management, budgeting, savings etc.
                                </p>
                            </div>
                        </div>
                        <div className={"data-row-2-col-1"}>
                            <div className={'flex justify-between items-center'}>
                                <SiBitcoin size={"3rem"}/>
                                <h2>
                                    Cryptocurrency investment and exchange services
                                </h2>
                            </div>
                            <div className={'pa'}>
                                <p style={{paddingLeft: "1.5rem"}}>Cryptocurrencies are decentralized networks based on blockchain technology. It presents major strides in economic growth and freedom under economic sanctions.
                                </p>
                            </div>
                        </div>
                        <div className={"data-row-2-col-2"}>
                            <div className={'flex justify-between items-center'}>
                                <BiBuildingHouse size={"3rem"}/>
                                <h2>
                                    Real estate agency and investment services
                                </h2>
                            </div>
                            <div className={'pa'}>
                                <p style={{paddingLeft: "1.5rem"}}>Investment in real estate is one of the hot topic in India. This industry is the second biggest employer after agriculture. It involves four sub-areas- housing, commercial, retail and hospitality.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default OurServices;
