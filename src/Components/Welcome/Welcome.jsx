import { Link } from 'react-router-dom';
import image from '../../assets/event.jpg'

const Welcome = () => {
    return (
        <div className="lg:flex w-full mx-auto lg:w-4/6 my-4 lg:my-20">
        <div className="lg:w-2/5 w-full m-0 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
            <img
                src={image}
                alt="image"
                className="h-full lg:w-full object-cover"
            />
        </div>
        <div className="p-6">
            <h6 className="mb-4 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal text-red-900 antialiased">
                Welcome to EventElegance
            </h6>
           
            <p className="mb-8 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
                Your premier destination for crafting extraordinary social events. Our team of experts is dedicated to making your dreams come true with meticulous attention to detail, creativity, and unparalleled style. Let&apos;s create unforgettable memories together.
            </p>
            <Link to={'/about'}>
                <button className='btn bg-green-200'>
                    MORE ABOUT US
                </button>
            </Link>
        </div>
    </div>
    
    );
};

export default Welcome;