//Task 1: Set up API and App Structure
//prompt: Fetch tours from https://course-api.com/react-tours-project using useEffect
//prompt: Store in state: tours, loading, error
import { useState, useEffect } from 'preact/hooks'
//Task 2: Build TourCard Component
//prompt: Create a card component to display a tour's name, info, image, and price
// Include a "Not Interested" button that removes this tour when clicked
import { Gallery } from './components/Gallery'
import preactLogo from './assets/preact.svg'
import viteLogo from '/vite.svg'
import './app.css'

export function App() {
  const [tours, setTours] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

 
    const fetchTours = async () => {
      setLoading(true)
      setError(null)
      try {
        const response = await fetch('/api/react-tours-project')

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
    useEffect(() => {
    fetchTours()
  }, [])

  const removeTour = (id) => {
    setTours((prevTours) => prevTours.filter((tour) => tour.id !== id))
  }
//Task 4: Conditional Rendering
        //prompts:
        // If loading is true, display "Loading..."
        // If error, display an error message
        // Else, render Gallery with tour data
  return (
    <>
    <h1>Tour Destination Selector</h1>
      <div>
        {loading ? (
          <p>Loading tours...</p>
        ) : error ? (
          <p>Error: {error}</p>
        ) : tours.length === 0 ? (
          <div>
          <p>No tours available</p>
          <button onClick={() => fetchTours()}>Refresh</button>
        </div>
        ) : (
          <Gallery tours={tours} onRemove={removeTour} />
        )}
      </div>
    </>
  )
}