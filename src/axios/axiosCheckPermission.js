import axios from "axios";
import { CHECK_PERMISSION } from "../constants/apiConstant";

export default async (email) => {
  return await axios.post(CHECK_PERMISSION, {"email":email});
};