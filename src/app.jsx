//Task 1: Set up API and App Structure
//prompt: Fetch tours from https://course-api.com/react-tours-project using useEffect
//prompt: Store in state: tours, loading, error
import { useState, useEffect } from 'preact/hooks'
//Task 2: Build TourCard Component
//prompt: Create a card component to display a tour's name, info, image, and price
// Include a "Not Interested" button that removes this tour when clicked
import { TourCard } from './components/TourCard'
import preactLogo from './assets/preact.svg'
import viteLogo from '/vite.svg'
import './app.css'

export function App() {
  const [tours, setTours] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchTours = async () => {
      setLoading(true)
      setError(null)
      try {
        const response = await fetch('https://course-api.com/react-tours-project')
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        const data = await response.json()
        setTours(data)
      } catch (err) {
        setError(err.message)
        console.error('Error fetching tours:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchTours()
  }, [])

  const removeTour = (id) => {
    setTours((prevTours) => prevTours.filter((tour) => tour.id !== id))
  }

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
        <p>Edit <code>src/app.jsx</code> and save to test HMR</p>
      </div>
      <div>
        {loading ? (
          <p>Loading tours...</p>
        ) : error ? (
          <p>Error: {error}</p>
        ) : tours.length === 0 ? (
          <p>No tours available</p>
        ) : (
          <ul>
            {tours.map((tour) => (
              <li key={tour.id}>
                <TourCard
                  id={tour.id}
                  name={tour.name}
                  info={tour.info}
                  image={tour.image}
                  price={tour.price}
                  onRemove={removeTour}
                />
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  )
}