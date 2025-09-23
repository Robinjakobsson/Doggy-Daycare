import DogDetailPage from "../pages/DogDetailPage"
import { Link } from "react-router-dom"

const DogList = ({filteredDogs}) => {
    return (
        <>
         <ul className="listSection">
                {filteredDogs.map((dog) => (
                <li key={dog.id}>
                    <img src={dog.img} alt="" />
                    <h2>{dog.name}</h2>
                    <p>Breed: {dog.breed}</p>
                    <p>Sex: {dog.sex}</p>
                    <Link className="link" to={`/DogDetailPage/${dog.id}`}>More info</Link>                    
                </li>
             ))}

             </ul>
        
        </>
    )
}
export default DogList