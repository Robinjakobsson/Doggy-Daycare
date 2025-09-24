import {useState} from "react"
import DogList from "../components/DogList";
import SearchField from "../components/SearchField";
import CircularProgress from '@mui/material/CircularProgress';

const CataloguePage = ({dogs}) => {
    const [searchInput, setSearchInput] = useState('');
    const [genderFilter, setGenderFilter] = useState('all');
    const [favorites, setFavorites] = useState([]);
        if (!dogs) return <CircularProgress/>;
        
        /**
         *  Filter dog based on what is searched for, if searchInput & genderFilter = 'all' return all dogs
         * if searchInput is empty and genderFilter is 'male' return all male dogs.
         */

    const filteredDogs = dogs.filter(dog => {
        const search = searchInput.trim().toLowerCase();
        const matchesSearch = 
            dog.name.toLowerCase().includes(search) ||
            dog.breed.toLowerCase().includes(search);

    const matchesGender = 
        genderFilter === 'all' || dog.sex === genderFilter;

  return matchesSearch && matchesGender;
});

    return (
        <>
        
        <main className="catalogueContainer">
            <SearchField searchInput={searchInput} setSearchInput={setSearchInput} />
            <div>
            <button onClick={() => setGenderFilter('all')}>Show all</button>
            <button onClick={() => setGenderFilter('female')}>Female</button>
            <button onClick={() => setGenderFilter('male')}>Male</button>
            </div>
            <DogList filteredDogs={filteredDogs} favorites={favorites} setFavorites={setFavorites} />

             </main>
        </>
    )
}
export default CataloguePage