import React from "react";
import { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import icnLink from "../images/link.svg"

const Main = styled.div`
    width: 6rem;
    height: 3rem;
    display: flex;
    justify-content: center;
      position: relative;
      align-items: center;
    a {
      text-decoration: none;
    }
    .workTitle {
      display: flex;
      gap: 0.5rem;
      align-items: flex-start;
      position: relative;
      transition: transform 0.3s, opacity 0.2s;
    }
    p {
      color: #000;
      text-align: center;
      font-size: 1.125rem;
      font-weight: 700;
      margin: 0;
    }
    img.workImg {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      object-fit: contain;
      opacity: 0;
      transform: translateY(-20px);
      transition: transform 0.3s, opacity 0.2s;
      z-index: -1;
    }
    img.icnLink {
      margin-top: 0.0625rem;
    }
 
  .hoverImg{
      opacity: 1 !important;
      transform: translateY(0px) !important;
  }
  .hoverTitle {
    opacity: 0;
    transform: translateY(20px);
  }
  `


const WorkItem = (props) => {
    const imageRef = useRef()
    const titleRef = useRef()
    const showImg = () => {
        imageRef.current.classList.add("hoverImg")
        titleRef.current.classList.add("hoverTitle")
    }
    const hideImg = () => {
        imageRef.current.classList.remove("hoverImg")
        titleRef.current.classList.remove("hoverTitle")
    }

    useEffect(() => {
        props.shown&&showImg()
    }, [])
    
    
    return (
        <Main className="grid-item" onMouseEnter={showImg} onMouseLeave={hideImg}>
                {props.work.link ? (
                  <a href={props.work.link}>
                    <img className="workImg" src={props.work.image} alt={props.work.title} ref={imageRef}/>
                    <div className="workTitle" ref={titleRef}>
                      <p>{props.work.title}</p>
                      <img className="icnLink" src={icnLink} alt="link" />
                    </div>
                  </a>
                ) : (
                  <>
                    <img className="workImg" src={props.work.image} alt={props.work.title} ref={imageRef}/>
                    <div className="workTitle" ref={titleRef}>
                    <p>{props.work.title}</p>
                    </div>
                  </>
                )}
              </Main>
    )
}

export default WorkItem