import { useParams } from "react-router-dom"
import DogDetailsList from "../components/dogDetailsList";
import ZoomImage from "../components/ZoomImage";

const DogDetailPage = ({dogs}) => {
    let params = useParams();
    const dogId = parseInt(params.id)

    const dog = dogs.find(dog => dog.id === dogId)

    if (!dogs) return <p>Loading dog...</p>;

    return (
        <>
           <section className="componentContainer">
            <ZoomImage dog={dog} />  
            <DogDetailsList dog={dog} />
           </section>
        </>
    )
}
export default DogDetailPage