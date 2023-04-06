import { useLocation } from "react-router-dom";

export default function Registration(props){
    const {state} = useLocation();
    const {email,name,googleId} = state.personDetail

    // Registration form with email, name, googleId disable to edit
    // set isParent true after submitting
    return <>hello</>
}