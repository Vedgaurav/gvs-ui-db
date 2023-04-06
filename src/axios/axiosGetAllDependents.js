import axios from "axios";
import { GET_ALL_DEP } from "../constants/apiConstant";

export default async (email) => {
  return await axios.post(GET_ALL_DEP, {"email":email});
};