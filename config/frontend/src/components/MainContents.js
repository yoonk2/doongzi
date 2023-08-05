import React from "react"
import { useEffect, useState, useRef } from "react"
import styled from "styled-components"
import WorkItem from "./WorkItem"

const Body = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 3.75rem;
`

const Section = styled.section`
  margin-bottom: 5.25rem;
  h1 {
    font-size: 1.5rem;
    font-weight: 700;
    margin: 0;
    padding: 0;
    margin-bottom: 1.25rem;
    color: #000;
    text-align: center;
    line-height: 1.2;
    position: relative;
    z-index: 1;
  }
  .grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 0.75rem;
  }
`

const worksJson = [
  {
    title: "둥키백과",
    image: "http://placekitten.com/50/50",
    link: "/doongzipedia",
    isNew: false,
  },
  {
    title: "둥브제",
    image: "http://placekitten.com/50/50",
    link: "/doongzipedia",
    isNew: false,
  },
  {
    title: "작업실",
    image: "http://placekitten.com/50/50",
    link: "/doongzipedia",
    isNew: false,
  },
  {
    title: "벽돌공",
    image: "http://placekitten.com/50/50",
    link: "/doongzipedia",
    isNew: false,
  },
  {
    title: "파브르",
    image: "http://placekitten.com/50/50",
    isNew: false,
  },
  {
    title: "둥브제",
    image: "http://placekitten.com/50/50",
    link: "/doongzipedia",
    isNew: false,
  },
  {
    title: "번아웃^2",
    image: "http://placekitten.com/50/50",
    link: "/doongzipedia",
    isNew: false,
  },
  {
    title: "둥사이트",
    image: "http://placekitten.com/50/50",
    link: "/doongzipedia",
    isNew: false,
  },
  {
    title: "둥키백과",
    image: "http://placekitten.com/50/50",
    link: "/doongzipedia",
    isNew: false,
  },
  {
    title: "둥키백과",
    image: "http://placekitten.com/50/50",
    link: "/doongzipedia",
    isNew: false,
  },
]
function MainContents() {
    let randNum = Math.floor(Math.random() * worksJson.length)
    const generateRandNum = () => {
        setInterval(() => {
            randNum = Math.floor(Math.random() * worksJson.length)
        }, 1000)
    }
    useEffect(() => {
        generateRandNum()
    }, [])
  return (
    <Body>
      <Section>
        <h1>둥지</h1>
        <p>이채영 이율리 김나연 권윤</p>
      </Section>
      <Section>
        <h1>작업들</h1>
        <div className="grid">
          {worksJson.map((work, index) => {
            let shown = false
            if (index === randNum) {
              shown = true
            }
            return (
              <WorkItem work={work} key={index} shown={shown}/>
            )
          })}
        </div>
      </Section>
      <Section>
        <h1>연락처</h1>
        <a href="mailto:project.doongzi@gmail.com">project.doongzi@gmail.com</a>
        <a href="https://www.instagram.com/project.doongzi/">
          instagram.com/project.doongzi
        </a>
      </Section>
    </Body>
  )
}

export default MainContents
