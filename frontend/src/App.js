import logo from "./logo.svg"
import "./App.css"
import axios from "axios"
import React, { useState, useEffect } from "react"
axios.defaults.xsrfHeaderName = "X-CSRFTOKEN"
axios.defaults.xsrfCookieName = "csrftoken"
function App() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const fetchData = async () => {
    const supports = await axios.get("http://localhost:8000/api/yoon")
    setData(supports.data)
    console.log(supports)
    console.log("supports")
    setLoading(false)
  }
  useEffect(() => {
    console.log("useEffect")
    setLoading(true)
    fetchData()
  }, [])
  return (
    <div>
      <h1>Hello World</h1>
      <h2>{data.length}</h2>
    </div>
  )
}

export default App
