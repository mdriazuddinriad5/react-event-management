
const CartDetails = ({ cart }) => {

    const { id, name, price, image, short_description } = cart;

    console.log(cart)

    return (
        <div>
            <div className="flex items-center rounded-lg">
                <div className="relative flex w-full max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                    <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
                        <img
                            src={image}
                            alt="image"
                            className="h-60 w-full object-cover"
                        />
                    </div>
                    <div className="p-6">
                        <h6 className="mb-4 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal text-pink-500 antialiased">
                            {name}
                        </h6>
                        <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                            Lyft launching cross-platform service this week
                        </h4>

                    </div>
                </div>



            </div>

        </div>

    );
};

export default CartDetails;