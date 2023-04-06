import { legacy_createStore as createStore } from "redux";
import { requiredDataAllFields } from "../utilities/AllFieldsData";

const form1Reducer = (state = requiredDataAllFields, action) => {
  // console.log("actions==>", action)
  switch (action.type) {
    case "fname":
      return {
        ...state,
        fname: action.data,
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
      return {
        ...state,
        gender: action.data,
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
      };
    case "currentAddress":
      return {
        ...state,
        currentAddress: action.data,
      };
    case "permanentAddress":
      return {
        ...state,
        permanentAddress: action.data,
      };
    case "centerConnectedTo":
      return {
        ...state,
        centerConnectedTo: action.data,
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
    case "remarks":
      return {
        ...state,
        remarks: action.data,
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
    case "awards":
      return {
        ...state,
        awards: action.data,
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
    case "officeAddress":
      return {
        ...state,
        officeAddress: action.data,
      };
    case "previousReligion":
      return {
        ...state,
        previousReligion: action.data,
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
    default:
      return state;
  }

  // maritialStatus: null,
};
const store = createStore(form1Reducer);

export default store;
