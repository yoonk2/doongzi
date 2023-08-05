import React from "react";
import { useEffect, useState, useRef } from "react";
// import "./NewMain.css";
import { Link } from "react-router-dom";
import styled from "styled-components";

import MainContents from "../components/MainContents";

function NewMain() {
  const [gyroData, setGyroData] = useState(null);

  const requestOrientationPermission = () => {
    DeviceOrientationEvent.requestPermission()
      .then((response) => {
        if (response === "granted") {
          window.addEventListener("deviceorientation", handleOrientation);
        }
      })
      .catch(console.error);
  };

  const handleOrientation = (event) => {
    const { alpha, beta, gamma } = event;
    setGyroData({ alpha, beta, gamma });
  };


  useEffect(() => {
    return () => {
      window.removeEventListener("deviceorientation", handleOrientation);
    };
  }, []);

  return (
    <>
      <MainContents />
      <section className="text">
        <button onClick={requestOrientationPermission}>퍼미션</button>
        {gyroData && (
          <>
            <ul>
              <li>Alpha: {Math.round(gyroData.alpha)}</li>
              <li>Beta: {Math.round(gyroData.beta)}</li>
              <li>Gamma: {Math.round(gyroData.gamma)}</li>
            </ul>
          </>

        )}


      </section>
    </>
  );
}

export default NewMain;