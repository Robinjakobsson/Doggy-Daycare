
import { Link } from "react-router-dom"
import DogDetailPage from "./DogDetailPage"

const WelcomePage = () => {
    

    return (
        <>
        <section className="welcomeSection">
            <h1>Welcome to Doggy DayCare</h1>
            <Link to={{pathname: "/cataloguePage"}}>Enter</Link>
            </section>
        </>
    )
}
export default WelcomePage