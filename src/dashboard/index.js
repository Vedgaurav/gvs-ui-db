import { useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"


export default function Dashboard() {
    const navigate = useNavigate()


    useEffect(()=>{
        if(sessionStorage.getItem("userEmail")==null)
            navigate("/")
    },[])

    const goToMyDep = () => {
        // to my dep page
        // console.log(userId);
        navigate("/dependents" )
    }

    return (
        <div>
            <h1 className="display-1">Dashboard </h1>
            <div className="container">
                <h5>{sessionStorage.getItem("userId")} - {sessionStorage.getItem("userFname")}</h5>
                <div className="row">
                    <div className="col">
                        <div className="card" style={{ width: "18rem" }}>
                          <img src="https://i.pinimg.com/originals/91/74/97/917497ca56641ce403fd3ad5cd70cf90.jpg" className="card-img-top" alt="image"/> 
                            <div className="card-body">
                                <h5 className="card-title">Manange Members</h5>
                                {/* <p class="card-text">Total Members Added = </p> */}
                                <a onClick={goToMyDep} className="btn btn-primary">Manage</a>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                   
                    </div>
                    <div className="col">

                    </div>
                    <div className="col">

                    </div>
                </div>
            </div>

        </div>

    )
}