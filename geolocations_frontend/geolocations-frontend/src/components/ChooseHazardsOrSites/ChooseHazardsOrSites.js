import React, { Component } from "react";
import { Link } from "react-router-dom";

// open list of sites or hazards

class ChooseHazardsOrSites extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div
        style={{
          height: "400px",
          width: "400px",
          margin: "auto",
          paddingTop: "72px",
        }}
      >
        <div>
          <Link to="/sites">SITES</Link>
        </div>
        <div>
          <Link to="/hazards">HAZARDS</Link>
        </div>
      </div>
    );
  }
}

export default ChooseHazardsOrSites;
