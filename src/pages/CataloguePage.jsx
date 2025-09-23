import {useState} from "react"
import { Link } from "react-router-dom"
import DogList from "../components/DogList";
import SearchField from "../components/SearchField";

const CataloguePage = ({dogs}) => {
    const [searchInput, setSearchInput] = useState('');
        
        if (!dogs) return <p>Loading dogs...</p>;
        
        /**
         * Search for dogs with breed or name
         */
        const filteredDogs = dogs.filter(dog => {
            if (searchInput === '') {
                return dogs;
            }
            else return dog.name.toLowerCase().includes(searchInput.toLowerCase()) ||
            dog.breed.toLowerCase().includes(searchInput.toLowerCase())

            
        })

    return (
        <>
        <main className="catalogueContainer">
            <SearchField searchInput={searchInput} setSearchInput={setSearchInput} />
            <DogList filteredDogs={filteredDogs} />

             </main>
        </>
    )
}
export default CataloguePage