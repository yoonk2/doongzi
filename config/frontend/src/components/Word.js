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
			letters[i].style.transition = `${i * 0.2 + 0.1}s`
			letters[i].classList.remove("doong-animate")
		}
		wordRef.current.parentElement.querySelector(".word-type").style.opacity =
			"1"
	}
	const removeElevatedLetters = () => {
		const letters = wordRef.current.querySelectorAll("span")
		for (let i = 0; i < letters.length; i++) {
			letters[i].classList.remove("elevated")
			if (letters[i].classList.contains("doong")) {
				letters[i].classList.add("doong-animate")
			}
		}
		wordRef.current.parentElement.querySelector(".word-type").style.opacity =
			"0"
	}

	// const blurWords = (wordType) => {
	// 	if (word.word_type !== wordType) {
	// 		wordRef.current.parentElement.classList.add("blur")
	// 	}
	// 	const allWords =
	// 		wordRef.current.parentElement.parentElement.querySelectorAll(
	// 			".word-container"
	// 		)
	// 	// const diffType = allWords.filter((word) => word.word_type !== wordType)
	// 	const diffType = allWords.
	// 	diffType.forEach((word) => {
	// 		word.classList.add("blur")
	// 	})
	// }

	// const blurWords = () => {
	// 	const allWords =
	// 		wordRef.current.parentElement.parentElement.querySelectorAll(
	// 			".word-container"
	// 		)
	// 	setTimeout(() => {
	// 		allWords.forEach((word) => {
	// 			word.classList.add("blur")
	// 		})
	// 	}, 2000)
	// }

	const changeBgColor = () => {
		if (word.word_type === "new_word") {
			document.body.style.backgroundColor = "#25e84c"
			setTimeout(() => {
				document.body.style.backgroundColor = "#fff"
			}, 3000)
		}
	}

	const moveImage = () => {
		const image = wordRef.current.parentElement.querySelector("img")
		if (image) {
			document.addEventListener("mousemove", (e) => {
				const x = e.movementX * 10
				const y = e.movementY * 10
				image.style.transform = `translate(${x}px, ${y}px)`
			})
		}
	}

	const mouseEnterFunc = () => {
		elevateLetters()
	}
	const mouseLeaveFunc = () => {
		removeElevatedLetters()
	}
	useEffect(() => {
		// elevateLetters()
		console.log("word loaded")
		moveImage()
	}, [])

	return (
		<div
			className="word-container"
			onMouseEnter={mouseEnterFunc}
			onMouseLeave={mouseLeaveFunc}
			onClick={changeBgColor}
		>
			{word.image ? (
				<img src={word.image} alt={word.word} />
			) : word.link ? (
				<a href={word.link}>
					<img src={word.link} alt={word.word} />
				</a>
			) : null}
			<section className="word" key={word.id} ref={wordRef}>
				{word.kor_word.split("").map((char, index) =>
					word.doong_position ? (
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
					) : null
				)}
				{word.word_type === "starts_with" ? (
					<p
						className="word-type starts-with"
						// onClick={blurWords(word.word_type)}
					>
						둥으로 시작하는
					</p>
				) : word.word_type === "ends_with" ? (
					<p
						className="word-type ends-with"
						// onClick={blurWords(word.word_type)}
					>
						둥으로 끝나는
					</p>
				) : word.word_type === "contains" ? (
					<p
						className="word-type contains"
						// onClick={blurWords(word.word_type)}
					>
						둥을 포함하는
					</p>
				) : word.word_type === "new_word" ? (
					<p
						className="word-type new-word"
						// onClick={blurWords(word.word_type)}
					>
						신조어
					</p>
				) : null}
			</section>

			<p className="definition">{word.definition}</p>
		</div>
	)
}

export default Word
