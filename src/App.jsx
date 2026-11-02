import { useState } from 'react'
import './App.css'

function saveToServer() {
  return new Promise((resolve) => setTimeout(resolve, 2000))
}

function App() {
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')
  const [requests, setRequests] = useState(0)

  async function handleSave() {
    setMessage('')
    setRequests((requests) => requests + 1)
    await saveToServer()
    setMessage(`Saved "${name}"`)
  }

  return (
    <div className="card">
      <h1>Profile settings</h1>
      <p>
        <label>
          Display name{' '}
          <input value={name} onChange={(e) => setName(e.target.value)} />
        </label>
      </p>
      <button onClick={handleSave}>Save</button>
      {message && <p>{message}</p>}
      <p className="read-the-docs">Save requests sent: {requests}</p>
    </div>
  )
}

export default App
