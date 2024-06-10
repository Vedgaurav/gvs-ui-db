import { useContext, useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import axiosGetAllDependents from "../axios/axiosGetAllDependents"
import { PleaseWaitContext } from "../context/PleaseWaitContextProvider.js"
import PleaseWait from "../pleaseWait/PleaseWait"


export default () => {
    const { state } = useLocation()
    const { userDetail } = state ? state : ""
    const [dep, setDep] = useState([])
    const navigate = useNavigate()
    const { gWaitOn, setGWaitOn } = useContext(PleaseWaitContext)


    useEffect(() => {
        const fun = async (setDep) => {
            setGWaitOn(true)
            const res = await axiosGetAllDependents(sessionStorage.userId)
            console.log(res);
            setDep(res.data);
            setGWaitOn(false)
        }
        fun(setDep)
        console.log("useEffect ran");
    }, [])

    useEffect(() => {
        if (sessionStorage.getItem("userEmail") == null)
            navigate("/login")
    }, [])

    const addDep = () => {
        console.log("from dep", sessionStorage.getItem("userId"));
        navigate("/registration", { state: { userId: sessionStorage.getItem("userId"), connectedTo: sessionStorage.getItem("userId")} })
    }

    const template = <>
        <h1 className="display-1">Manage Members</h1>

        <div className="container-md">
            <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                <button onClick={addDep} className="btn btn-success me-md-2" type="button">Add Dependents</button>
            </div><br />
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Gender</th>
                        <th scope="col">PhoneNo.</th>
                        <th scope="col">Facilitator</th>
                        <th scope="col"></th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                {dep ? dep.map((d, index) => (
                    <tbody>
                        <tr>
                            <th scope="row">{index + 1}</th>
                            <td>{d.id}</td>
                            <td>{d.fname}</td>
                            <td>{d.gender}</td>
                            <td>{d.primaryPhone}</td>
                            <td>{d.facilitator}</td>
                            <td> <button className="btn btn-warning" disabled={true} type="button">Edit</button></td>
                            <td> <button className="btn btn-danger" disabled={true} type="button">Delete</button></td>
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
    return <>
            {gWaitOn?<PleaseWait/>:template}
    </>
}