import { useEffect, useState } from "react";
import CartDetails from "./CartDetails";
import NavBar from "../../Components/NavBar/NavBar";


const ShoppingCart = () => {
    const [packages, setPackages] = useState([]);
    const [noFound, setNoFound] = useState('');
    const [isShown, setIsShown] = useState(false);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        const selectedPackages = JSON.parse(localStorage.getItem('packages'));
        if (selectedPackages) {
            setPackages(selectedPackages);

            const totalPrice = selectedPackages.reduce((prevVal, currentVal) => prevVal + currentVal.price, 0);
            setTotalPrice(totalPrice);

        } else {
            setNoFound('No Data Found')
        }
    }, [])

    return (
        <div>

            <NavBar></NavBar>

            {
                totalPrice>0 && <p className="text-center my-6">Total Price: {totalPrice}</p> 
            }

            {
                noFound ? <p className="h-[80vh] flex justify-center items-center">{noFound}</p> :
                    <div>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-5/6 mx-auto py-8 lg:py-12">
                            {
                                isShown ? packages.map(cart => <CartDetails cart={cart} key={cart.id}></CartDetails>) :
                                    packages.slice(0, 4).map(cart => <CartDetails cart={cart} key={cart.id}></CartDetails>)
                            }
                        </div>

                        {
                            packages.length > 4 ? (
                                <div className="flex items-center justify-center mb-8 lg:mb-24">
                                    <button
                                        onClick={() => setIsShown(!isShown)}
                                        className={`py-3 px-7 bg-[#009444] text-[#FFF] rounded-lg ${isShown ? 'hidden' : ''}`}
                                    >
                                        See All
                                    </button>
                                </div>
                            ) : null
                        }
                    </div>
            }

        </div>
    );
};

export default ShoppingCart;