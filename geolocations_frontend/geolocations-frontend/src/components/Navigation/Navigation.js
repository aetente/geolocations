import React, { Component } from "react";
import Map from "../Map/Map";
import ListSites from "../ListSites/ListSites";
import ListHazards from "../ListHazards/ListHazards";
import ChooseHazardsOrSites from "../ChooseHazardsOrSites/ChooseHazardsOrSites";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Redirect,
} from "react-router-dom";

// ChooseHazardsOrSites is to open list of hazards or sites
// ListSites gives a list of sites where you can click on one and it should open Map component and show it on the map
// ListHazards is the same as ListSites but for hazards (click on hazard not implemented)
// Map is the map component to look at site you clicked on

class Navigation extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <Router>
        <Routes>
          <Route exact path="/" element={<ChooseHazardsOrSites />} />
          <Route exact path="/sites" element={<ListSites />} />
          <Route exact path="/hazards" element={<ListHazards />} />
          <Route path="/map" element={<Map />} />
        </Routes>
      </Router>
    );
  }
}

export default Navigation;
