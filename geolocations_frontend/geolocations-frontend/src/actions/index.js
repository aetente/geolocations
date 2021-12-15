import {
  GET_SITES,
  GET_SITE_DETAILS,
  GET_HAZARDS,
  GET_HAZARD_DETAILS,
  POST_HAZARD,
} from "../types";

export function getSites(payload) {
  return {
    type: GET_SITES,
    payload,
  };
}

export function getSiteDetails(payload) {
  return {
    type: GET_SITE_DETAILS,
    payload,
  };
}

export function getHazards(payload) {
  return {
    type: GET_HAZARDS,
    payload,
  };
}

export function getHazardDetails(payload) {
  return {
    type: GET_HAZARD_DETAILS,
    payload,
  };
}

export function postHazards(payload) {
  return {
    type: POST_HAZARD,
    payload,
  };
}
