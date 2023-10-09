import { useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import socialEvent from '../../assets/social-event5.jpg'
import Aos from "aos";
import 'aos/dist/aos.css'


const Banner = () => {

    useEffect(()=>{
        Aos.init({duration: 2000});
    },[])


    const [imageLoaded, setImageLoaded] = useState(false);
    return (
        <div className="mt-2" data-aos='fade-right'>
            <div className="hero h-[50vh] lg:h-[70vh] relative">


                <LazyLoadImage
                    src={socialEvent}
                    alt="Background Image"
                    effect="opacity"
                    className={`absolute inset-0 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
                    style={{
                        width: '100%',
                        height: '100%',
                    }}
                    onLoad={() => {

                        setImageLoaded(true);
                    }}
                />


                <div className="bg-white bg-opacity-30 absolute inset-0"></div>
                <div className="hero-content text-center text-neutral-content relative z-10">
                    <div>
                        <h1  data-aos='fade-up' className="mb-4 md:mb-6 lg:mb-10 text-base md:text-2xl lg:text-5xl font-bold"><span className="text-orange-700">From set up</span> <br />To clean up</h1>
                        <p data-aos='fade-down' className="text-gray-700 bg-blue-300 text-lg font-extrabold">Planning an event is not easy, but with EventElegance, we make it effortless and unforgettable for you!</p>

                    </div>
                    
                </div>
                
            </div>


        </div>
    );
};

export default Banner;