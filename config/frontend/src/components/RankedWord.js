import React from "react"
import { useEffect, useState, useRef } from "react"
import axios from "axios"
import styled from "styled-components"

const Rank = styled.span`
	width: 40px;
	height: 30px;
	padding: 3px;
	box-sizing: border-box;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: #25e84c;
	font-size: 1.2rem;
	line-height: 1.2rem;
	font-weight: bold;
	/* left: 10px; */
	margin-left: -60px;
`
const Votes = styled(Rank)`
	width: ${(props) => props.width};
	background-color: transparent;
	font-weight: 500;
	font-size: 1rem;
	justify-content: flex-start;
	margin: 0;
	// align-self: flex-end;
	position: absolute;
	right: -10px;
	left: auto;
`
function RankedWord(props) {
	const wordRef = useRef()
	// const likeRef = useRef()
	const [word, setWord] = useState(props.word)

	const elevateLetters = () => {
		const letters = wordRef.current.querySelectorAll("span")
		for (let i = 0; i < letters.length; i++) {
			letters[i].classList.add("elevated")
			letters[i].style.transition = `${i * 0.2 + 0.1}s`
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
		let likes = (word.likes += 1)
		axios
			.patch(`https://doongzi.kr/api/words/${id}/`, {
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
			.get(`https://doongzi.kr/api/words/${word.id}/`)
			.then((res) => {
				setWord(res.data)
				// console.log(res.data)
			})
			.catch((err) => {
				// console.log(err)
			})
	}

	useEffect(() => {
		// elevateLetters()
		// moveImage()
		getWord()
	}, [])

	return (
		<div
			className="word-container"
			onMouseEnter={mouseEnterFunc}
			onMouseLeave={mouseLeaveFunc}
			onClick={changeBgColor}
		>
			<Rank>{props.rank}위</Rank>
			<section
				className="word"
				key={word.id}
				ref={wordRef}
				style={{ position: "relative", width: "450px", margin: "0 auto" }}
			>
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
				<Votes width={"100px"} height={"30px"}>
					⇢ {word.likes}표
				</Votes>
			</section>
		</div>
	)
}

export default RankedWord
