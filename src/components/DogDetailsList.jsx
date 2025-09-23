const DogDetailsList = ({dog}) => {
    return (
        <>
         <section className="dogDetailsContainer">
                <h1>{dog.name}</h1>
                <p>Breed: {dog.breed}</p>
                <p>Age: {dog.age}</p>
                <p>Sex: {dog.sex}</p>
                <p>Chipnumber: {dog.chipNumber}</p>
                <p>Owner: {dog.owner.name} {dog.owner.lastName}</p>
                <p>Contact: {dog.owner.phoneNumber}</p>
           </section>
        
        </>
    )
}

export default DogDetailsList