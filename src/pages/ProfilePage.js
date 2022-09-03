import React from 'react';
import './profile.css';
import ava from './img/avatar/ava.png';
import bannerbrand from './img/works/bannerbrand.png';
import bannerdnk from './img/works/bannerdnk.png';
import {Link} from "react-router-dom";

const ProfilePage = () => {
    return (
        <div>
            <div className='navpartheader'>
                <Link className='navpartheadera' to={'/'}>Home</Link>
                <Link className='navpartheadera' to={'/chats'}>Chats</Link>
                <Link className='navpartheadera' to={'/profile'}>Profile</Link>
            </div>
            <div className="newcontainer">
                <div className="info">
                    <div className="banner">
                        <div className="leftpartbanner">
                            <img className="bannerimg" src={ava} alt="avatar" width="90px" height="90px" />
                        </div>
                        <div className="rightpartbanner">
                            <a href="#" className="bannernickname">Ivan Minajev</a>
                            <p className="bannerabout">Web Developer from Latvia (Designer / Developer)</p>
                        </div>
                    </div>
                </div>
                <div className="about">
                    <div className="option">
                        <p className="optionname">About</p>
                        <div className="underline underlineabout" />
                    </div>
                    <p className="aboutmetext aboutmetext_first">My name is Ivan Minajev. I am a freelancer, web developer and web
                        designer from Riga,
                        Latvia. My list of features includes: working with CMS (WordPress, Tilda), working with graphic editors
                        (Adobe Photoshop, Figma), front-end development. I am the co-founder of LINK, a web design service
                        company.
                        I'm also currently studying online university programme "Full-stack JavaScript".</p>
                    <div className="centerbutton">
                        <a href="#" className="aboutbutton">My portfolio &gt;</a>
                    </div>
                </div>
                <div className="bio">
                    <div className="option">
                        <p className="optionname">Biography</p>
                        <div className="underline underlinebio" />
                    </div>
                    <div className="listbio">
                        <table>
                            <tbody><tr>
                                <th className="year">2004</th>
                                <th className="describtion">Born in Riga, Latvia.</th>
                            </tr>
                            <tr>
                                <th className="year">2020 to 2022</th>
                                <th className="describtion">Completed basic course at Progmeistars.
                                    <a id="additionalbutton" onclick="openAdditional()"><i className="fa-solid fa-caret-left" /></a>
                                    <div id="additionaldescribtion" style={{display: 'none'}}>
                                        <br />Introduction:
                                        File managers. Text editor.
                                        <br /> Go-1: Program structure in Go. Basic control structures and data types.
                                        Functions. Modules (packages). Community (Go).
                                        <br />Go-2: Binary block: logic, integer types, sets. Internal representation of integer
                                        and
                                        ordinal types, arrays, structures.
                                        <br />Go-3: Text-based data interchange formats. Binary files.
                                        <br />Applications-1: Database operation. Introduction to SQL.
                                        <br />Programming technology: Standard programming situations. Programming style. Testing.
                                        <br />Operating system.
                                        <br />Go-4: Windows: command line and bat files; utilities; file system - system tables.
                                        Unit DOS.
                                        Working with the command line, with the file system.
                                        <br />Go-5: Go subprogrammes (goroutines) and channels.
                                        <br />Go-6: Graphics programming in Go.
                                        <br />Elements of Analytic and Computational Geometry.
                                        <br />Computational techniques: Real types. Computational error. One-dimensional numerical
                                        algorithms.
                                        <br />Go-6: Pointers (addresses). Parameter passing mechanisms. Internal representation of
                                        vector types in Go.
                                        <br />Go-7: Typed pointers, linear data structures. Packages.
                                        <br />Construction of algorithms: Recursion. More complex data structures: binary heap,
                                        search tree.
                                        <br />Go-8: Interfaces. Polymorphism - how to do it in Go.
                                        <br />Algorithm construction-2: Data structures that support sorting: search tree with
                                        variants, balanced structures - AVL tree, skip-list.
                                        <br />Go-9: Error and contingency handling in Go. Documenting. Module testing.
                                    </div>
                                </th>
                            </tr>
                            <tr>
                                <th className="year">2021</th>
                                <th className="describtion">Completed a two-month site-building course at Herman Nikiforov's
                                    Internet Marketing School.
                                    <br /><br />Co-founded LINK.
                                </th>
                            </tr>
                            <tr>
                                <th className="year">2021 to 2023</th>
                                <th className="describtion">Completed GeekBrains Online University programme Full Stack JavaScript.
                                    <a id="additionalbutton_2" onclick="openAdditional2()"><i className="fa-solid fa-caret-left" /></a>
                                    <div id="additionaldescribtion_2" style={{display: 'none'}}>
                                        <br />
                                        I semester:
                                        <br />Git. Basic Course: Git Bush, Git Kraken, GitHub
                                        <br />Basic layout: HTML/CSS
                                        <br />Professional layout: Bootstrap, Grid layout
                                        <br />Basic JavaScript course: JavaScript
                                        <br />Advanced JavaScript course: Vue.js, Node.js
                                        <br />React: React.js
                                        <br />
                                        <br />
                                        II semester:
                                        <br />Linux. Workstation
                                        <br />Node.js
                                        <br />Tools for building Web projects
                                        <br />Databases. Fundamentals
                                        <br />HTTP network protocol
                                        <br />
                                        <br />
                                        III semester:
                                        <br />TypeScript
                                        <br />Website development using Nest.js
                                        <br />Developing highly loaded back-end applications
                                        <br />
                                        <br />
                                        IV semester:
                                        <br />Agile, Scrum. Theory
                                        <br />Team development using Agile methodology: SCRUM
                                        <br />Preparing for an interview
                                    </div>
                                </th>
                            </tr>
                            <tr>
                                <th className="year">Since 2022</th>
                                <th className="describtion">Working as a freelancer.</th>
                            </tr>
                            </tbody></table>
                    </div>
                </div>
                <div className="hobby">
                    <div className="option">
                        <p className="optionname">Hobby</p>
                        <div className="underline underlinehobby" />
                    </div>
                    <p className="aboutmetext aboutmetext_second">Music and Composing <i id="hobbyrune_1" className="fa-solid fa-music" /> &nbsp; Games <i id="hobbyrune_2" className="fa-solid fa-gamepad" />
                        &nbsp; Gym <i id="hobbyrune_3" className="fa-solid fa-dumbbell" /> &nbsp; Video creating <i id="hobbyrune_4" className="fa-solid fa-clapperboard" /> Films/Series <i id="hobbyrune_5" className="fa-solid fa-film" /> &nbsp; Harry Potter <i id="hobbyrune_6" className="fa-solid fa-broom-ball" /></p>
                </div>
                <div className="web">
                    <div className="option">
                        <p className="optionname">Web</p>
                        <div className="underline underlineweb" />
                    </div>
                    <div className="weblinks">
                        <a className="weblink weblink_first" href="#"><i className="fab fa-instagram" /> <span className="forunderline">@xintrosent</span></a>
                        <a className="weblink weblink_second" href="#"><i className="fab fa-github" /> <span className="forunderline">@introsent</span></a>
                        <a className="weblink weblink_third" href="#"><i className="fab fa-youtube" /> <span className="forunderline">@Introsent</span></a>
                    </div>
                    <div className="popularworksweb">
                        <div className="populatrworkleftpart">
                            <a className="linkpopworksweb" href="http://www.dnk.webtm.ru/">
                                <div className="imgcontainer">
                                    <img className="imgpopworksweb" src={bannerdnk} alt="bannerdnk" width="230px" />
                                    <div className="powpopworksweb powpopworksweb_1">Powered by LINK</div>
                                </div>
                                <p className="hpopworksweb">DNK</p>
                                <p className="descpopworksweb">A Clothes E-shop based on WordPress</p>
                            </a>
                        </div>
                        <div className="populatrworkrightpart">
                            <a className="linkpopworksweb" href="https://brandeshop.000webhostapp.com/">
                                <div className="imgcontainer">
                                    <img className="imgpopworksweb" src={bannerbrand} alt="bannerbrand" width="230px" />
                                    <div className="powpopworksweb powpopworksweb_2"> © Ivan Minajev</div>
                                </div>
                                <p className="hpopworksweb">Brand</p>
                                <p className="descpopworksweb">A Clothes E-shop based on HTML/CSS</p>
                            </a>
                        </div>
                    </div>
                    <div className="webbutton">
                        <a href="#" className="aboutbutton button_webbutton">Other works &gt;</a>
                    </div>
                </div>
                <div className="footer">
                    <p className="footertext"> © 2022 Ivan Minajev. All Rights Reserved.</p>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;