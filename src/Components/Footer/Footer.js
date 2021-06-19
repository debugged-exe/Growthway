import React from 'react';
import './Footer.scss';
import * as AiIcons from 'react-icons/ai';
import * as FaIcons from 'react-icons/fa';
import photo1 from './photo1.jpg';
import photo2 from './photo2.jpg';
import photo3 from './photo3.jpg';
import photo4 from './photo4.jpg';
import photo5 from './photo5.jpg';
import photo6 from './photo6.jpg';
import {Link} from 'react-router-dom';
const Footer = () => {
    return (
        <section className={'footer-section'}>
            <footer className={'footer-container pt4-l pb4-l pb2-m pb2 ph6-l pv4-m ph4-m'}>
                <div className={'footer-responsive-grid'}>
                    <div className={'footer-col-1 pl0-ns pl4'}>
                        <h1>Growthway</h1>
                        <p style={{lineHeight: "1.5"}}>
                        Pioneered in 2020, GrowthWay Investments is a budding firm to assist our clients with all the investments and finances, in order to achieve a balance of their best interests.
                        </p>
                    </div>
                    <div className={'footer-col-2'}>
                        <div className={'justify-center items-center pt3 pl5-l '}>
                            <p className={'pl4 b'}>About us</p>
                            <ul className={''} style={{listStyle: "none", lineHeight: "2", }}>
                                <li><Link className={'footer-about-list-item-link-1 pb2'}>About</Link></li>
                                <li><Link className={'footer-about-list-item-link-2 pb2'}>Team</Link></li>
                                <li><Link className={'footer-about-list-item-link-3 pb2'}>Services</Link></li>
                                <li><Link className={'footer-about-list-item-link-4 pb2'}>Career</Link></li>
                                <li><Link className={'footer-about-list-item-link-5 pb2'}>Contact</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className={'footer-col-3 pt3 pr5 pl0-ns pl4'}>
                        <p className={'b'}>Contact</p>
                        <div style={{lineHeight: "2"}}>
                            <p>2005 Stokes Isle Apt. 896,
                                Venaville 10010, USA<br/>
                                <Link className={'footer-contact-email pb1'}>11111@gmail.com</Link>
                                <br/>
                                <Link className={'footer-contact-phone pb1'}>9990009990</Link>
                            </p>
                        </div>
                        <div>
                            <AiIcons.AiFillFacebook className={'pa2 grow-large hover-dark-blue'} size={'1.8rem'}/>
                            <AiIcons.AiOutlineTwitter className={'pa2 grow-large hover-dark-blue'} size={'1.8rem'}/>
                            <AiIcons.AiOutlineInstagram className={'pa2 grow-large hover-dark-blue'} size={'1.8rem'}/>
                            <AiIcons.AiOutlineDribbble className={'pa2 grow-large hover-dark-blue'} size={'1.8rem'}/>
                            <FaIcons.FaPinterest className={'pa2 grow-large hover-dark-blue'} size={'1.8rem'}/>
                        </div>
                    </div>
                    <div className={'footer-col-4 pt3 pl4-m pl0-ns pl4 pr0-ns pr4'}>
                        <p className={'b'}>Instagram</p>
                        <div className={'footer-instagram-row'}>
                            <div className={'ma1'}>
                                <img src={photo1} style={{object: "fit cover", width: "100%", height: "100%"}} alt={'not available img1'}/>
                            </div>
                            <div className={'ma1'}>
                                <img src={photo2} style={{object: "fit cover", width: "100%", height: "100%"}} alt={'not available img2'}/>
                            </div>
                            <div className={'ma1'}>
                                <img src={photo3} style={{object: "fit cover", width: "100%", height: "100%"}} alt={'not available img3'}/>
                            </div>
                            <div className={'ma1'}>
                                <img src={photo4} style={{object: "fit cover", width: "100%", height: "100%"}} alt={'not available img4'}/>
                            </div>
                            <div className={'ma1'}>
                                <img src={photo5} style={{object: "fit cover", width: "100%", height: "100%"}} alt={'not available img5'}/>
                            </div>
                            <div className={'ma1'}>
                                <img src={photo6} style={{object: "fit cover", width: "100%", height: "100%"}} alt={'not available img6'}/>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <footer className={'footer-links-bottom ph6-l ph4-m pb3'}>
                <div className={'footer-links-bottom-link-container flex w-50-l w-100-m w-100 pt0-ns pt2 pb0-ns pb2'}>
                    <Link className={'footer-links-bottom-link-container-link-item-1 pb2'}>Our Blogs</Link>
                    <Link className={'footer-links-bottom-link-container-link-item-2 pb2'}>Latest Page</Link>
                    <Link className={'footer-links-bottom-link-container-link-item-3 pb2'}>Contact Us</Link>
                </div>
                <div className={'tr-l tc'}>
                    @2020 GrowthWay Investments. <span className={'hover-dark-blue'}>All Rights Reserved</span>
                </div>
            </footer>
            <footer className={'flex justify-center items-center pt2-ns pt1 pb2-ns pb1 bg-black white'}>
                © DEVELOPED BY DEBUGGED.EXE
            </footer>
        </section>
    );
}

export default Footer;
