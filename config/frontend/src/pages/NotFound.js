import React from "react"
import { useEffect, useState, useRef } from "react"
import "./NotFound.css"

function NotFound() {
    const sadEmojiRef = useRef()
    let fontSize = 64
    const onClickNo = () => {
        // scale sadEmoji by 1.2
        console.log(sadEmojiRef.current.style)
        console.log(sadEmojiRef.current.style.fontSize)
        console.log(fontSize)
        fontSize *= 1.2
        sadEmojiRef.current.style.fontSize = fontSize + "px"
    }

	return <>
    <section className="text">
        <div className="sadCont">
            <p className="sadEmoji" ref={sadEmojiRef} >🥲</p>
        </div>
        <p>페이지를 찾을 수 없습니다.<br/>대신 둥지의 야심작, <a className="fade" href="/doongzipedia">둥키백과</a>를 보러 가시면 어떨까요?</p>
        <section className="action">
            <div className="buttons">
                <a className="button" href="/doongzipedia">좋아요</a>
                <a className="button" href="/doongzipedia">가볼래요</a>
            </div>
            <span className="no" onClick={onClickNo}>싫어요</span>
        </section>
    </section>
    </>
}
export default NotFound