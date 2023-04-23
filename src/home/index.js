import React from "react";
import { useNavigate } from "react-router-dom";
import './cover.css';


export default function HomePage() {

    const navigate = useNavigate();
    const googleLogin = (e) => {
        e.preventDefault()
        navigate("/login");
    }

    return (
        <>
            <div class="text-center customCover ">

                <div class="blur cover-container d-flex h-100 p-3 mx-auto flex-column">
                    <main role="main" class="inner cover">
                        <h1 class="cover-heading">More Devotees! Happy Devotees!</h1>
                        <p class="lead">"If you maintain the association of devotees, your life will be happy and perfect."</p>
                        <small>- Srila Prabhupada, Letter to Tribhuvantha , Los Angeles, July 18 1970</small><br/>
                        <p class="lead">
                            <a href="#" onClick={googleLogin} class="btn btn-lg btn-secondary">Join Family</a>
                        </p>
                    </main>
                    
                </div>
            </div>
        </>
    )
}


