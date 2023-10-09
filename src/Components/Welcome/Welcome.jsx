import { Link } from 'react-router-dom';
import image from '../../assets/event.jpg'

const Welcome = () => {
    return (
        <div className="relative flex w-full max-w-[48rem] mx-auto flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md mt-10">
            <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
                <img
                    src={image}
                    alt="image"
                    className="h-full w-full object-cover"
                />
            </div>
            <div className="p-6">
                <h6 className="mb-4 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal text-red-900 antialiased">
                Welcome to EventElegance
                </h6>
               
                <p className="mb-8 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
                Your premier destination for crafting extraordinary social events. Our team of experts is dedicated to making your dreams come true with meticulous attention to detail, creativity, and unparalleled style. Let&apos;s create unforgettable memories together.
                </p>
                <a className="inline-block" href="#">
                    <Link to={'/about'}><button className='btn bg-green-200'>
                        MORE ABOUT US
                    </button></Link>
                    
                </a>
            </div>
        </div>
    );
};

export default Welcome;