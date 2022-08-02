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

	const wordColumns = document.querySelectorAll(".word-col")
	setTimeout(() => {
		wordColumns[0].scrollTop += 10
	}, 100)
	useEffect(() => {
		getData()
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
