import React from "react"
import { useEffect, useState } from "react"
import "./Doongzipedia.css"
import Word from "./components/Word.js"

function DoonzgiPedia() {
	const getData = async () => {
		const response = await fetch("http://127.0.0.1:8000/api/words/")
		const data = await response.json()
		setWordList(data)
		console.log(data)
	}
	const [wordList, setWordList] = useState([])

	function shuffle(array) {
		array.sort(() => Math.random() - 0.5)
		return array
	}

	useEffect(() => {
		getData()
	}, [])
	return (
		<>
			<main>
				<section className="word-col">
					{shuffle(wordList).map((word) => (
						<Word word={word} />
					))}
				</section>
				{window.innerWidth > 500 ? (
					<>
						<section className="word-col">
							{shuffle(wordList).map((word) => (
								<Word word={word} />
							))}
						</section>
						<section className="word-col">
							{shuffle(wordList).map((word) => (
								<Word word={word} />
							))}
						</section>
					</>
				) : null}
			</main>
		</>
	)
}

export default DoonzgiPedia
