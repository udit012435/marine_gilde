import React from "react";
// import { Link } from 'react-router-dom';
import shipImage from "./assets/ship33.gif"
// import img2 from "./assets/man.jpg"
// import './App.css'
import members from "./assets/icon_S.jpeg"
// import members1 from "./assets/icon_S2.jpeg"
// import members2 from "./assets/icon_S3.jpeg"
import partners from "./assets/apple.png"
// import partners1 from "./assets/microsoft.png"



export const Home = () => {
    return (
        <>
            <div className="card bg-dark text-white" style={{ position: 'relative', borderRadius: '0px' }} id="home">
                {/* Card Image */}
                <img src={shipImage} className="card-img" alt="Abstract" style={{paddingTop:'60px', height: '450px', objectFit: 'cover' }} />

                {/* Card Overlay */}
                <div className="card-img-overlay m-5" style={{ padding: '20px' }}>
                    {/* <h5 className="card-title " style={{ marginLeft: '150px' }}>
                        Marine Glide
                    </h5>
                    <p className="card-text">This is additional content. This content is a little bit longer.</p>
                    <p className="card-text">Last updated 3 mins ago</p> */}
                    <div id="carouselExample" className="carousel slide">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                            <h5 className="card-title  " style={{ marginLeft: '150px' }}>
                        Marine Glide
                    </h5>
                    <p className="card-text" style={{ marginLeft: '150px' }}>This is additional content. This content is a little bit longer.</p>
                    <p className="card-text" style={{ marginLeft: '150px' }}>Last updated 3 mins ago</p>
                            </div>
                            <div className="carousel-item">
                            <h5 className="card-title " style={{ marginLeft: '150px' }}>
                        Marine Glide
                    </h5>
                    <p className="card-text" style={{ marginLeft: '150px' }}>This is additional content. This content is a little bit longer.</p>
                    <p className="card-text"style={{ marginLeft: '150px' }}>Last updated 3 mins ago</p>
                            </div>
                            <div className="carousel-item">
                            <h5 className="card-title " style={{ marginLeft: '150px' }}>
                        Marine Glide
                    </h5>
                    <p className="card-text"style={{ marginLeft: '150px' }}>This is additional content. This content is a little bit longer.</p>
                    <p className="card-text"style={{ marginLeft: '150px' }}>Last updated 3 mins ago</p>
                            </div>
                        </div>
                        <button className="carousel-control-prev " type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
            <div className="text-center" style={{ marginTop: '50px' }}>
                <h4 className="fw-bold">MEMBERS & PARTNERS.</h4>
            </div>
            <div className="row mt-5">
                <div className="col-md-3">
                    <img className="img-fluid " src={members} alt="" style={{ height: '90px', marginTop: '50px', marginLeft: '90px', borderRadius: '40px' }} />
                </div>
                <div className="col-md-3">
                    <img className="img-fluid " src={members} alt="" style={{ height: '90px', marginTop: '50px', marginLeft: '30px', borderRadius: '40px' }} />
                </div>
                <div className="col-md-3">
                    <img className="img-fluid " src={members} alt="" style={{ height: '90px', marginTop: '50px', marginLeft: '30px', borderRadius: '40px' }} />
                </div>
                <div className="col-md-3">
                    <img className="img-fluid " src={members} alt="" style={{ height: '90px', marginTop: '50px', marginLeft: '30px', borderRadius: '40px' }} />
                </div>
            </div>

            <div id="about" className="container mb-3" style={{ marginTop: '90px' }}>
                <h4 className="text-center mb-5 fw-bold">OUR TECHNOLOGY STACK & OFFERING</h4>
                <div className="row">
                    <div className="col-md-4">
                        <div id="cardteam" className="card shadow" style={{ width: '18rem' }}>
                            <div className="card-body">
                                <h5 className="card-title fw-bold mt-3 ">Backend Engineering</h5>
                                <p className="card-text mt-5">
                                    We use a plethora of programming languages, like JVM, .NET, NodeJS, Python for building Micro Services based scalable back-end platforms.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div id="cardteam" className="card shadow" style={{ width: '18rem' }}>
                            <div className="card-body">
                                <h5 className="card-title fw-bold mt-3">Frontend Engineering</h5>
                                <p className="card-text mt-5">
                                    We are extremely adept at implementing wide array of JS frameworks. i.e AngularJS, React Native ,ReactJS etc.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div id="cardteam" className="card shadow" style={{ width: '18rem' }}>
                            <div className="card-body">
                                <h5 className="card-title fw-bold mt-3">Mobile & Smart TVs</h5>
                                <p className="card-text mt-5">
                                    Experts in developing experiential app using native &  for mobile using Kotlin, JS, Swift, Roku, ReNative, Flutter etc.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col-md-4">
                        <div id="cardteam" className="card shadow" style={{ width: '18rem' }}>
                            <div className="card-body">
                                <h5 className="card-title fw-bold mt-3 ">Databases</h5>
                                <p className="card-text mt-5">
                                    We use a plethora of programming languages, like JVM, .NET, NodeJS, Python for building Micro Services based scalable back-end platforms.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div id="cardteam" className="card shadow" style={{ width: '18rem' }}>
                            <div className="card-body">
                                <h5 className="card-title fw-bold mt-3">Frameworks</h5>
                                <p className="card-text mt-5">
                                    We are extremely adept at implementing wide array of JS frameworks. i.e AngularJS, React Native ,ReactJS etc.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div id="cardteam" className="card shadow" style={{ width: '18rem', backgroundImage: '' }}>
                            <div className="card-body">
                                <h5 className="card-title fw-bold mt-3">Cloud & DevOps</h5>
                                <p className="card-text mt-5">
                                    Experts in developing experiential app using native & hybrid for mobile using Kotlin, JS, Swift, Roku, ReNative, Flutter etc.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-center mt-5">
                <h4 className="fw-bold mb-5">OUR CIENTS</h4>
                <div className="row mb-3 ">
                    <div className="col-md-3"><img className="img-fluid" src={partners} alt="" style={{ height: '80px', width: '80px', borderRadius: '30px' }} /></div>
                    <div className="col-md-3"><img className="img-fluid" src={partners} alt="" style={{ height: '80px', width: '80px', borderRadius: '30px' }} /></div>
                    <div className="col-md-3"><img className="img-fluid" src={partners} alt="" style={{ height: '80px', width: '80px', borderRadius: '30px' }} /></div>
                    <div className="col-md-3"><img className="img-fluid" src={partners} alt="" style={{ height: '80px', width: '80px', borderRadius: '30px' }} /></div>
                </div>
                <div className="row mb-3 mt-5">
                    <div className="col-md-3"><img className="img-fluid" src={partners} alt="" style={{ height: '80px', width: '80px', borderRadius: '30px' }} /></div>
                    <div className="col-md-3"><img className="img-fluid" src={partners} alt="" style={{ height: '80px', width: '80px', borderRadius: '30px' }} /></div>
                    <div className="col-md-3"><img className="img-fluid" src={partners} alt="" style={{ height: '80px', width: '80px', borderRadius: '30px' }} /></div>
                    <div className="col-md-3"><img className="img-fluid" src={partners} alt="" style={{ height: '80px', width: '80px', borderRadius: '30px' }} /></div>
                </div>
                <button className="btn btn-danger mt-5 mb-5">See more...</button>
            </div>

        </>
    );
};
