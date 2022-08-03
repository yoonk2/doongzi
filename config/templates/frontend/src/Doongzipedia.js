import React from "react"
import { useEffect, useState, useRef } from "react"
import "./Doongzipedia.css"
import Word from "./components/Word.js"

function DoonzgiPedia() {
	const getData = async () => {
		// const response = await fetch("https://doongzi.works/api/words/")
		const response = await fetch("http://127.0.0.1:8000/api/words/")
		const data = await response.json()
		setWordList(data)
		console.log("success!")
	}
	const [wordList, setWordList] = useState([])

	function shuffle(array) {
		array.sort(() => Math.random() - 0.5)
		return array
	}

	const animateDoong = (time) => {
		const interval = setInterval(() => {
			let randomIndex = Math.floor(Math.random() * (48 * 3))
			let randomWord = document.querySelectorAll(".word")[randomIndex]
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
			let randomWord = document.querySelectorAll(".word")[randomIndex]
			let randomDoong = randomWord.querySelectorAll(".doong")
			randomDoong[
				Math.floor(Math.random() * randomDoong.length)
			].classList.remove("doong-animate")
		}, time)
		return () => {
			clearInterval(interval) // timer 함수를 clearInterval을하여 return 한다.
		}
	}

	let scrollDownList = [true, true, true]
	const scroll = (element, scrollDown) => {
		if (scrollDown) {
			console.log("down", scrollDown)
			element.scrollBy(0, 1)
		} else {
			element.scrollBy(0, -1)
			console.log("up", scrollDown)
		}

		if (element.scrollTop > element.scrollHeight - window.innerHeight * 0.95) {
			scrollDown = false
		}
		if (element.scrollTop === 0) {
			scrollDown = true
			console.log("scrollDown", scrollDown)
		}
		return scrollDown
	}

	let pausedList = [false, false, false]

	const columns = useRef([])

	const autoScroll = () => {
		setInterval(() => {
			if (!pausedList[0]) {
				scrollDownList[0] = scroll(columns.current[0], scrollDownList[0])
			}
			if (columns.current.length > 2) {
				if (!pausedList[1]) {
					scrollDownList[1] = scroll(columns.current[1], scrollDownList[1])
				}
				if (!pausedList[2]) {
					scrollDownList[2] = scroll(columns.current[2], scrollDownList[2])
					console.log("scrollDownList", scrollDownList)
				}
			}
		}, 20)
	}

	const setPaused = () => {
		for (let i = 0; i < pausedList.length; i++) {
			columns.current[i].addEventListener("mouseenter", (e) => {
				pausedList[i] = true
			})
			columns.current[i].addEventListener("mouseleave", (e) => {
				pausedList[i] = false
			})
		}
	}

	useEffect(() => {
		getData()
		animateDoong(123)
		animateDoong(50)
		animateDoong(64)
		animateDoong(70)
		animateDoong(33)
		autoScroll()
		setTimeout(() => {
			clearInterval(animateDoong(123))
			clearInterval(animateDoong(50))
			clearInterval(animateDoong(64))
			clearInterval(animateDoong(70))
			clearInterval(animateDoong(33))
		}, 5000)
		autoScroll()
		setPaused()
	}, [])
	return (
		<>
			<main>
				<div className="word-wrapper">
					<section
						className="word-col"
						ref={(element) => {
							columns.current[0] = element
						}}
					>
						{shuffle(wordList).map((word) => (
							<Word word={word} />
						))}
					</section>
				</div>
				{window.innerWidth > 500 ? (
					<>
						<div className="word-wrapper">
							<section
								className="word-col"
								ref={(element) => {
									columns.current[1] = element
								}}
							>
								{shuffle(wordList).map((word) => (
									<Word word={word} />
								))}
							</section>
						</div>
						<div className="word-wrapper">
							<section
								className="word-col"
								ref={(element) => {
									columns.current[2] = element
								}}
							>
								{shuffle(wordList).map((word) => (
									<Word word={word} />
								))}
							</section>
						</div>
					</>
				) : null}
			</main>
		</>
	)
}

export default DoonzgiPedia
