import axios from "axios";
import { DOES_USER_EXIST } from "../constants/apiConstant";

export default async (email) => {
  console.log("Fetch does user exist")
  //return await axios.get(DOES_USER_EXIST, {"email":email});
  return  await fetch(DOES_USER_EXIST,{
    method: 'GET',
    credentials: 'include',
  });
};