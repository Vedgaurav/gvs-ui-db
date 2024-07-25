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
        validations:{
          ...state.validations,
          isValidInitiatedName:action.valid,}
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
    case "profileImgUrl":
      return {
        ...state,
        profileImgUrl: action.data,
        validations:{
          ...state.validations,
          isValidProfileImgUrl:action.valid,}
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
      case "isValidCurrentAddress":
              return {
                ...state,
                validations:{
                  ...state.validations,
                  isValidCurrentAddress:action.valid,
                }
              };
      case "permanentAddressLine1":
          return {
            ...state,
            permanentAddress:{ ...state.permanentAddress,
             line1:action.data,},
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
      case "isValidPermanentAddress":
          return {
                ...state,
                validations:{
                  ...state.validations,
                  isValidPermanentAddress:action.valid,
                }
              };
      case "isSameAddress":
      return {
        ...state,
        validations:{
          ...state.validations,
          isSameAddress:action.valid,
          }
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
        validations:{
          ...state.validations,
          isValidSpiritualMaster:action.valid,}
      
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
        validations:{
          ...state.validations,
          isValidYearChanting16Rounds:action.valid,}
      };
    case "introducedBy":
      return {
        ...state,
        introducedBy: action.data,
        validations:{
          ...state.validations,
          isValidIntroducedBy:action.valid,}
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
          isValidEducationSpecification:action.valid,}
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
        validations:{
          ...state.validations,
          isValidDesignation:action.valid,}
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
        validations:{
          ...state.validations,
          isValidCurrentCompany:action.valid,}
      };
    case "occupationLocation":
      return {
        ...state,
        occupationLocation: action.data,
        validations:{
          ...state.validations,
          isValidOccupationLocation:action.valid,}
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
      case "children":
      return {
        ...state,
        children: action.data,
      };
      case "dateOfMarriage":
      return {
        ...state,
        dateOfMarriage: action.data,
        validations:{
          ...state.validations,
          isValidDateOfMarriage:action.valid,
      }
    }
      case "maritalStatus":
      return {
        ...state,
        maritalStatus: action.data,
        validations:{
          ...state.validations,
          isValidMaritalStatus:action.valid,}
      }
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
      case "admin":
 //       console.log(action.type,action.data)
        return {
          ...state,
          admin: action.data,
          };

        case "logout":
  //           console.log(action.type,action.data)
             return {
               ...state,
               logout: action.data,
               };
        case "menus":
           return {
              ...state,
             menus: action.data,
              };
              case "profile":
                console.log("profile dispatched",action.data)
           return {
              ...state,
             profile: action.data,
              };
       case "submitted":
         return {
          ...state,
          fname: "",
          mname: "",
          lname: "",
          initiatedName: "",
          gender: "",
          dateOfBirth: "",
          maritalStatus: "",
          bloodGroup: "",
          language: "Hindi",
          profileImgUrl: "",
          primaryPhone: '',
          whatsAppPhone: '',
          email: '',
          currentAddress: {line1:'',line2:'',
          country:'India',
          state:'State',
          city:'City',
          district:"District",
          pinCode:'100001'},
          permanentAddress: {line1:'',line2:'',
          country:'India',
          state:'State',
          city:'City',
          district:"District",
          pinCode:'100001'},
          facilitator: "",
          spiritualMaster: "",
          chantingRounds: "",
          yearChantingSince: "",
          yearChanting16Rounds: "",
          introducedBy: "",
          preferredServices: "",
          servicesRendered: "",
          education: "NO_EDUCATION",
          degreeSpecification:"",
          occupation: "STUDENT",
          presentDesignation: "",
          skills: "",
          currentCompany: "",
          occupationLocation: "",
          birthCity: "",
          birthState: "",
          motherTongue: "Hindi",
          fathersName: "",
          mothersName: "",
          dateOfMarriage:"",
          spouseName:"",
          children:"",
          connectedTo:"",
          modified: false,
          priviledge:"",
          validations:{
          isValidFname: false,
          isValidGender:false,
          isValidDateOfBirth:false,
          isValidSpiritualMaster:false,
          isValidInitiatedName:false,
          isValidMaritalStatus:false,
          isValidProfileImgUrl:false,
          isSubmitDisabled:true,
          isValidPrimaryNo :false,
          isValidEmail:false,
          isValidCurrentAddress:false,
          isValidPermanentAddress:false,
          isValidCenterConnectedTo:false,
          isValidYearChantingSince:false,
          isValidYearChanting16Rounds:false,
          isValidChantingRounds:false,
          isValidCounselor:false,
          isValidIntroducedBy:false,
          isValidFathersName:false,
          isValidMothersName:false,
          isValidSpouseName:false,
          isValidDateOfMarriage:false,
          isValidMothersTongue:true,
          isValidEducation:true,
          isValidEducationSpecification:false,
          isValidOccupation:true,
          isValidOccupationLocation:false,
          isValidDesignation:false,
          isValidCurrentCompany:false,
          isShowPreviewOn:false,
          isSameAddress:false,
          imageSource:"",
        }
      }
      case "isShowPreviewOn":
        return {
          ...state,
          validations:{
            ...state.validations,
            isShowPreviewOn:action.valid,
          }
        }
        case "imageSource":
          return {
            ...state,
            validations:{
              ...state.validations,
              imageSource:action.data,
            }
          }
    default:
      return state;
  }

  // maritialStatus: null,
};
const store = createStore(form1Reducer);

export default store;
