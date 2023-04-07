import { useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import axiosGetAllDependents from "../axios/axiosGetAllDependents"


export default () => {
    const { state } = useLocation()
    const { userId } = state?state:""
    const [dep, setDep] = useState([])
    const navigate = useNavigate()


    useEffect(async () => {
        const res = await axiosGetAllDependents(userId)
        setDep(res.data);
    }, [])

    useEffect(()=>{
        if(sessionStorage.getItem("userId")==null)
            navigate("/login")
    })

    const addDep = (userId) => {    
        console.log("from dep",userId);
        navigate("/registration", { state: { userId: userId } })
    }

    return <>
        <h1 class="display-1">Manage Members</h1>

        <div class="container-md">
            <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                <button onClick={(userId) => addDep(userId)} class="btn btn-success me-md-2" type="button">Add Dependents</button>
            </div><br />
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col"></th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                {dep ? dep.map((d, index) => (
                    <tbody>
                        <tr>
                            <th scope="row">{index + 1}</th>
                            <td>{d.connectedTo}</td>
                            <td>{d.id}</td>
                            <td> <button className="btn btn-warning" type="button">Edit</button></td>
                            <td> <button className="btn btn-danger" type="button">Delete</button></td>
                        </tr>
                    </tbody>
                )) : <tbody>
                    <tr>
                        <td colSpan="3">No members found.</td>
                        
                    </tr>
                </tbody>}
            </table>
        </div>

    </>
}