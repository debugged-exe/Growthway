import React from 'react';
import './Footer.scss';
import * as AiIcons from 'react-icons/ai';
import * as FaIcons from 'react-icons/fa';
import {ImTumblr2} from 'react-icons/im';
import {GrLinkedin} from 'react-icons/gr';
import { HashLink as Link } from 'react-router-hash-link';
const Footer = () => {
    return (
        <section className={'footer-section'}>
            <footer className={'footer-container pt4-l pb4-l pb2-m pb2 ph4-l pv4-m ph4-m'}>
                <div className={'footer-responsive-grid'}>
                    <div className={'footer-col-1 pl0-ns pl4'}>
                        <h1>Growthway</h1>
                        <p style={{lineHeight: "1.5"}}>
                        Pioneered in 2020, GrowthWay Investments is a budding firm to assist our clients with all the investments and finances, in order to achieve a balance of their best interests.
                        </p>
                    </div>
                    <div className={'footer-col-2'}>
                        <div className={'justify-center items-center pt3 pl5-l '}>
                            <p className={'pl4 b'}>Quick Links</p>
                            <ul className={''} style={{listStyle: "none", lineHeight: "2", }}>
                                <li><Link to="/about/#about"className={'footer-about-list-item-link-2 pb2'}>About</Link></li>
                                <li><Link to="/services/#service" className={'footer-about-list-item-link-2 pb2'}>Services</Link></li>
                                <li><Link to="/surveyform/#survey" className={'footer-about-list-item-link-3 pb2'}>Survey Form</Link></li>
                                <li><Link to="/workwithus/#work" className={'footer-about-list-item-link-4 pb2'}>Career</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className={'footer-col-3 pt3 pr5 pl0-ns pl4'}>
                        <p className={'b'}>Contact</p>
                        <div style={{lineHeight: "2"}}>
                            <p>#261, Growthway Investments Gurudwara Road Dharmashala - (H.P.) 176215<br/><br/>
                                <a href="mailto:growthwayinvestments@gmail.com" className={'footer-contact-email pb1'}>growthwayinvestments@gmail.com</a>
                                <br/>
                                <a href="tel:01892796821" className={'footer-contact-phone pb1'}>01-892796821</a>
                            </p>
                        </div>
                        <div>
                            <a href="https://www.facebook.com/growthwayinvestments/"><AiIcons.AiFillFacebook className={'pointer pa2 grow-large hover-social-icons'} size={'1.8rem'}/></a>
                            <a href="https://twitter.com/GrowthwayI?s=09"><AiIcons.AiOutlineTwitter className={'pointer pa2 grow-large hover-social-icons'} size={'1.8rem'}/></a>
                            <a href="http://growthwayinvestments.tumblr.com"><ImTumblr2 className={'pointer pa2 grow-large hover-social-icons'} size={'1.8rem'}/></a>
                            <a href="https://instagram.com/growthwayinvestments?utm_medium=copy_link"><AiIcons.AiOutlineInstagram className={'pointer pa2 grow-large hover-social-icons'} size={'1.8rem'}/></a>
                            <a href="https://www.linkedin.com/company/growthwayinvestments"><GrLinkedin className={'pointer pa2 grow-large hover-social-icons'} size={'1.8rem'}/></a>
                        </div>
                    </div>
                    <div className={'footer-col-4 pt3 pl4-m pl0-ns pl4 pr0-ns pr4'}>
                        <p className={'b'}>Instagram</p>
                        <div className={'footer-instagram-row'}>
                            <div className={'ma1'}>
                                <img src="https://images.unsplash.com/photo-1586348943529-beaae6c28db9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bmF0dXJlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" style={{object: "fit cover", width: "85px", height: "80px"}} alt={'not available img1'}/>
                            </div>
                            <div className={'ma1'}>
                                <img src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bmF0dXJlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" style={{object: "fit cover", width: "85px", height: "80px"}} alt={'not available img2'}/>
                            </div>
                            <div className={'ma1'}>
                                <img src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bmF0dXJlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" style={{object: "fit cover", width: "85px", height: "80px"}} alt={'not available img3'}/>
                            </div>
                            <div className={'ma1'}>
                                <img src="https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8bmF0dXJlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" style={{object: "fit cover", width: "85px", height: "80px"}} alt={'not available img4'}/>
                            </div>
                            <div className={'ma1'}>
                                <img src="https://images.unsplash.com/photo-1552083375-1447ce886485?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fG5hdHVyZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" style={{object: "fit cover", width: "85px", height: "80px"}} alt={'not available img5'}/>
                            </div>
                            <div className={'ma1'}>
                                <img src="https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fG5hdHVyZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" style={{object: "fit cover", width: "85px", height: "80px"}} alt={'not available img6'}/>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <footer className={'footer-links-bottom ph6-l ph4-m pb3'}>
                <div className={'footer-links-bottom-link-container flex w-50-l w-100-m w-100 pt0-ns pt2 pb0-ns pb2'}>
                    <Link to="/blog/#blog" className={'footer-links-bottom-link-container-link-item-1 pb2 pr3'}> Our Blogs</Link>
                    <Link to="/" className={'footer-links-bottom-link-container-link-item-2 pb2 pr3'}> Home</Link>
                    <Link to="/services/#service"className={'footer-links-bottom-link-container-link-item-3 pb2 pr3'} > Growmax 365</Link>
                </div>
                <div className={'tr-l tc'}>
                    @2020 GrowthWay Investments. <span className={'hover-social-icons'}>All Rights Reserved</span>
                </div>
            </footer>
            <footer className={'flex justify-center items-center pt2-ns pt1 pb2-ns pb1 bg-black white'}>
                <a href="https://debuggedexe.com/" rel="noreferrer" target="_blank">?? DEVELOPED BY <span className="b"> DEBUGGED.EXE</span></a>
            </footer>
        </section>
    );
}

export default Footer;
