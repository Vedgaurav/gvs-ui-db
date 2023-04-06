import { useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"


export default function Dashboard() {
    const navigate = useNavigate()
    const {state} = useLocation()
    const {personDetail} = state
    const {email} = personDetail

    const goToMyDep = () =>{
        // to my dep page
        console.log(email);
        navigate("/dependents", { state: { email: email } })
    }

    return (
        <>Dashboard
            <div class="d-grid gap-2 col-6 mx-auto">
                <button onClick={goToMyDep} className="btn btn-success" type="button">My Dependents</button>
            </div>
        </>

    )
}