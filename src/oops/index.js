import { useLocation } from "react-router-dom"

export default function Oops(props){
    const {state} = useLocation()
    const {message} = state
    return (
        <>
        Error while processing
            {message}
        </>
    )
}