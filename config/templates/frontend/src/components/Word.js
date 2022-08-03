import React from "react"
import { useEffect, useState, useRef } from "react"

function Word(props) {
	const word = props.word
	const wordRef = useRef([])
	const elevateLetters = () => {
		wordRef.current.forEach((element) => {
			element.addEventListener("mouseenter", (e) => {
				element.querySelector("span").classList.add("elevated")
			})
		})
	}

	const animateDoong = (time) => {
		const interval = setInterval(() => {
			let randomIndex = Math.floor(Math.random() * wordRef.current.length)
			let randomWord = wordRef.current[randomIndex]
			let randomDoong = randomWord.querySelectorAll(".doong")
			randomDoong[Math.floor(Math.random() * randomDoong.length)].classList.add(
				"doong-animate"
			)
		}, time)
		return () => {
			clearInterval(interval) // timer 함수를 clearInterval을하여 return 한다.
		}
	}

	const stopAnimateDoong = (time) => {
		const interval = setInterval(() => {
			let randomIndex = Math.floor(Math.random() * (48 * 3))
			let randomWord = wordRef.current[randomIndex]
			let randomDoong = randomWord.querySelectorAll(".doong")
			randomDoong[
				Math.floor(Math.random() * randomDoong.length)
			].classList.remove("doong-animate")
		}, time)
		return () => {
			clearInterval(interval) // timer 함수를 clearInterval을하여 return 한다.
		}
	}
	useEffect(() => {
		console.log("word rendered")
		// animateDoong(123)
		// animateDoong(50)
		// animateDoong(64)
		// animateDoong(70)
		// animateDoong(33)
		// setTimeout(() => {
		// 	clearInterval(animateDoong(123))
		// 	clearInterval(animateDoong(50))
		// 	clearInterval(animateDoong(64))
		// 	clearInterval(animateDoong(70))
		// 	clearInterval(animateDoong(33))
		// }, 5000)
		console.log(wordRef)
	}, [])

	return (
		<div className="word-container">
			<p
				className="word"
				key={word.id}
				ref={(element) => (wordRef.current[word.id] = element)}
			>
				{word.kor_word.split("").map((char, index) => (
					<>
						{word.doong_position.includes(index + 1) ? (
							<span className="doong">{char}</span>
						) : (
							<span>{char}</span>
						)}
					</>
				))}
			</p>
			<p className="definition">{word.definition}</p>
		</div>
	)
}

export default Word
