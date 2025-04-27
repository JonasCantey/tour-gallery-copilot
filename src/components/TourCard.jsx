//Task 2: Build TourCard Component
//prompt: Create a card component to display a tour's name, info, image, and price
import './TourCard.css'

export function TourCard({ id, name, info, image, price, onRemove }) {
  return (
    <div className="tour-card">
      <img src={image} alt={name} className="tour-card-image" />
      <div className="tour-card-content">
        <h2 className="tour-card-title">{name}</h2>
        <p className="tour-card-info">{info}</p>
        <p className="tour-card-price">Price: ${price}</p>
        <button className="tour-card-button" onClick={() => onRemove(id)}>
          Not Interested
        </button>
      </div>
    </div>
  )
}