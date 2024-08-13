import { useContext, useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { PleaseWaitContext } from "../context/PleaseWaitContextProvider.js"
import { GET_REGISTERED_USERS } from "../constants/apiConstant"
import LoadingSpinner from "../RegisterationForm/src/utilities/loadingSpinner/LoadingSpinner";
import "../RegisterationForm/src/commonPages/Forms/FormInput.css"
import axios from "axios"
import { useSelector, useDispatch } from "react-redux";
import StickyHeadTable from "../reusableComponents/table/StickyHeadTable.js";
import { Divider, Grid } from '@mui/material';
import Grid2 from "@mui/material/Unstable_Grid2/Grid2.js";


export default (props) => {
    const dispatch = useDispatch();
    const [error, setError] = useState("");
    const admin  = useSelector((state) => state.admin)
    const { state } = useLocation()
    const { userDetail } = state ? state : ""
    const [dep, setDep] = useState([])
    const [startDate, setStartDate] = useState("2024-07-15");
    const [endDate, setEndDate] = useState(setTodaysDate());
    const navigate = useNavigate()
    const { gWaitOn, setGWaitOn } = useContext(PleaseWaitContext)
    function setTodaysDate() {

        const today = new Date();
        
        // Format the date to YYYY-MM-DD
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, '0'); // Months are zero-based, so add 1
        const day = String(today.getDate()).padStart(2, '0');
        
        // Construct the date string
        const formattedDate = `${year}-${month}-${day}`;
        
        // Set the value of the input to today's date
        return formattedDate;
    }



    useEffect(() => {

        // console.log(startDate);
        // console.log(endDate)
    }, [startDate, endDate])

    useEffect(() => {

        if (sessionStorage.getItem("userEmail") == null) {
            navigate("/");
        }
        else if (admin.length !== 0 && admin === 'ROLE_ADMIN') {
            // console.log("welcome to admin pannel")

        }
        else {
            navigate("/dashboard");
        }

    }, [])


    const getRegisteredMembers = async () => {
        setError("");
        setGWaitOn(true)
        let b=false;
        const response = await axios.get(GET_REGISTERED_USERS + `?startDate=${startDate}&endDate=${endDate}`, {
            withCredentials: true,

        }).catch((e) => {b=true;setError("OOps!! There is some error in fetching the data please try again!!!");setGWaitOn(false)});
        // console.log(response);
        let filteredData;
        
         !b?  filteredData=response.data.filter(o=>o[0].charAt(0)==='T'):""
        
        setDep(b ? []:[...response.data.filter(o=>o[0].charAt(0)!=='T').sort((a, b) => b[0].localeCompare(a[0])),...filteredData]);
        setGWaitOn(false)
    }

    useEffect(() => {
        if (sessionStorage.getItem("userEmail") == null)
            navigate("/login")
    }, [])


    const template = <div>
        <h4 className="display-5">Manage Registered Members</h4>

    <Grid2 container spacing={2} margin={1}>
        <Grid2 xs={4}><label className="form-control" style={{ margin: "1rem" }} htmlFor="SatrtDate">Start Date:<input type="date" id="StartDate" defaultValue={startDate}className="form-control me-md-2" name="Start Date" onChange={(e) => setStartDate(e.target.value)} /> </label></Grid2>
        <Grid2 xs={4}><label className="form-control" style={{ margin: "1rem" }} htmlFor="endDate">End Date:<input type="date" id="endDate" className="form-control me-md-2" defaultValue={endDate} onChange={(e) => { setEndDate(e.target.value) }} /></label></Grid2>
        <Grid2 xs={4}><button onClick={getRegisteredMembers} className="form-col btn btn-success me-md-2" style={{ margin: "2rem" }} type="button">Get Registered Members</button></Grid2>

        <Divider sx={{ width: "100%", margintop: 5 }} />


        {dep.length > 0 ? <StickyHeadTable rows={dep} /> : ""}

        {gWaitOn ? <LoadingSpinner /> : <i style={{color:'red',margin:'1rem'}}>{error}</i>}


    </Grid2>
    </div>
    return <>
        {template}
    </>
}