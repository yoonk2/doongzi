import React from "react"
import { useEffect, useState } from "react"
import "./Doongzipedia.css"
import Word from "./components/Word.js"

function DoonzgiPedia() {
	const getData = async () => {
		// const response = await fetch("https://doongzi.works/api/words/")
		const response = await fetch("http://127.0.0.1:8000/api/words/")
		const data = await response.json()
		setWordList(data)
	}
	const [wordList, setWordList] = useState([])

	function shuffle(array) {
		array.sort(() => Math.random() - 0.5)
		return array
	}

	// setTimeout(() => {
	// 	wordColumns[0].scrollTop += 10
	// }, 100)

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

	function scrollDown(amount, element) {
		let currentScrollTop = element.scrollTop
		if (currentScrollTop >= element.scrollHeight - window.innerHeight) {
			element.scrollTo({
				top: 0,
				behavior: "smooth",
			})
		} else {
			element.scrollTo({
				top: (currentScrollTop += amount),
				behavior: "smooth",
			})
		}
	}
	// setInterval(() => {
	// 	scrollDown(100)
	// }, 1000)

	const wordColumns = document.querySelectorAll(".word-col")
	wordColumns.forEach((wordColumn) => {
		wordColumn.addEventListener("mouseenter", (e) => {
			scrollDown(100, wordColumn)
		})
	})
	useEffect(() => {
		getData()
		animateDoong(123)
		animateDoong(50)
		animateDoong(64)
		animateDoong(70)
		animateDoong(33)
	}, [])
	return (
		<>
			<main>
				<div className="word-wrapper">
					<section className="word-col">
						{shuffle(wordList).map((word) => (
							<Word word={word} />
						))}
					</section>
				</div>
				{window.innerWidth > 500 ? (
					<>
						<div className="word-wrapper">
							<section className="word-col">
								{shuffle(wordList).map((word) => (
									<Word word={word} />
								))}
							</section>
						</div>
						<div className="word-wrapper">
							<section className="word-col">
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
