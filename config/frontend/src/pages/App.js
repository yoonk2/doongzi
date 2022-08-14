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

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Main />} />
				<Route path="/doongzipedia" element={<Main />} />
				<Route path="/yoon" element={<Yoon />} />
			</Routes>
		</BrowserRouter>
	)
}

export default App
