const designerTitle = document.querySelector(`.designer-title`)
const designerTitleAnchor = designerTitle.firstChild
const developerTitle = document.querySelector(`.developer-title`)
const developerTitleAnchor = developerTitle.firstChild
const designerDetails = document.querySelectorAll(`.designer-detail`)
const developerDetails = document.querySelectorAll(`.developer-detail`)
const studentTitle = document.querySelector(`.student-title`)
const studentTitleAnchor = studentTitle.firstChild
const studentDetails = document.querySelectorAll(`.student-detail`)
const furtherText = document.querySelector(`.further`)

designerTitle.addEventListener("click", () => {
	if (designerDetails[0].classList.contains("hidden")) {
		designerDetails.forEach((item) => item.classList.toggle("hidden"))
		designerTitle.innerHTML = `<a href="https://www.instagram.com/rnjs_dbs/">디자이너</a>다.`
		developerTitleAnchor.classList.add("fade")
		designerTitleAnchor.classList.remove("fade")
	}
})

developerTitle.addEventListener("click", () => {
	if (developerDetails[0].classList.contains("hidden")) {
		developerDetails.forEach((item) => item.classList.toggle("hidden"))
		developerTitle.innerHTML = `<a href="https://github.com/yoonk2">개발자</a>다.`
		developerTitleAnchor.classList.remove("fade")
		studentTitleAnchor.classList.add("fade")
	}
})

studentTitle.addEventListener("click", () => {
	if (studentDetails[0].classList.contains("hidden")) {
		studentDetails.forEach((item) => item.classList.toggle("hidden"))
		studentTitleAnchor.classList.remove("fade")
		// document.querySelector('.doongsite').classList.add('fade');
		furtherText.classList.toggle("hidden")
	}
})

furtherText.addEventListener("click", () => {
	// document.querySelector('.doongsite').classList.remove('fade')
	furtherText.classList.remove("fade")
	furtherText.style.cursor = "default"
	furtherText.innerHTML = `참고로 이 웹사이트에 사용된 <span class="fade">깜박이는</span> 애니메이션은 <a href="https://minguhong.com">minguhong.com</a>에서 제작자의 허락을 받고 훔쳤다.`
})

// 응원하기
const supportBtn = document.querySelector(`.support-btn`)
let supportText = []
supportText[0] = `응원합니다`
supportText[1] = `화이팅`
supportText[2] = `멋져요`
supportText[3] = `좋아요`
supportText[4] = `최고`

supportBtn.innerHTML =
	supportText[Math.floor(Math.random() * supportText.length)]

// supportBtn.addEventListener('click', () => {
//     document.querySelector('.support-yoon').classList.toggle('hidden')
// }

// 응원 ajax
const addSupport = new XMLHttpRequest()
let clicked = false
const onClickSupport = () => {
	let multipleClick = false
	if (clicked) {
		multipleClick = true
	} else {
		clicked = true
	}
	supportBtn.innerHTML =
		supportText[Math.floor(Math.random() * supportText.length)]
	const url = "support-ajax/"
	let name = "someone"
	addSupport.open("POST", url, true)
	addSupport.setRequestHeader(
		"Content-Type",
		"application/x-www-form-urlencoded"
	)
	addSupport.send(JSON.stringify({ name: name }))
	const thanks = document.querySelector(`.thanks`)
	let opacity = 0
	const interval = setInterval(() => {
		if (opacity < 1) {
			opacity += 0.1
			thanks.style.opacity = opacity
		} else {
			clearInterval(interval)
		}
	}, 40)
	const randomDegree = Math.floor(Math.random() * 60)
	thanks.querySelectorAll("span").forEach((item, index) => {
		const randomColor = Math.floor(Math.random() * 16777215).toString(16)
		item.style.color = "#" + randomColor
		item.style.transform = `rotate(${index * 14 - randomDegree}deg)`
	})
	setTimeout(() => {
		if (!multipleClick) {
			let opacity = 1
			const interval = setInterval(() => {
				if (opacity > 0) {
					opacity -= 0.1
					thanks.style.opacity = opacity
				} else {
					clearInterval(interval)
				}
			}, 40)
			thanks.querySelectorAll("span").forEach((item, index) => {
				item.style.transform = `rotate(${-randomDegree}deg)`
			})
			clicked = false
		}
	}, 2000)
}
const supportHandleResponse = () => {
	if (addSupport.status < 400) {
		const supports = JSON.parse(addSupport.responseText)["supports"]
		const supportNum = document.querySelector(`#supportNum`)
		supportNum.innerHTML = `${supports}번`
	}
}
addSupport.onreadystatechange = () => {
	if (addSupport.readyState == XMLHttpRequest.DONE) {
		supportHandleResponse()
	}
}
