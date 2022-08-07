import React from "react"
import { useEffect, useState, useRef } from "react"
import axios from "axios"

function Word(props) {
	const wordRef = useRef()
	const likeRef = useRef()
	const [word, setWord] = useState(props.word)
	let likes = word.likes

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

	const likeWord = (id) => {
		likes += 1
		axios
			.patch(`https://doongzi.works/api/words/${id}/`, {
				likes: likes,
			})
			.then((res) => {
				// console.log(res)
				getWord()
			})
			.catch((err) => {
				console.log(err)
			})
	}
	const getWord = () => {
		axios
			.get(`https://doongzi.works/api/words/${word.id}/`)
			.then((res) => {
				setWord(res.data)
			})
			.catch((err) => {
				console.log(err)
			})
	}

	const setHeart = () => {
		const heartList = ["🧡", "💙", "💚", "💛", "💜", "🤎", "❤️", "💖"]
		const heart = heartList[Math.floor(Math.random() * heartList.length)]
		likeRef.current.innerHTML = heart
	}
	useEffect(() => {
		// elevateLetters()
		moveImage()
		setHeart()
	}, [])

	return (
		<div
			className="word-container"
			onMouseEnter={mouseEnterFunc}
			onMouseLeave={mouseLeaveFunc}
			onClick={changeBgColor}
		>
			<button id="likeBtn" onClick={() => likeWord(word.id)}>
				<p ref={likeRef}>❤️</p>
				<p>{likes}</p>
			</button>
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
