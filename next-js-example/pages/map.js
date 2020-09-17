import { useRef } from "react";
import styles from "../styles/Home.module.css";

import { useMapboxGl } from "use-mapbox-gl";

const osmStyle = {
  version: 8,
  sources: {
    osm: {
      type: "raster",
      tiles: [
        "https://a.tile.openstreetmap.org/{z}/{x}/{y}.png",
        "https://b.tile.openstreetmap.org/{z}/{x}/{y}.png",
        "https://c.tile.openstreetmap.org/{z}/{x}/{y}.png",
      ],
      tileSize: 256,
    },
  },
  layers: [
    {
      id: "osm",
      source: "osm",
      type: "raster",
    },
  ],
};

const Map = ({ setMapAPI }) => {
  const containerRef = useRef();

  useMapboxGl(
    containerRef,
    { center: [55, 60], zoom: 4, style: osmStyle },
    setMapAPI
  );

  return <div className={styles.mapboxmap} ref={containerRef} style={{}}></div>;
};

export default Map;
