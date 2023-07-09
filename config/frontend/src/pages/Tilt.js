import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

function Tilt() {
  const [gyroData, setGyroData] = useState(null);
  const circle1Ref = useRef();
  const circle2Ref = useRef();

  const Circle = styled.div`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-color: #25e84c;
    border: none;
    position: absolute;
    top: 30vh;
    left: 50%;
  `;
  const Circle2 = styled.div`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-color: rgb(50, 100, 255);    
    mix-blend-mode: color-dodge;
    border: none;
    position: absolute;
    top: 25vh;
    left: 50%;
  `;

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
    circle1Ref.current.style.transform = `translate(0, ${event.beta}px)`;
    circle2Ref.current.style.transform = `translate(0, ${-event.beta}px)`;
  };

  const moveCircle = (event) => {
    circle1Ref.current.style.transform = `translate(0, ${event.beta}px)`;
    circle2Ref.current.style.transform = `translate(0, ${-event.beta}px)`;
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
            <li>Alpha: {Math.round(gyroData.alpha)}</li>
            <li>Beta: {Math.round(gyroData.beta)}</li>
            <li>Gamma: {Math.round(gyroData.gamma)}</li>
          </ul>

        )}

        <Circle ref={circle1Ref}/>
        <Circle2 ref={circle2Ref}/>
      </section>
    </>
  );
}

export default Tilt;