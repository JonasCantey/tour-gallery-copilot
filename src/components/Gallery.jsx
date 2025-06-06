//Task 3: Map Tours in a Gallery Component
//prompt: Create a gallery that maps over the tours array and renders TourCard for each
import { TourCard } from './TourCard'
import './Gallery.css'

export function Gallery({ tours, onRemove }) {
  return (
    <div className="gallery">
      {tours.map((tour) => (
        <TourCard
          key={tour.id}
          id={tour.id}
          name={tour.name}
          info={tour.info}
          image={tour.image}
          price={tour.price}
          onRemove={onRemove}
        />
      ))}
    </div>
  )
}