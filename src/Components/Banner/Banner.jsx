import { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
// import 'react-lazy-load-image-component/src/effects/opacity.css';


const Banner = () => {

    const [imageLoaded, setImageLoaded] = useState(false);
    return (
        <div>
            <div className="hero lg:h-[50vh] relative">
             
    
                <LazyLoadImage
                    src="https://i.ibb.co/8mgYCY3/fc1f79e18cdc1a12320b9b10ec3e253d.jpg"
                    alt="Background Image"
                    effect="opacity" // Optional effect
                    className={`absolute inset-0 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
                    style={{
                        width: '100%', // Ensure the LazyLoadImage occupies the same width
                        height: '100%', // Ensure the LazyLoadImage occupies the same height
                    }}
                    onLoad={() => {
                        // Handle actions after the image has loaded
                        setImageLoaded(true); // Update the state to show the image
                    }}
                />


               {/*  <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: 'url(https://i.ibb.co/8mgYCY3/fc1f79e18cdc1a12320b9b10ec3e253d.jpg)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                ></div> */}
                <div className="bg-white bg-opacity-50 absolute inset-0"></div>
                <div className="hero-content text-center text-neutral-content relative z-10">
                    <div>
                        <h1 className="mb-4 md:mb-6 lg:mb-10 text-base md:text-2xl lg:text-5xl font-bold">I Grow By Helping People In Need</h1>

                    </div>
                </div>
            </div>


        </div>
    );
};

export default Banner;