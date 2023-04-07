import React from "react";
import { useNavigate } from "react-router-dom";
import './homeindex.css';


export default function HomePage() {

    const navigate = useNavigate();
    const googleLogin = () => {
        navigate("/login");
    }

    return (<div class="home">
        <div class="blur">


            {/* <h2>Blurred Background</h2>
            <h1 style={{ "font-size": "50px" }}>I am John Doe</h1>
            <p>And I'm a Photographer</p> */}
            {/* Home Page */}
            <div className="row pt-5">
                <div className="col col-lg-5 offset-lg-1 col-md-10 col-sm-10 col-xs-10 offset-xs-1 col-yt-player px-5">
                    <h2 style={{ color: '#ea580c' }}>Registration guide (Watch the video) - </h2>
                    <div className="ratio ratio-16x9">
                        <iframe className="embed-responsive-item border border-2 border-warning" src="https://www.youtube.com/embed/Xq_Pa9vccGw" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen>
                        </iframe>
                    </div>
                </div>
                <div className="col col-registration col-lg-5 offset-lg-0 col-md-10 col-sm-10 col-xs-10 px-4">
                    <div className="card text-center mx-10 h-100">
                        <div className="card-body register-card-body">
                            <h2>Welcome</h2>
                            <p>Centralized VOICE Database Center</p>
                            <button onClick={googleLogin} className="btn btn-success btn-register" type="button" style={{ width: "150px", fontSize: '1.2rem' }}>
                                Register
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>


    )
}


