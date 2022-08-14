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

function App() {
	return (
		// <div className="App">
		// 	<DoonzgiPedia />
		// </div>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Main />} />
				<Route path="/doongzipedia" element={<Main />} />
			</Routes>
		</BrowserRouter>
	)
}

export default App
