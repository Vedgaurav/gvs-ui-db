import { legacy_createStore as createStore } from "redux";
import { requiredDataAllFields } from "../utilities/AllFieldsData";

const form1Reducer = (state = requiredDataAllFields, action) => {
  switch (action.type) {
    case "fname":
      console.log(action.type,action.data,action.valid)
      return {
        ...state,
        fname: action.data,
        isValidFname:action.valid,
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
      console.log(action.type,action.data,action.valid)
      return {
        ...state,
        gender: action.data,
        isValidGender: action.valid
      };
    case "odob":
      return {
        ...state,
        dob: action.data,
      };
    case "aspiringAshram":
      return {
        ...state,
        aspiringAshram: action.data,
      };
    case "bloodGroup":
      return {
        ...state,
        bloodGroup: action.data,
      };
    case 'caste':
      console.log(action.type,action.data,action.valid)
      return {
        ...state,
        caste:action.data,
        isValidCaste: action.valid,
      }
      case 'gotra':
        console.log(action.type,action.data,action.valid)
      return {
        ...state,
        gotra:action.data,
        isValidGotra: action.valid,
      }
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
        isValidPrimaryNo: action.valid
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
        isValidEmail: action.valid
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
          case "currentAddressPincode":
            return{
              ...state,
              currentAddress:{...state.currentAddress,
                pincode:action.data}
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
                  case "permanentAddressPincode":
                    return{
                      ...state,
                      permanentAddress:{...state.permanentAddress,
                        pincode:action.data}
                    }
    case "centerConnectedTo":
      return {
        ...state,
        centerConnectedTo: action.data,
        isValidCenterConnectedTo:action.valid
      };
    case "facilitator":
      return {
        ...state,
        facilitator: action.data,
      };
    case "counselor":
      return {
        ...state,
        counselor: action.data,
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
      };
    case "yearChantingSince":
      return {
        ...state,
        yearChantingSince: action.data,
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
    case "yearOfIntroduction":
      return {
        ...state,
        yearOfIntroduction: action.data,
      };
    case "placeIntroducedIn":
      return {
        ...state,
        placeIntroducedIn: action.data,
      };
    case "previousCounselor":
      return {
        ...state,
        previousCounselor: action.data,
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
      };
    case "occupation":
      return {
        ...state,
        occupation: action.data,
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
      };
    case "birthState":
      return {
        ...state,
        birthState: action.data,
      };
    case "motherTongue":
      return {
        ...state,
        motherTongue: action.data,
      };
    case "fathersName":
      return {
        ...state,
        fathersName: action.data,
      };
    case "mothersName":
      return {
        ...state,
        mothersName: action.data,
      };
    case "parent":
      return {
        ...state,
        parent: action.data,
      };
    case "modified":
      return {
        ...state,
        modified: action.data,
      };
    case "stayingInHaldiaVoice":
      return {
        ...state,
        stayingInHaldiaVoice: action.data,
      };
    case "submitDisable":
      console.log("submitDisable",action.valid)
      return{
        ...state,
        isSubmitDisabled: action.valid,
      }
    default:
      return state;
  }

  // maritialStatus: null,
};
const store = createStore(form1Reducer);

export default store;
