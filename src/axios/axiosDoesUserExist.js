import axios from "axios";
import { DOES_USER_EXIST } from "../constants/apiConstant";

export default async (email) => {
  return await axios.post(DOES_USER_EXIST, {"email":email});
};