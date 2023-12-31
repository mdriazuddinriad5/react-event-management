import { Link } from "react-router-dom";
import Swal from "sweetalert2";



const ViewDetail = ({ detail }) => {

    const { id, name, price, image, description, short_description } = detail;


    const handleAddToLS = () => {
        const addedLSList = [];
        const selectedPackages = JSON.parse(localStorage.getItem('packages'));

        if (!selectedPackages) {
            addedLSList.push(detail);
            const listStringified = JSON.stringify(addedLSList);
            localStorage.setItem('packages', listStringified);
            Swal.fire(
                'Good job!',
                'You have purchased this package successfully!',
                'success'
            )
        } else {
            const isExist = selectedPackages.find(packages => packages.id === id);

            if (!isExist) {
                addedLSList.push(...selectedPackages, detail);
                const listStringified = JSON.stringify(addedLSList);
                localStorage.setItem('packages', listStringified);
                Swal.fire(
                    'Good job!',
                    'You have purchased this package successfully!',
                    'success'
                )
            } else {
                Swal.fire(
                    'Sorry!',
                    'Already purchased!',
                    'error'
                )
            }

        }
    }


    return (
        <div className="w-5/6 my-20 mx-auto">

            <div className="relative flex lg:w-full  mx-auto flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md lg:mt-10">
                <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
                    <img
                        src={image}
                        alt="image"
                        className="h-full w-full object-cover"
                    />
                </div>
                <div className="p-6">
                    <h6 className="mb-4 block font-sans text-base md:font-semibold md:uppercase leading-relaxed tracking-normal text-red-900 antialiased">
                        {name}
                    </h6>

                    <p className="mb-8 hidden md:block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
                        {description}
                    </p>

                    <p className="mb-4 md:hidden block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
                        {short_description}
                    </p>

                    <div className="flex flex-col lg:flex-row lg:justify-between items-center">
                        <p className="mb-4 md:mb-0">Price: ${price}</p>
                        <button onClick={handleAddToLS} className='md:btn px-3 py-2 rounded-lg bg-red-400 text-sm'>
                            Buy this package
                        </button>

                    </div>

                </div>
            </div>



        </div>
    );
};

export default ViewDetail;