// Task 1
// prompt "Fetch tours from https://course-api.com/react-tours-project using useEffect"
// prompt "Store in state: tours, loading, error"
import { useState, useEffect } from 'preact/hooks'
import preactLogo from './assets/preact.svg'
import viteLogo from '/vite.svg'
import './app.css'

export function App() {
  const [count, setCount] = useState(0)
  const [tours, setTours] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null) // State to store errors

  useEffect(() => {
    const fetchTours = async () => {
      setLoading(true)
      setError(null) // Reset error before fetching
      try {
        const response = await fetch('https://course-api.com/react-tours-project')
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        const data = await response.json()
        setTours(data)
      } catch (err) {
        setError(err.message) // Store error message in state
        console.error('Error fetching tours:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchTours()
  }, [])

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} class="logo" alt="Vite logo" />
        </a>
        <a href="https://preactjs.com" target="_blank">
          <img src={preactLogo} class="logo preact" alt="Preact logo" />
        </a>
      </div>
      <h1>Vite + Preact</h1>
      <div class="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/app.jsx</code> and save to test HMR
        </p>
      </div>
      <p>
        Check out{' '}
        <a
          href="https://preactjs.com/guide/v10/getting-started#create-a-vite-powered-preact-app"
          target="_blank"
        >
          create-preact
        </a>
        , the official Preact + Vite starter
      </p>
      <p class="read-the-docs">
        Click on the Vite and Preact logos to learn more
      </p>
      <div>
        {loading ? (
          <p>Loading tours...</p>
        ) : error ? (
          <p>Error: {error}</p>
        ) : (
          <ul>
            {tours.map((tour) => (
              <li key={tour.id}>
                <h2>{tour.name}</h2>
                <p>{tour.info}</p>
                <p>Price: ${tour.price}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  )
}