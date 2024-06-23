import { useContext, useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { PleaseWaitContext } from "../context/PleaseWaitContextProvider.js"
import { GET_REGISTERED_USERS } from "../constants/apiConstant"
import LoadingSpinner from "../RegisterationForm/src/utilities/loadingSpinner/LoadingSpinner";
import "../RegisterationForm/src/commonPages/Forms/FormInput.css"
import axios from "axios"

export default () => {
    const { state } = useLocation()
    const { userDetail } = state ? state : ""
    const [dep, setDep] = useState([])
    const [startDate,setStartDate]=useState();
    const [endDate,setEndDate]=useState();
    const navigate = useNavigate()
    const { gWaitOn, setGWaitOn } = useContext(PleaseWaitContext)
    


    useEffect(()=>{

        console.log(startDate);
        console.log(endDate)
    },[startDate,endDate])


    const getRegisteredMembers = async () => {
        setGWaitOn(true)
        const response = await axios.get(GET_REGISTERED_USERS+`?startDate=${startDate}&endDate=${endDate}`,{
            withCredentials: true,
            
          });
        console.log(response);
        setDep(response.data);
        setGWaitOn(false)
    }


      
        
    // useEffect(() => {
       
    //     fun(setDep)
    //     console.log("useEffect ran");
    // }, [])

    useEffect(() => {
        if (sessionStorage.getItem("userEmail") == null)
            navigate("/login")
    }, [])

    const showData=<>{dep ? dep.map((d, index) => (
        <tbody>
            <tr>
                <th scope="row">{index + 1}</th>
                <td>{d.id}</td>
                <td>{d.fname}</td>
                <td>{d.gender}</td>
                <td>{d.primaryPhone}</td>
                <td>{d.facilitator}</td>
                <td> <button className="btn btn-warning" disabled={true} type="button">Accept</button></td>
                <td> <button className="btn btn-danger" disabled={true} type="button">whats app</button></td>
            </tr>
        </tbody>
    )) : <tbody>
        <tr>
            <td colSpan="3">No members found.</td>

        </tr>
    </tbody>}</>


    const template = <>
        <h1 className="display-1">Manage Registered Members</h1>

        <div className="form-group row container-md">
            <div className="d-grid gap-2 d-md-flex justify-content-md-end">
            <div className="form-col col-md-3"><label htmlFor="SatrtDate">Start Date:</label> <input type="date" id="StartDate" className="form-control me-md-2" name="Start Date" onChange={(e)=>setStartDate(e.target.value)}/> </div>
           <div> <label htmlFor="endDate">End Date:</label><input type="date" id="endDate" className="form-control me-md-2" onChange={(e)=>{setEndDate(e.target.value)}}/> </div>
               <div> <button onClick={getRegisteredMembers} className="form-col btn btn-success me-md-2" type="button">Get Registered Members</button></div>
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
                        <th scope="col">Action</th>
                        <th scope="col">Notify</th>
                    </tr>
                </thead>
               {gWaitOn?<LoadingSpinner/>:showData}

            </table>
        </div>
    </>
    return <>
            {template}
    </>
}