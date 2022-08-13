import React from "react"
import RankedWord from "../components/RankedWord.js"
import { useEffect, useState, useRef } from "react"
import styled from "styled-components"

function RankingModal() {
	const Ranking = styled.div`
		display: flex;
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100%;
		background-color: white;
		padding: 0 20vw;
		box-sizing: border-box;
		flex-direction: column;
		justify-content: center;
		gap: 10px;
		z-index: 10;
		& > div {
			width: 450px;
			display: flex;
			flex-direction: column;
			justify-content: center;
			margin: 0 auto;
		}
	`
	const getData = async () => {
		const response = await fetch("https://doongzi.works/api/words/")
		// const response = await fetch("http://127.0.0.1:8000/api/words/")
		const data = await response.json()
		setWordList(data)
	}
	const [wordList, setWordList] = useState([])
	let wordRankList = [...wordList]
	wordRankList.sort((a, b) => {
		return b.likes - a.likes
	})
	wordRankList = wordRankList.slice(0, 5)
	useEffect(() => {
		getData()
	}, [])
	return (
		<Ranking>
			<div>
				{wordRankList.map((word, index) => (
					<RankedWord key={word.id} word={word} rank={index + 1} />
				))}
			</div>
		</Ranking>
	)
}

export default RankingModal
