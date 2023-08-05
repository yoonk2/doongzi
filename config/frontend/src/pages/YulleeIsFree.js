import React from "react"
import { useEffect, useState, useRef } from "react"
import styled from "styled-components"
import AOS from "aos"
import "aos/dist/aos.css"

function YulleeIsFree() {
  AOS.init()
  const Main = styled.div`
    background-color: dodgerblue;
  `
  const Section = styled.section`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 5rem;
    font-weight: 700;
    color: orange;
    animation: colorChange 2s infinite;
      @keyframes colorChange {
        0% {
          color: #ff6347;
        }
        25% {
          color: yellow;
        }
        50% {
          color: limegreen;
        }
        75%{
          color: magenta;
        }
        100% {
          color: violet;
        }
    &:nth-child(1) {
      color: #ff8c00;
    }
    &:nth-child(2) {
      color: #ff7f50;
    }
    &:nth-child(3) {
      
    }
  `
	return <Main>
    <Section data-aos="zoom-in-up">율리야!</Section>
    <Section data-aos="zoom-in-up">퇴사를</Section>
    <Section data-aos="zoom-in-up">축하한다!</Section>
    </Main>
}
export default YulleeIsFree