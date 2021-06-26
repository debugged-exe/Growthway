import React from 'react';
import './OurServices.scss';
import {GiReceiveMoney} from 'react-icons/gi';
import Wallet from "./wallet.svg";
import {RiFundsFill} from "react-icons/ri";
import {GiTakeMyMoney} from "react-icons/gi";
import {BiBuildingHouse} from "react-icons/bi";
import {SiBitcoin} from "react-icons/si";

const OurServices = () => {
    return (
        <section className={"section-div"} style={{lineHeight:"1.5"}}>
            <div className={"image-container pa5"}>
                <img
                    src={Wallet}
                    alt={"not available"}
                    style={{object: "fit cover", width: "100%", height: "100%"}}
                />
            </div>
            <div className={"data-container"}>
            <div className="flex flex-column">
                 <div style={{fontSize:'1.2rem'}}>
                  <p className="f3 b"><GiReceiveMoney color="#0069FF" size="1.8rem"/>Services provided</p>
                  <p data-aos="fade-up" data-aos-delay="100">•	Investment advisory, analysis and management</p>
                  <p data-aos="fade-up" data-aos-delay="300">•	Cryptocurrency investment and exchange</p>
                  <p data-aos="fade-up" data-aos-delay="300">•	Events (Educational, Sports and Social)</p>
                  <p data-aos="fade-up" data-aos-delay="300">•	Health Insurance</p>
                  <p data-aos="fade-up" data-aos-delay="300">•	Legal and tax advisory</p>
                  <p data-aos="fade-up" data-aos-delay="300">•	Professional training provider in stock market trading and investing</p>
                  <p data-aos="fade-up" data-aos-delay="200">•	Real estate - investing, decor</p>
                  <p data-aos="fade-up" data-aos-delay="500">•	Venture capital financing and investing</p>
                 </div>
            </div>
        </div>
      </section>
    );
}

export default OurServices;
