import { Link } from "react-router-dom"
import DogDetailPage from "../pages/DogDetailPage"

/**
 * List Item Component
 * Test
 */



const ListItem = ({dog, addToFavorites, favorites}) => {
    return (
        <>
        <li key={dog.id}>
            <img src={dog.img} alt={dog.name} />
            <h2>{dog.name}</h2>
            <p>Breed: {dog.breed}</p>
            <p>Present: {dog.present.toString()}</p>
            <button onClick={() => addToFavorites(dog.id)} className="favoritesBtn">
            {favorites.includes(dog.id) ? 'Remove favorite' : 'Favorite'}   
            </button>
            <Link className="link" to={`/DogDetailPage/${dog.id}`}>More info</Link>                    
        </li>
        
        </>
    )
}
export default ListItem