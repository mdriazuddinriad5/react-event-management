import { useLoaderData } from "react-router-dom";
import Banner from "../../Components/Banner/Banner";
import NavBar from "../../Components/NavBar/NavBar";
import Services from "../../Components/Services/Services";
import Welcome from "../../Components/Welcome/Welcome";
import Testimonial from "../../Components/Testimonial/Testimonial";
import { Helmet } from "react-helmet-async";




const Home = () => {

    const services= useLoaderData();

    
    return (
        <div>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <NavBar></NavBar>
            <Banner></Banner>
            <Welcome></Welcome>
            <Services services={services}></Services>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;