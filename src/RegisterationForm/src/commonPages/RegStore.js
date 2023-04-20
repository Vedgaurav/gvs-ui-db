import { legacy_createStore as createStore } from "redux";
import { requiredDataAllFields } from "../utilities/AllFieldsData";

const form1Reducer = (state = requiredDataAllFields, action) => {
  switch (action.type) {
    case "connectedTo":
     // console.log(action.type,action.data,action.valid)
      return {
        ...state,
        connectedTo: action.data,
        };
      
    case "fname":
   //   console.log(action.type,action.data,action.valid)
      return {
        ...state,
        fname: action.data,
        validations:{
          ...state.validations,
          isValidFname:action.valid,}
      };

    case "mname":
      return {
        ...state,
        mname: action.data,
        
      };
    case "lname":
      return {
        ...state,
        lname: action.data,
      };
    case "iname":
      return {
        ...state,
        initiatedName: action.data,
      };
    case "gender":
   //   console.log(action.type,action.data,action.valid)
      return {
        ...state,
        gender: action.data,
        validations:{
          ...state.validations,
          isValidGender:action.valid,}
      };
    case "dateOfBirth":
      return {
        ...state,
        dateOfBirth: action.data,
        validations:{
          ...state.validations,
          isValidDateOfBirth:action.valid,}
      };
    case "bloodGroup":
      return {
        ...state,
        bloodGroup: action.data,
      };
    case "language":
      return {
        ...state,
        language: action.data,
      };
    case "profileImageUrl":
      return {
        ...state,
        profileImgUrl: action.data,
      };
    case "primaryPhone":
      return {
        ...state,
        primaryPhone: action.data,
        validations:{
          ...state.validations,
          isValidPrimaryNo:action.valid,}
      };
    case "whatsAppPhone":
      return {
        ...state,
        whatsAppPhone: action.data,
      };
    case "email":
      return {
        ...state,
        email: action.data,
        validations:{
          ...state.validations,
          isValidEmail:action.valid,}
      };
      case "currentAddressLine1":
      return {
        ...state,
        currentAddress:{ ...state.currentAddress,
          line1:action.data,},
        validations:{
          ...state.validations,
          isValidCurrentAddress:action.valid,
        }
      };
      case "currentAddressLine2":
      return {
        ...state,
        currentAddress:{ ...state.currentAddress,
          line2:action.data,}
      };
     case "currentAddressState":
      return {
        ...state,
        currentAddress:{ ...state.currentAddress,
          state:action.data,}
      };
      case "currentAddressCountry":
        return{
          ...state,
          currentAddress:{...state.currentAddress,
            country: action.data}
        }
      case "currentAddressCity":
          return{
            ...state,
            currentAddress:{...state.currentAddress,
              city:action.data}
          }
      case "currentAddressDistrict":
          return{
            ...state,
            currentAddress:{...state.currentAddress,
              district:action.data}
          }
      case "currentAddressPincode":
            return{
              ...state,
              currentAddress:{...state.currentAddress,
                pinCode:action.data}
            }
      case "permanentAddressLine1":
          return {
            ...state,
            permanentAddress:{ ...state.permanentAddress,
             line1:action.data,},
             validations:{
          ...state.validations,
          isValidPermanentAddress:action.valid,
        }
              };
      case "permanentAddressLine2":
              return {
                ...state,
                permanentAddress:{ ...state.permanentAddress,
                  line2:action.data,}
              };
      case "permanentAddressState":
              return {
                ...state,
                permanentAddress:{ ...state.permanentAddress,
                  state:action.data,}
              };
      case "permanentAddressCountry":
            return{
            ...state,
            permanentAddress:{...state.permanentAddress,
            country: action.data}
                }
      case "permanentAddressCity":
            return{
                    ...state,
                    permanentAddress:{...state.permanentAddress,
                      city:action.data}
                  }
      case "permanentAddressDistrict":
                  return{
                    ...state,
                    permanentAddress:{...state.permanentAddress,
                      district:action.data}
                  }
      case "permanentAddressPincode":
          return{
            ...state,
            permanentAddress:{...state.permanentAddress,
            pinCode:action.data}
                }
      case "isSameAddress":
      return {
        ...state,
        validations:{
          ...state.validations,
          isSameAddress:action.valid,}
      };
    case "facilitator":
      return {
        ...state,
        facilitator: action.data,
      };
    case "spiritualMaster":
      return {
        ...state,
        spiritualMaster: action.data,
      };
    case "chantingRounds":
      return {
        ...state,
        chantingRounds: action.data,
        validations:{
          ...state.validations,
          isValidChantingRounds:action.valid,}
      };
    case "yearChantingSince":
      return {
        ...state,
        yearChantingSince: action.data,
        validations:{
          ...state.validations,
          isValidYearChantingSince:action.valid,}
      };
    case "yearChanting16Rounds":
      return {
        ...state,
        yearChanting16Rounds: action.data,
      };
    case "introducedBy":
      return {
        ...state,
        introducedBy: action.data,
      };
    case "placeIntroducedIn":
      return {
        ...state,
        placeIntroducedIn: action.data,
      };
    case "preferredServices":
      return {
        ...state,
        preferredServices: action.data,
      };
    case "servicesRendered":
      return {
        ...state,
        servicesRendered: action.data,
      };
    
    case "education":
      return {
        ...state,
        education: action.data,
        validations:{
          ...state.validations,
          isValidEducation:action.valid,}
      };
      case "educationSpecification":
      return {
        ...state,
        degreeSpecification: action.data,
        validations:{
          ...state.validations,
          isValidEducation:action.valid,}
      };
    case "occupation":
      return {
        ...state,
        occupation: action.data,
        validations:{
          ...state.validations,
          isValidOccupation:action.valid,}
      };
    case "presentDesignation":
      return {
        ...state,
        presentDesignation: action.data,
      };
    case "skills":
      return {
        ...state,
        skills: action.data,
      };
    case "currentCompany":
      return {
        ...state,
        currentCompany: action.data,
      };
    case "officeLocation":
      return {
        ...state,
        officeLocation: action.data,
      };
    case "birthCity":
      return {
        ...state,
        birthCity: action.data,
        validations:{
          ...state.validations,
          isValidBirthCity:action.valid,}
      };
    case "birthState":
      return {
        ...state,
        birthState: action.data,
        validations:{
          ...state.validations,
          isValidBirthState:action.valid,}
      };
    case "motherTongue":
      return {
        ...state,
        motherTongue: action.data,
        validations:{
          ...state.validations,
          isValidMotherTongue:action.valid,}
      };
    case "fathersName":
      return {
        ...state,
        fathersName: action.data,
        validations:{
          ...state.validations,
          isValidFathersName:action.valid,}
      };
    case "mothersName":
      return {
        ...state,
        mothersName: action.data,
        validations:{
          ...state.validations,
          isValidMothersName:action.valid,}
      };
      case "spouseName":
      return {
        ...state,
        spouseName: action.data,
        validations:{
          ...state.validations,
          isValidSpouseName:action.valid,}
      };
      case "dateOfMarriage":
      return {
        ...state,
        dateOfMarriage: action.data,
      };
      case "maritalStatus":
      return {
        ...state,
        maritalStatus: action.data,
      };
    case "modified":
      return {
        ...state,
        modified: action.data,
      };
      case "priviledge":
        return {
          ...state,
          priviledge: action.data,
        }
    case "submitDisable":
     // console.log("submitDisable",action.valid)
      return{
        ...state,
        validations:{
          ...state.validations,
          isSubmitDisabled:action.valid,}
      }
    default:
      return state;
  }

  // maritialStatus: null,
};
const store = createStore(form1Reducer);

export default store;
