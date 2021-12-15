import React, { Component } from "react";
import { getSitesOperations, getSiteDetailsOperation } from "../../operations";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class ListSites extends Component {
  constructor() {
    super();
    this.state = {};
    this.mapSites = this.mapSites.bind(this);
    this.handleUrlClick = this.handleUrlClick.bind(this);
  }

  componentDidMount() {
    // send request to get sites
    this.props.getSitesOperations();
  }

  handleUrlClick(webUrl) {
    // send request to get site details
    this.props.getSiteDetailsOperation(webUrl);
  }

  mapSites(sites) {
    return sites.map((s) => {
      return (
        <div key={s.web_url}>
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
    let { sites } = this.props;
    console.log(sites);
    return <div>{sites && this.mapSites(sites.items)}</div>;
  }
}

let mapStateToProps = (state) => {
  return {
    sites: state.common.sites,
  };
};

export default connect(mapStateToProps, {
  getSitesOperations,
  getSiteDetailsOperation,
})(ListSites);
