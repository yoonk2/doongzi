import React from "react"
import { useEffect, useState } from "react"

function DoonzgiPedia() {
	const getData = async () => {
		const response = await fetch("http://127.0.0.1:8000/api/words/")
		const data = await response.json()
		setWordList(data)
		console.log(data)
	}
	const [wordList, setWordList] = useState([])
	useEffect(() => {
		getData()
	}, [])
	return (
		<>
			<p>doongzi</p>
			{wordList.map((word) => (
				<p key={word.id}>
					{
						word.length
						// 	for (let i = 0; i < word.length; i++) {
						// 		if (word.doong_position.includes(i)) {
						// 	console.log(i)}
						// }
					}
				</p>
			))}
		</>
	)
}

export default DoonzgiPedia
