import React from "react"
import { useEffect, useState, useRef } from "react"
import "./Doongzipedia.css"
import Word from "../components/Word.js"
import RankedWord from "../components/RankedWord.js"
import RankingModal from "../components/RankingModal.js"
import styled from "styled-components"

function DoonzgiPedia() {
	const getData = async () => {
		const response = await fetch("https://doongzi.works/api/words/")
		// const response = await fetch("http://127.0.0.1:8000/api/words/")
		const data = await response.json()
		setWordList(data)
	}
	const [wordList, setWordList] = useState([])

	function shuffle(array) {
		array.sort(() => Math.random() - 0.5)
		return array
	}

	let scrollDownList = [true, true, true]
	const scroll = (element, scrollDown) => {
		if (element) {
			if (scrollDown) {
				element.scrollBy(0, 0.5)
			} else {
				element.scrollBy(0, -0.5)
			}

			if (
				element.offsetHeight + element.scrollTop + 1 >=
				element.scrollHeight
			) {
				scrollDown = false
			}
			if (element.scrollTop === 0) {
				scrollDown = true
			}
			return scrollDown
		}
	}

	const columns = useRef([])
	let pausedList = [false, false, false]

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
				}
			}
		}, 30)
	}

	const setPaused = () => {
		for (let i = 0; i < columns.current.length; i++) {
			columns.current[i].addEventListener("mouseenter", (e) => {
				pausedList[i] = true
			})
			columns.current[i].addEventListener("mouseleave", (e) => {
				pausedList[i] = false
			})
		}
	}

	const [viewRank, setViewRank] = useState(false)

	const RankingToggleBtn = styled.button`
		position: fixed;
		display: flex;
		justify-content: center;
		align-items: center;
		top: 10px;
		left: 10px;
		z-index: 15;
		width: 30px;
		height: 30px;
		border-radius: 50%;
		/* background-color: #fff; */
		background: none;
		border: none;
	`
	useEffect(() => {
		getData()

		autoScroll()
		setPaused()
	}, [])
	return (
		<>
			<main>
				<RankingToggleBtn onClick={() => setViewRank(!viewRank)}>
					💚
				</RankingToggleBtn>
				<div className="word-wrapper">
					<section
						className="word-col"
						ref={(element) => {
							columns.current[0] = element
						}}
					>
						{shuffle(wordList).map((word) => (
							<Word key={word.id} word={word} />
						))}
					</section>
				</div>
				{window.innerWidth > 768 ? (
					<>
						<div className="word-wrapper">
							<section
								className="word-col"
								ref={(element) => {
									columns.current[1] = element
								}}
							>
								{shuffle(wordList).map((word) => (
									<Word key={word.id} word={word} />
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
									<Word key={word.id} word={word} />
								))}
							</section>
						</div>
					</>
				) : null}
			</main>
			{viewRank ? <RankingModal viewRank={viewRank}></RankingModal> : null}
		</>
	)
}

export default DoonzgiPedia
