// const BASE_URL = "https://localhost:8443";
// export const PARENT_DOMAIN = "localhost";
export const PARENT_DOMAIN = "gaurangavedic.org.in";
const BASE_URL = "https://api.gaurangavedic.org.in:8443";

export const DOES_USER_EXIST = BASE_URL + "/v1/hlzGlobalReg/doesUserExist";
export const CHECK_PERMISSION = BASE_URL + "/v1/hlzGlobalReg/checkPermission";
export const GET_ALL_DEP_BY_USER_ID =
  BASE_URL + "/v1/hlzGlobalReg/fetchAllDepById";
export const ADD_DEVOTEE_DATA = BASE_URL + "/v1/hlzGlobalReg/saveInput";
export const PROFILE_PIC_UPLOAD = BASE_URL + "/v1/image/upload";
export const CHECK_AUTHENTICATION_URL = BASE_URL + "/auth";
export const LOGIN_URL = BASE_URL + "/oauth2/authorization/google";
export const GET_REGISTERED_USERS = BASE_URL + "/yatra/admin/dbRegWithin";
export const LOGOUT = BASE_URL + "/logout";
