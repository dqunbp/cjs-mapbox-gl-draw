import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";

import MapboxDraw from "@dqunbp/cjs-mapbox-gl-draw";
import { useEffect, useState } from "react";

import dynamic from "next/dynamic";

const MapboxMap = dynamic(() => import("./map"), {
  ssr: false,
});

export default function Home() {
  const [map, setMap] = useState(null);

  useEffect(() => {
    if (!map) return;

    const draw = new MapboxDraw();

    map.addControl(draw);
  }, [map]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Next.js with Mapbox Draw!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>CommonJS converted mapbox-gl-draw</h1>
      <div className={styles.main}>
        <MapboxMap setMapAPI={setMap} />
      </div>
    </div>
  );
}
