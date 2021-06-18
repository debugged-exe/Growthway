import React from 'react';
import './OurServices.scss';
import Wallet from "./wallet.svg";
import * as BsIcons from "react-icons/bs";

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
                    Section 1.10.33 of "de Finibus Bonorum et Malorum", written by
                    Cicero in 45 BC
                </h1>
                <div className={"data-box-container"}>
                    <div className={"data-row-1"}>
                        <div className={"data-row-1-col-1"}>
                            <div className={'flex justify-between items-center'}>
                                <BsIcons.BsFillAwardFill size={"3rem"}/>
                                <h2 className={'pl1'}>
                                    1914 translation by H. Rackham
                                </h2>
                            </div>
                            <div className={'pa'}>
                                <p style={{paddingLeft: "1.5rem"}}>Lorem Ipsum is simply dummy text of the printing and typesetting
                                    industry. Lorem Ipsum has been the industry's standard dummy
                                    text ever since the 1500s, when an unknown printer took a galley
                                    of type and scrambled it to make a type specimen book.
                                </p>
                            </div>

                        </div>
                        <div className={"data-row-1-col-2"}>
                            <div className={'flex justify-between items-center'}>
                                <BsIcons.BsFillAwardFill size={"3rem"}/>
                                <h2 className={'pl1'}>
                                    1914 translation by H. Rackham
                                </h2>
                            </div>
                            <div className={'pa'}>
                                <p style={{paddingLeft: "1.5rem"}}>Lorem Ipsum is simply dummy text of the printing and typesetting
                                    industry. Lorem Ipsum has been the industry's standard dummy
                                    text ever since the 1500s, when an unknown printer took a galley
                                    of type and scrambled it to make a type specimen book.
                                </p>
                            </div>
                        </div>
                        <div className={"data-row-2-col-1"}>
                            <div className={'flex justify-between items-center'}>
                                <BsIcons.BsFillAwardFill size={"3rem"}/>
                                <h2>
                                    1914 translation by H. Rackham
                                </h2>
                            </div>
                            <div className={'pa'}>
                                <p style={{paddingLeft: "1.5rem"}}>Lorem Ipsum is simply dummy text of the printing and typesetting
                                    industry. Lorem Ipsum has been the industry's standard dummy
                                    text ever since the 1500s, when an unknown printer took a galley
                                    of type and scrambled it to make a type specimen book.
                                </p>
                            </div>
                        </div>
                        <div className={"data-row-2-col-2"}>
                            <div className={'flex justify-between items-center'}>
                                <BsIcons.BsFillAwardFill size={"3rem"}/>
                                <h2>
                                    1914 translation by H. Rackham
                                </h2>
                            </div>
                            <div className={'pa'}>
                                <p style={{paddingLeft: "1.5rem"}}>Lorem Ipsum is simply dummy text of the printing and typesetting
                                    industry. Lorem Ipsum has been the industry's standard dummy
                                    text ever since the 1500s, when an unknown printer took a galley
                                    of type and scrambled it to make a type specimen book.
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
