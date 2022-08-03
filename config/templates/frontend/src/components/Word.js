import React from "react"
import { useEffect, useState, useRef } from "react"

function Word(props) {
	const word = props.word
	const wordRef = useRef()

	// const animateDoong = () => {
	// 	const doong = wordRef.current.querySelectorAll(".doong")
	// 	doong.forEach((element) => {
	// 		// element.classList.add("doong-animate")
	// 		element.style.animationDelay = `${Math.random()}s`
	// 		console.log("doong")
	// 	})
	// }

	const elevateLetters = () => {
		const letters = wordRef.current.querySelectorAll("span")
		for (let i = 0; i < letters.length; i++) {
			letters[i].classList.add("elevated")
			letters[i].style.transition = `${i * 0.2}s`
			letters[i].classList.remove("doong-animate")
		}
	}
	const removeElevatedLetters = () => {
		const letters = wordRef.current.querySelectorAll("span")
		for (let i = 0; i < letters.length; i++) {
			letters[i].classList.remove("elevated")
			if (letters[i].classList.contains("doong")) {
				letters[i].classList.add("doong-animate")
			}
		}
		console.log("elevated")
	}
	useEffect(() => {
		// elevateLetters()
		console.log("dfjklfsjfklsj;")
	}, [])

	return (
		<div className="word-container">
			<p
				className="word"
				key={word.id}
				ref={wordRef}
				onMouseEnter={elevateLetters}
				onMouseLeave={removeElevatedLetters}
			>
				{word.kor_word.split("").map((char, index) => (
					<>
						{word.doong_position.includes(index + 1) ? (
							<span
								className="doong doong-animate"
								key={index}
								style={{ animationDelay: `${Math.random()}s` }}
							>
								{char}
							</span>
						) : (
							<span key={index}>{char}</span>
						)}
					</>
				))}
			</p>
			<p className="definition">{word.definition}</p>
		</div>
	)
}

export default Word
