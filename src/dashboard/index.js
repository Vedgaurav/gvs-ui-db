import { useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"


export default function Dashboard() {
    const navigate = useNavigate()
    const { state } = useLocation()
    const { userId } = state?state:""

    useEffect(()=>{
        if(sessionStorage.getItem("userId")==null)
            navigate("/login")
    })

    const goToMyDep = () => {
        // to my dep page
        console.log(userId);
        navigate("/dependents", { state: { userId: userId } })
    }

    return (
        <div>
            <h1 class="display-1">Dashboard</h1>
            <div class="container">
                <div class="row">
                    <div class="col">
                        <div class="card" style={{ width: "18rem;" }}>
                          <img src="..." class="card-img-top" alt="..."/> 
                            <div class="card-body">
                                <h5 class="card-title">My Members</h5>
                                <p class="card-text">Total Members Added = 3</p>
                                <a onClick={goToMyDep} class="btn btn-primary">Manage</a>
                            </div>
                        </div>
                    </div>
                    <div class="col">

                    </div>
                    <div class="col">

                    </div>
                    <div class="col">

                    </div>
                </div>
            </div>

        </div>

    )
}