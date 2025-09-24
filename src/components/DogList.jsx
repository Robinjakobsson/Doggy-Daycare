import ListItem from "./ListItem"
import DogDetailPage from "../pages/DogDetailPage"
import { Link } from "react-router-dom"

const DogList = ({filteredDogs, favorites, setFavorites}) => {

    /**
     * Checking if a dog is already in the favorites array,
     * if not in the array, we add the dogs id to the array.
     */
    const addToFavorites = (dogId) => {
        if (favorites.includes(dogId)) {
            setFavorites(favorites.filter(id => id !== dogId));
        } else {
            setFavorites([...favorites, dogId]);
        }
    }

    return (
        <>
         <ul className="listSection">
                {filteredDogs.map((dog) => (
                <ListItem dog={dog} addToFavorites={addToFavorites} favorites={favorites} />
             ))}

             </ul>
        </>
    )
}
export default DogList