 const BASE_URL = "https://localhost:8443"
 //const BASE_URL = "https://api.gaurangavedic.org.in:8443"

export const DOES_USER_EXIST = BASE_URL+"/v1/hlzGlobalReg/doesUserExist"
export const CHECK_PERMISSION = BASE_URL+"/v1/hlzGlobalReg/checkPermission"
export const GET_ALL_DEP_BY_USER_ID = BASE_URL+"/v1/hlzGlobalReg/fetchAllDepById"
export const ADD_DEVOTEE_DATA = BASE_URL+"/v1/hlzGlobalReg/saveInput"
export const PROFILE_PIC_UPLOAD = BASE_URL+"/v1/image/upload"
export const CHECK_AUTHENTICATION_URL = BASE_URL+"/auth"
export const Login_URL = BASE_URL +"/oauth2/authorization/google";