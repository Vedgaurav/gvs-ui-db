import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import axiosGetAllDependents from "../axios/axiosGetAllDependents"


export default () => {
    const { state } = useLocation()
    const { email } = state
    const [dep, setDep] = useState()

    useEffect(async () => {
        const res = await axiosGetAllDependents(email)
        setDep(res.data);
    }, [])

    const addDep = (email)=>{
        navigate("/registration", { state: { connectedEmail: email } })
    }

    return <>
        My Dependents

        <div class="container-md">
            <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                <button onClick={(email)=>addDep(email)} class="btn btn-success me-md-2" type="button">Add Dependents</button>
            </div><br />
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">connectedEmail</th>
                        <th scope="col"></th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                {dep ? dep.map((d, index) => (
                    <tbody>
                        <tr>
                            <th scope="row">{index + 1}</th>
                            <td>{d.fname}</td>
                            <td>{d.email}</td>
                            <td>{d.connectedEmail}</td>
                            <td> <button className="btn btn-warning" type="button">Edit</button></td>
                            <td> <button className="btn btn-danger" type="button">Delete</button></td>
                        </tr>
                    </tbody>
                )) : <tbody>
                    <tr>
                        <td>No members found.</td>
                        <td>No members found.</td>
                        <td>No members found.</td>
                        <td>No members found.</td>
                    </tr>
                </tbody>}
            </table>
        </div>

    </>
}