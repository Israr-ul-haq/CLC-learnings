import React, { Component, memo } from "react";
import WOW from "wowjs";
import { Marker } from "react-simple-maps";
import { ReactComponent as MarkerSvg } from "./svg-images/PIN.svg";
import { ReactComponent as SmallMarkerSvg } from "./svg-images/PIN (2).svg";
import { ReactComponent as SmallestMarkerSvg } from "./svg-images/PIN (3).svg";
import { ReactComponent as TinyMarkerSvg } from "./svg-images/PIN (4).svg";



import {
  ComposableMap,
  Geographies,
  Geography,
} from "react-simple-maps";

const rounded = (num) => {
  if (num > 1000000000) {
    return Math.round(num / 100000000) / 10 + "Bn";
  } else if (num > 1000000) {
    return Math.round(num / 100000) / 10 + "M";
  } else {
    return Math.round(num / 100) / 10 + "K";
  }
};
const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

const GlobalPresence = ({ setTooltipContent }) => {
  return (
    <div>
      <div className="container">
        <div className="global-header">
          <h1 className="global-title">Our global presence</h1>
          <div className="global_image_container">
            {/* <img src="./assets/images/Map.png" alt="global" className="global-image"/> */}

            <div className="global-image">
              <ComposableMap
                height={500}
                width={1050}
                data-tip=""
                projectionConfig={{ scale: 0 }}
              >
                {/* <ZoomableGroup zoom={1}> */}
                <Geographies geography={geoUrl}>
                  {({ geographies }) =>
                    geographies.map((geo) => (
                      <Geography
                        key={geo.rsmKey}
                        geography={geo}
                        stroke="#ccc"
                        // onMouseEnter={() => {
                        //   const { NAME, POP_EST } = geo.properties;
                        //   setTooltipContent(`${NAME} — ${rounded(POP_EST)}`);
                        // }}
                        style={{
                          default: {
                            fill: "#97F6D3",
                            outline: "none",
                          },
                          hover: {
                            fill: "#97f6d3",
                            outline: "none",
                          },
                          pressed: {
                            fill: "#E42",
                            outline: "none",
                          },
                        }}
                      />
                    ))
                  }
                </Geographies>
                {/* <Marker coordinates={[-101, 53]} fill="#777">
                    <text textAnchor="middle" fill="#F53">
                      Canada
                    </text>
                  </Marker> */}
                <Marker className="markerhover" coordinates={[-130, 70]}>
                  <MarkerSvg r={8} fill="#F53" className="marker" />
                  <text className="hover-marker-text">Canada</text>
                </Marker>
                <Marker className="markerhover" coordinates={[-125,130]}>
                  <MarkerSvg r={8} fill="#F53" className="marker" />
                  <text className="hover-marker-text">US</text>
                </Marker>
                <Marker className="markerhover" coordinates={[-9.080278,70.063202]}>
                  <SmallMarkerSvg r={8} fill="#F53" className="marker" />
                  <text className="hover-marker-text">UK</text>
                </Marker>
                <Marker className="markerhover" coordinates={[40.172779,32.543333]}>
                  <MarkerSvg r={8} fill="#F53" className="marker" />
                  <text className="hover-marker-text">Saudia Arabia</text>
                </Marker>
                <Marker className="markerhover" coordinates={[72.308334,43.920834]}>
                  <MarkerSvg r={8} fill="#F53" className="marker" />
                  <text className="hover-marker-text">Pakistan</text>
                </Marker>
                <Marker className="markerhover" coordinates={[100.398392,24.878978]}>
                  <SmallMarkerSvg r={8} fill="#F53" className="marker" />
                  <text className="hover-marker-text">Thailand</text>
                </Marker>
                <Marker className="markerhover" coordinates={[108.983208,8.345010]}>
                  <SmallMarkerSvg r={8} fill="#F53" className="marker" />
                  <text className="hover-marker-text">Singapore</text>
                </Marker>
                <Marker className="markerhover" coordinates={[55.545284,30.614328,]}>
                  <SmallestMarkerSvg r={8} fill="#F53" className="marker" />
                  <text className="hover-marker-text">Oman</text>
                </Marker>
                <Marker className="markerhover" coordinates={[42.990341,38.378586,]}>
                  <TinyMarkerSvg r={8} fill="#F53" className="marker" />
                  <text className="hover-marker-text">Kuwait</text>
                </Marker>
                <Marker className="markerhover" coordinates={[46.378586,49.990341]}>
                  <SmallestMarkerSvg r={8} fill="#F53" className="marker" />
                  <text className="hover-marker-text">UAE</text>
                </Marker>

                {/* </ZoomableGroup> */}
              </ComposableMap>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlobalPresence;
