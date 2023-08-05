import React from "react"
import { useEffect, useState, useRef } from "react"
import styled from "styled-components"
import AOS from "aos"
import "aos/dist/aos.css"
import freeyullee from "../images/freeyullee.png"

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
    }
  img{
    height: 70vh;
  }
  `
	return <Main>
    <Section data-aos="zoom-in-up"  data-aos-delay="300" >율리야!</Section>
    <Section data-aos="zoom-in-up" data-aos-delay="300" >퇴사를</Section>
    <Section data-aos="zoom-in-up"  data-aos-delay="300">축하한다!</Section>
    <Section data-aos="zoom-in-up"  data-aos-delay="300"><img src={freeyullee}/></Section>
    </Main> 
}
export default YulleeIsFree