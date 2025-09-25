import {useEffect, useState} from "react"
import DogList from "../components/DogList";
import SearchField from "../components/SearchField";
import CircularProgress from '@mui/material/CircularProgress';

const CataloguePage = ({dogs}) => {
    const [searchInput, setSearchInput] = useState('');
    const [genderFilter, setGenderFilter] = useState('all');
    const [favorites, setFavorites] = useState(() => {
    const savedFavorites = localStorage.getItem('favorites')
        return savedFavorites ? JSON.parse(savedFavorites) : [];
    })

    // saving favorites locally on browser
    useEffect (() => {
        localStorage.setItem('favorites', JSON.stringify(favorites))
    }, [favorites])

        // dont know why this works but it does.
        if (!dogs) return <CircularProgress/>;

        
        /**
         *  Filter dog based on what is searched for, if searchInput is empty & genderFilter = 'all' return all dogs
         * if searchinput is not empty check if name == search
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
            <SearchField 
            searchInput={searchInput} 
            setSearchInput={setSearchInput}
            />

            <section className="genderSection">
            <button onClick={() => setGenderFilter('all')}>Show all</button>
            <button onClick={() => setGenderFilter('female')}>Female</button>
            <button onClick={() => setGenderFilter('male')}>Male</button>
            </section>

            <DogList 
            filteredDogs={filteredDogs}
             favorites={favorites} 
             setFavorites={setFavorites} 
             />
             </main>
        </>
    )
}
export default CataloguePage