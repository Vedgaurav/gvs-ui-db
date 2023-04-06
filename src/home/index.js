import React from "react";
import { useNavigate } from "react-router-dom";


export default function HomePage() {

    const navigate = useNavigate();
    const googleLogin = () => {
        navigate("/login");
    }

    return (
        <>
            Home Page
            <div class="d-grid gap-2 col-6 mx-auto">
                <button onClick={googleLogin} className="btn btn-success" type="button">Register</button>
            </div>

        </>
    )
}