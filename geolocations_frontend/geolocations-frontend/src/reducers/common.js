import {
  GET_SITES,
  GET_SITE_DETAILS,
  GET_HAZARDS,
  GET_HAZARD_DETAILS,
  POST_HAZARD,
} from "../types";

const INITIAL_STATE = {
  sites: null, //all sites
  siteDetails: null, //details of chosen site
  hazards: null, // all hazards
  hazardDetails: null, // details of chosen hazard
};

const common = (state = INITIAL_STATE, action) => {
  let { sites } = state;
  switch (action.type) {
    // nothing complex going on here, just setting the props as it is
    case GET_SITES:
      return { ...state, sites: action.payload };
    case GET_SITE_DETAILS:
      return { ...state, siteDetails: action.payload };
    case GET_HAZARDS:
      return { ...state, hazards: action.payload };
    case GET_HAZARD_DETAILS:
      return { ...state, hazardDetails: action.payload };
    case POST_HAZARD:
      return { ...state, hazards: action.payload };
    default:
      return state;
  }
};

export default common;
