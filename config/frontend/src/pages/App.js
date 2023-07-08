import logo from "./logo.svg"
import "./App.css"
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link,
	BrowserRouter,
} from "react-router-dom"
import Main from "./Main"
import Yoon from "./Yoon"
import NotFound from "./NotFound"

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Main />} />
				<Route path="/doongzipedia" element={<Main />} />
				<Route path="/yooon" element={<Yoon />} />
				<Route path='*' element={<NotFound />}/>
			</Routes>
		</BrowserRouter>
	)
}

export default App
