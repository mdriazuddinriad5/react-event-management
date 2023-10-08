import { useState } from "react";
import Service from "./Service";

const Services = ({ services }) => {
    const [showAll, setShowAll]= useState(false);
    return (
        <div className="my-10">
            <h2 className="text-3xl text-center font-extrabold">Our Services</h2>
            <div className="grid grid-cols-3 gap-10 mt-8 w-5/6 mx-auto">
                {
                    showAll? services.map(service => <Service service={service} key={service.id}></Service>) 
                    : services.slice(0,6).map(service => <Service service={service} key={service.id}></Service>) 
                }

                

            </div>

            <button onClick={()=> setShowAll(!showAll)} className="btn bg-gray-600 my-8 mx-auto flex justify-center"><p>{showAll? 'Show Less' : 'Show All' }</p></button>

        </div>
    );
};

export default Services;