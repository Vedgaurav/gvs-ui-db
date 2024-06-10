import axios from "axios";
import {GET_ALL_DEP_BY_USER_ID } from "../constants/apiConstant";

export default async (id) => {
  return await axios.get(GET_ALL_DEP_BY_USER_ID+"/"+id,{withCredentials:true});
};