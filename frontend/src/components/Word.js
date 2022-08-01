import React from "react"
import { useEffect, useState } from "react"

function Word(props) {
	const word = props.word
	return (
		<>
			<p className="word" key={word.id}>
				{word.kor_word.split("").map((char, index) => (
					<>
						{word.doong_position.includes(index + 1) ? (
							<span className="doong">{char}</span>
						) : (
							<span>{char}</span>
						)}
					</>
				))}
			</p>
			<p className="definition">{word.definition}</p>
		</>
	)
}

export default Word
