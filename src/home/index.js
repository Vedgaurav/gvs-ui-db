import React from "react";
import { useNavigate } from "react-router-dom";
import './cover.css';


export default function HomePage() {

    const navigate = useNavigate();
    const googleLogin = (e) => {
        e.preventDefault()
        navigate("/login");
    }
    sessionStorage.setItem("userRole","")

    return (
        <>
            <div className="text-center customCover ">

                <div className="blur cover-container d-flex h-100 p-3 mx-auto flex-column">
                    <main role="main" className="inner cover">
                        <h1 className="cover-heading">More Devotees! Happy Devotees!</h1>
                        <p className="lead">"If you maintain the association of devotees, your life will be happy and perfect."</p>
                        <small>- Srila Prabhupada, Letter to Tribhuvantha , Los Angeles, July 18 1970</small><br/>
                        <p className="lead">
                            <a href="#" onClick={googleLogin} className="btn btn-lg btn-secondary">Join Family</a>
                        </p>
                    </main>
                    
                </div>
            </div>
        </>
    )
}


