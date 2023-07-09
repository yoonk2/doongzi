import React, { useEffect, useRef, useState } from "react";

function Tilt() {
  const [gyroData, setGyroData] = useState(null);
  const numDisplayRef = useRef()

  const requestOrientationPermission = () => {
    DeviceOrientationEvent.requestPermission()
      .then((response) => {
        if (response === "granted") {
          window.addEventListener("deviceorientation", handleOrientation);
          handleOrientation()
        }
      })
      .catch(console.error);
  };

  const handleOrientation = (event) => {
    const { alpha, beta, gamma } = event;
    setGyroData({ alpha, beta, gamma });
    numDisplayRef.current.innerHTML = `alpha: ${alpha}, beta: ${beta}, gamma: ${gamma}`
  };

  useEffect(() => {
    return () => {
      window.removeEventListener("deviceorientation", handleOrientation);
    };
  }, []);

  return (
    <>
      <section className="text">
        하이
        <button onClick={requestOrientationPermission}>퍼미션</button>
        {gyroData && (
          <ul>
            <li>Alpha: {gyroData.alpha}</li>
            <li>Beta: {gyroData.beta}</li>
            <li>Gamma: {gyroData.gamma}</li>
          </ul>
        )}
        <p ref={numDisplayRef}>0</p>
      </section>
    </>
  );
}

export default Tilt;