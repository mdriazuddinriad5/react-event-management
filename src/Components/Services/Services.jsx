import { useEffect, useState } from "react";
import Service from "./Service";
import Aos from "aos";
import 'aos/dist/aos.css'

const Services = ({ services }) => {
    const [showAll, setShowAll] = useState(false);

    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])
    return (
        <div className="mt-10 mb-20">
            <h2 className="text-3xl text-center font-extrabold">Our Services</h2>
            <div data-aos='fade-up' className="grid lg:grid-cols-3 grid-cols-1 gap-10 mt-8 w-5/6 mx-auto">
                {
                    showAll ? services.map(service => <Service service={service} key={service.id}></Service>)
                        : services.slice(0, 6).map(service => <Service service={service} key={service.id}></Service>)
                }



            </div>

            <button onClick={() => setShowAll(!showAll)} className="btn bg-gray-600 my-8 mx-auto flex justify-center"><p>{showAll ? 'Show Less' : 'Show All'}</p></button>

        </div>
    );
};

export default Services;