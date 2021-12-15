import {
  getSites,
  getSiteDetails,
  getHazards,
  getHazardDetails,
  postHazards,
} from "../actions";
import requests from "../utils/requests";

// in here the jogic of functions is to send request, get data, dispatch it

export function getSitesOperations() {
  return async (dispatch) => {
    try {
      let chunk = await requests.common.getSites();
      let sitesData = chunk.data;
      await dispatch(getSites(sitesData));
    } catch (e) {
      console.log(e);
    }
  };
}

export function getSiteDetailsOperation(webUrl) {
  return async (dispatch) => {
    try {
      let chunk = await requests.common.getSiteDetails(webUrl);
      let siteDetailsData = chunk.data;
      await dispatch(getSiteDetails(siteDetailsData));
    } catch (e) {
      console.log(e);
    }
  };
}

export function getHazardsOperations() {
  return async (dispatch) => {
    try {
      let chunk = await requests.common.getHazards();
      let hazardsData = chunk.data;
      await dispatch(getHazards(hazardsData));
    } catch (e) {
      console.log(e);
    }
  };
}

export function getHazardDetailsOperation(webUrl) {
  return async (dispatch) => {
    try {
      let chunk = await requests.common.getHazardDetails(webUrl);
      let hazardDetailsData = chunk.data;
      await dispatch(getHazardDetails(hazardDetailsData));
    } catch (e) {
      console.log(e);
    }
  };
}

export function postHazard(data) {
  return async (dispatch) => {
    try {
      let chunk = await requests.common.postHazard(data);
      let hazardsData = chunk.data;
      await dispatch(getHazards(hazardsData));
    } catch (e) {
      console.log(e);
    }
  };
}
