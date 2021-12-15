import React, { Component } from "react";
import {
  getHazardsOperations,
  getHazardDetailsOperation,
} from "../../operations";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class ListHazards extends Component {
  constructor() {
    super();
    this.state = {};
    this.mapHazards = this.mapHazards.bind(this);
    this.handleUrlClick = this.handleUrlClick.bind(this);
  }

  componentDidMount() {
    // send request to get hazards
    this.props.getHazardsOperations();
  }

  handleUrlClick(webUrl) {
    // send request to get hazard details
    this.props.getHazardDetailsOperation(webUrl);
  }

  mapHazards(hazards) {
    return hazards.map((s) => {
      return (
        <div key={s.web_url}>
          {/* it redirects to map, but it should redirect to hazard details page (not implemented) */}
          <Link
            to="/map"
            onClick={() => {
              this.handleUrlClick(s.web_url);
            }}
            style={{ cursor: "pointer" }}
          >
            {s.web_url}
          </Link>
        </div>
      );
    });
  }

  render() {
    let { hazards } = this.props;
    return (
      <div>
        <button>
          <Link to="/add/hazard" style={{ cursor: "pointer" }}>
            ADD HAZARD
          </Link>
        </button>
        {hazards && this.mapHazards(hazards.items)}
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    hazards: state.common.hazards,
  };
};

export default connect(mapStateToProps, {
  getHazardsOperations,
  getHazardDetailsOperation,
})(ListHazards);
