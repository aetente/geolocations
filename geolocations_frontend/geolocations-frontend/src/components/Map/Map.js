import React, { Component } from "react";
import "./styles.css";
import { connect } from "react-redux";
import L from "leaflet";
import {
  MapContainer,
  TileLayer,
  Popup,
  Polygon,
  GeoJSON,
} from "react-leaflet";

// I used leaflet for react
// it works the same way, but some things are not that obvious as in the original library (setting bounds) (I didn't implement it)

class Map extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    let { siteDetails } = this.props;
    let polygon = null;
    let center = null;
    if (siteDetails) {
      // setting polygons on the go
      // polygons should have probably been modified (I am guessing there are tools in the leaflet), because it would always draw a rectangle
      // and the positions obviously not in the right place (somewhere in the sea)
      polygon = JSON.parse(siteDetails.polygon_json).coordinates[0];
      center = polygon[0];
    }
    return (
      <div style={{ height: "400px", width: "400px", margin: "auto" }}>
        <MapContainer
          center={center || [51.505, -0.09]}
          zoom={9}
          scrollWheelZoom={true}
          style={{ height: "400px", width: "400px" }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {polygon && <Polygon positions={polygon} />}
          {/* {polygon && <GeoJSON positions={polygon} />} */}
        </MapContainer>
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    siteDetails: state.common.siteDetails,
  };
};

export default connect(mapStateToProps, {})(Map);
